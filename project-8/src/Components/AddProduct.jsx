import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import generateUniqueId from "generate-unique-id";
import { getStorageData, setStorageData } from "../Services/localSotrageData";
import { useNavigate } from "react-router";

const AddProduct = () => {
  const navigate = useNavigate();
  const initialState = {
    id: "",
    name: "",
    category: "",
    brand:"",
    desc: "",
    image: "",
    price: "",
  };

  const [inputForm, setInputForm] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChanged = (e) => {
    const { name, value } = e.target;
    setInputForm({
      ...inputForm,
      [name]: value,
    });
  };

  const validate = () => {
    const formError = {};

    if (!inputForm.name.trim()) formError.name = "Product name is required!";
    if (!inputForm.brand.trim()) formError.brand = "Brand name is required!";
    if (!inputForm.desc.trim()) formError.desc = "Product Description is required!";
    if (!inputForm.category.trim()) formError.category = "Category is required!";
    if (!inputForm.image.trim()) formError.image = "Image URL is required!";
    if (!inputForm.price.trim()) formError.price = "Price is required!";

    setErrors(formError);
    return Object.keys(formError).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const id = generateUniqueId({ length: 6, useLetters: false });
    const productData = { ...inputForm, id };

    let proData = getStorageData();
    proData.push(productData);
    setStorageData(proData);
    setInputForm(initialState);
    navigate("/");
  };

  return (
    <Container>
      <div className="form-wrapper">
        <h3>Add Product</h3>
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
              {errors.name && <div className="error">{errors.name}</div>}
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="3">Category</Form.Label>
            <Col sm="9">
              <Form.Select name="category" value={inputForm.category} onChange={handleChanged}>
                <option value="">Select Category</option>
                <option value="Electronics">Electronics</option>
                <option value="Clothing">Clothing</option>
                <option value="Furniture">Furniture</option>
                <option value="Books">Books</option>
                <option value="Sports">Sports</option>
              </Form.Select>
              {errors.category && <div className="error">{errors.category}</div>}
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
              {errors.brand && <div className="error">{errors.brand}</div>}
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
                placeholder="Enter Product description"
              />
              {errors.desc && <div className="error">{errors.desc}</div>}
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="3">Product Image </Form.Label>
            <Col sm="9">
              <Form.Control
                type="text"
                name="image"
                value={inputForm.image}
                onChange={handleChanged}
                placeholder="Enter Image URL"
              />
              {errors.image && <div className="error">{errors.image}</div>}
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
              {errors.price && <div className="error">{errors.price}</div>}
            </Col>
          </Form.Group>

          <Button type="submit">Add Product</Button>
        </Form>
      </div>
    </Container>
  );
};

export default AddProduct;
