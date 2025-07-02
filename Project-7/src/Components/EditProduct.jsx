import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { getStorageData, setStorageData } from "../Services/localSotrageData";
import { useNavigate, useParams } from "react-router";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [error, setErrors] = useState({});
  const [inputForm, setInputForm] = useState({
    id: "",
    name: "",
    category: "",
    brand: "",
    desc: "",
    image: "",
    price: "",
  });

  const handleChanged = (e) => {
    const { name, value } = e.target;
    setInputForm({ ...inputForm, [name]: value });
  };

  const validate = () => {
    const formError = {};

    if (!inputForm.name.trim()) formError.name = "Product name is required!";
    if (!inputForm.brand.trim()) formError.brand = "Brand name is required!";
    if (!inputForm.desc.trim()) formError.desc = "Product description is required!";
    if (!inputForm.category.trim()) formError.category = "Category is required!";
    if (!inputForm.image.trim()) formError.image = "Image URL is required!";
    if (!inputForm.price.trim()) formError.price = "Price is required!";

    setErrors(formError);
    return Object.keys(formError).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    let proData = getStorageData();
    const updatedData = proData.map((pro) =>
      pro.id === id ? inputForm : pro
    );
    setStorageData(updatedData);
    navigate("/");
  };

  useEffect(() => {
    let data = getStorageData();
    let singleRec = data.find((pro) => pro.id === id);
    if (singleRec) setInputForm(singleRec);
  }, [id]);

  return (
    <Container>
      <div className="form-wrapper">
        <h3>Edit Product</h3>
        <Form className="mt-4" onSubmit={handleSubmit}>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="3">Product Name</Form.Label>
            <Col sm="9">
              <Form.Control
                type="text"
                name="name"
                value={inputForm.name}
                onChange={handleChanged}
                placeholder="Enter Product Name"
              />
              {error.name && <div className="text-danger">{error.name}</div>}
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="3">Category</Form.Label>
            <Col sm="9">
              <Form.Select
                name="category"
                value={inputForm.category}
                onChange={handleChanged}
              >
                <option value="">Select Category</option>
                <option value="Electronics">Electronics</option>
                <option value="Clothing">Clothing</option>
                <option value="Furniture">Furniture</option>
                <option value="Books">Books</option>
                <option value="Sports">Sports</option>
              </Form.Select>
              {error.category && <div className="text-danger">{error.category}</div>}
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="3">Brand</Form.Label>
            <Col sm="9">
              <Form.Control
                type="text"
                name="brand"
                value={inputForm.brand}
                onChange={handleChanged}
                placeholder="Enter Brand Name"
              />
              {error.brand && <div className="text-danger">{error.brand}</div>}
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="3">Description</Form.Label>
            <Col sm="9">
              <Form.Control
                as="textarea"
                name="desc"
                value={inputForm.desc}
                onChange={handleChanged}
                placeholder="Enter Product Description"
              />
              {error.desc && <div className="text-danger">{error.desc}</div>}
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="3">Product Image</Form.Label>
            <Col sm="9">
              <Form.Control
                type="text"
                name="image"
                value={inputForm.image}
                onChange={handleChanged}
                placeholder="Enter Image URL"
              />
              {error.image && <div className="text-danger">{error.image}</div>}
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="3">Price</Form.Label>
            <Col sm="9">
              <Form.Control
                type="text"
                name="price"
                value={inputForm.price}
                onChange={handleChanged}
                placeholder="Enter Price"
              />
              {error.price && <div className="text-danger">{error.price}</div>}
            </Col>
          </Form.Group>

          <Button type="submit">Update Product</Button>
        </Form>
      </div>
    </Container>
  );
};

export default EditProduct;
