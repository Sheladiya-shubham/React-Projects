
import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signUpAsync } from "../../Services/Actions/userActino";
// import './SignUp.css'; 

const SignUP = () => {
  const { isSignUP, errMSG } = useSelector((state) => state.useReducer);
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
    dispatch(signUpAsync(inputForm));
  };

  useEffect(() => {
    if (isSignUP) {
      navigate("/signIn");
    }
  }, [isSignUP]);

  return (
    <div className="bk">
      <Container className="my-5 d-flex justify-content-center">
    <div className="signup-wrapper">
       <h3 className="text-center mb-4 text-danger">Sign Up Now</h3>
        {errMSG && <p className="error-msg">{errMSG}</p>}
        <Form className="mt-4" onSubmit={handleSubmit}>
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

          <Button type="submit" className="w-100 signup-button">
            Sign Up
          </Button>
        </Form>

        <p className="signin-link mt-3">
          Have an account? <Link to="/signIn">Sign In</Link>
        </p>
    </div>
    </Container>
    </div>
  );
};

export default SignUP;