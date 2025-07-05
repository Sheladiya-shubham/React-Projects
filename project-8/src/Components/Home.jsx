import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { getStorageData, setStorageData } from "../Services/localSotrageData";
import { useNavigate } from "react-router";
import { FaEdit, FaEye, FaRegTrashAlt } from "react-icons/fa";

const Home = () => {
  const navigate = useNavigate();
  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  const [sortField, setSortField] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4;

  useEffect(() => {
    const data = getStorageData();
    setAllProducts(data);
    setProducts(data);
  }, []);

  const handleEdit = (id) => navigate(`/edit-product/${id}`);

  const handleDelete = (id) => {
    const filterData = allProducts.filter((pro) => pro.id !== id);
    setStorageData(filterData);
    setAllProducts(filterData);
    setProducts(filterData);

    const totalPagesAfterDelete = Math.ceil(filterData.length / productsPerPage);
    if (currentPage > totalPagesAfterDelete) {
      setCurrentPage(totalPagesAfterDelete || 1);
    }
  };

  const handleSearch = () => {
    const searchData = allProducts.filter((pro) =>
      pro.name.toLowerCase().includes(searchVal.toLowerCase()) ||
      pro.category.toLowerCase().includes(searchVal.toLowerCase()) ||
      pro.brand.toLowerCase().includes(searchVal.toLowerCase()) ||
      pro.price.toString().includes(searchVal)
    );
    setProducts(searchData);
    setCurrentPage(1);
  };

  const handleClear = () => {
    setProducts(allProducts);
    setCurrentPage(1);
    setSearchVal("");
  };

  const handleSort = (field, type) => {
    if (!field) return;
    const sorted = [...products].sort((a, b) => {
      const aVal = a[field]?.toString().toLowerCase() || "";
      const bVal = b[field]?.toString().toLowerCase() || "";
      return type === "asc" ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
    });
    setProducts(sorted);
  };

  const handleClearSort = () => {
    setSortField("");
    setProducts(allProducts);
    setCurrentPage(1);
  };

  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = products.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(products.length / productsPerPage);

  return (
    <>
      <h1 className="mt-5 mb-4 text-center">Products Details</h1>

      <Container>
        <div className="d-flex flex-wrap align-items-center gap-3 mb-4">
          <input
            type="text"
            className="form-control"
            style={{ width: "300px", minWidth: "200px" }}
            placeholder="Search by name, category, brand, price"
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
          />
          <Button variant="primary" onClick={handleSearch}>Search</Button>
          <Button variant="secondary" onClick={handleClear}>Clear</Button>

          <div style={{ width: "20px" }}></div>

          <select
            value={sortField}
            onChange={(e) => setSortField(e.target.value)}
            className="form-select"
            style={{ width: "200px", minWidth: "150px" }}
          >
            <option value="">Select Sort Field</option>
            <option value="name">Name</option>
            <option value="category">Category</option>
            <option value="brand">Brand</option>
            <option value="price">Price</option>
          </select>

          {/* ✅ ONLY these buttons use your custom style */}
          <Button className="action-btn" onClick={() => handleSort(sortField, "asc")}>Sort A-Z</Button>
          <Button className="action-btn" onClick={() => handleSort(sortField, "desc")}>Sort Z-A</Button>
          <Button className="action-btn" onClick={handleClearSort}>Clear Sort</Button>
        </div>
      </Container>

      <Container className="mb-4">
        {products.length > 0 ? (
          <Row className="g-4">
            {currentProducts.map((pro) => (
              <Col key={pro.id} sm={6} md={4} lg={3}>
                <div className="product-card">
                  <img src={pro.image} alt={pro.name} className="product-image" />
                  <div className="product-card-body">
                    <div className="product-title">{pro.name}</div>
                    <div className="product-info">
                      <strong>Category:</strong> {pro.category} <br />
                      <strong>Brand:</strong> {pro.brand} <br />
                      <strong>Price:</strong> ₹{pro.price}
                    </div>
                    <div className="product-actions d-flex gap-2 mt-2">
                      <Button variant="primary" size="sm" onClick={() => navigate(`/product/${pro.id}`)}><FaEye /></Button>
                      <Button variant="warning" size="sm" onClick={() => handleEdit(pro.id)}><FaEdit /></Button>
                      <Button variant="danger" size="sm" onClick={() => handleDelete(pro.id)}><FaRegTrashAlt /></Button>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        ) : (
          <h5 className="text-center text-danger">No products found</h5>
        )}
      </Container>

      {/* ❌ Pagination buttons left as-is */}
      {products.length > 0 && (
        <div className="d-flex justify-content-center mb-5">
          <Button disabled={currentPage === 1} onClick={() => setCurrentPage(prev => prev - 1)}>Prev</Button>
          <span className="mx-3">Page {currentPage} of {totalPages}</span>
          <Button disabled={currentPage === totalPages} onClick={() => setCurrentPage(prev => prev + 1)}>Next</Button>
        </div>
      )}
    </>
  );
};

export default Home;
