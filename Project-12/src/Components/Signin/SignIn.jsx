import { useEffect, useState } from "react";
import { Alert, Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom"; 
import { signInAsync, signINWithGoogleAsync } from "../../Services/Actions/userActino";
import { FaGoogle } from "react-icons/fa";
// import "./SignIN.css";

const SignIN = () => {
  const { user, errMSG } = useSelector((state) => state.useReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inputForm, setInputForm] = useState({
    email: "",
    password: "",
  });
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

    if (!inputForm.email.trim()) formError.email = "Email is required!";
    if (!/\S+@\S+\.\S+/.test(inputForm.email)) formError.email = "Invalid email format!";
    if (!inputForm.password.trim()) formError.password = "Password is required!";
    if (inputForm.password.length < 6) formError.password = "Password must be at least 6 characters!";

    setErrors(formError);
    return Object.keys(formError).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    dispatch(signInAsync(inputForm));
  };

  const handleSignInGoogle = () => {
    dispatch(signINWithGoogleAsync());
  };

  useEffect(() => {
    if (user) navigate("/");
  }, [user]);

  return (
    <>
      <div className="bk">
        <Container className="my-5 d-flex justify-content-center">
  <div className="signin-container">
    <h3 className="text-center mb-4 text-danger">Sign In</h3>
    {errMSG && <Alert variant="danger">{errMSG}</Alert>}
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={inputForm.email}
          onChange={handleChanged}
          placeholder="Enter email"
        />
        {errors.email && <div className="signin-error">{errors.email}</div>}
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          value={inputForm.password}
          onChange={handleChanged}
          placeholder="Enter password"
        />
        {errors.password && <div className="signin-error">{errors.password}</div>}
      </Form.Group>

      <Button type="submit" variant="outline-danger" className="w-100 mb-2">
        Sign In
      </Button>

      <Button
        onClick={handleSignInGoogle}
        variant="outline-danger"
        className="w-100 d-flex align-items-center justify-content-center"
      >
        <FaGoogle className="me-2" /> Sign in with Google
      </Button>

      <div className="text-center mt-3">
        <p className="mb-0">
          Don't have an account? <Link to="/signup" className="text-primary">Sign Up</Link>
        </p>
      </div>
    </Form>
  </div>
</Container>
      </div>
    </>
  );
};

export default SignIN;