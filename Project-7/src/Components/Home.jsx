import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { getStorageData, setStorageData } from "../Services/localSotrageData";
import { useNavigate } from "react-router";
import { FaEdit, FaEye, FaRegTrashAlt } from "react-icons/fa";

const Home = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  const handleEdit = (id) => navigate(`/edit-product/${id}`);

  const handleDelete = (id) => {
    const filterData = products.filter((pro) => pro.id !== id);
    setStorageData(filterData);
    setProducts(filterData);
  };

  useEffect(() => {
    setProducts(getStorageData());
  }, []);

  return (
    <>
      <h1 className="mt-5 mb-3 text-center">Products Details</h1>
      <Container className="mb-4">
        <Row className="g-4">
          {products.map((pro) => (
            <Col key={pro.id} sm={6} md={4} lg={3}>
              <div className="product-card">
                <img
                  src={pro.image}
                  alt={pro.name}
                  className="product-image"
                />
                <div className="product-card-body">
                  <div className="product-title">{pro.name}</div>
                  <div className="product-info">
                    <strong>Category:</strong> {pro.category} <br />
                    <strong>Price:</strong> ₹{pro.price}
                  </div>
                  <div className="product-actions">
                    <Button variant="primary" size="sm" onClick={() => navigate(`/product/${pro.id}`)}><FaEye /></Button>
                    <Button variant="warning" size="sm" onClick={() => navigate(`/edit-product/${pro.id}`)}><FaEdit /></Button>
                    <Button variant="danger" size="sm" onClick={() => handleDelete(pro.id)}><FaRegTrashAlt /></Button>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Home;
