import React from "react";
import { useState, useEffect } from "react";
import generateUniqueId from "generate-unique-id";
import { Button, Col, Container, Form, Nav, Navbar, Row, Table } from "react-bootstrap"
import '../Components/PatientForm.css';
import { FaEnvelope, FaHome, FaHospitalAlt, FaPhoneAlt, FaUser } from "react-icons/fa";

const getStoredPatients = () => {
  return JSON.parse(localStorage.getItem("patients")) || [];
}

const Patient = () => {
  const intialState = {
    id: "",
    name: "",
    gender: "",
    bloodGroup: "",
    email: "",
    mobileNo: "",
    admissionDate: "",
    department: "",
  }


  const [inputForm, setInputForm] = useState(intialState);
  const [patients, setPatients] = useState(getStoredPatients());
  const [isEdit, setIsEdit] = useState(false);
  const [errors, setErrors] = useState({});


  const handleChanged = (e) => {
    const { name, value } = e.target;
    setInputForm({
      ...inputForm,
      [name]: value
    });
  }

  const validate = () => {
    const formError = {};

    if (!inputForm.name.trim()) {
      formError.name = "Full name is required!";
    }

    if (!inputForm.email.trim()) {
      formError.email = "Email is required!";
    }
    if (!inputForm.mobileNo.trim()) {
      formError.mobileNo = "Contact Number is required!";
    }
    if (!inputForm.admissionDate.trim()) {
      formError.admissionDate = "AdmissionDate is required!";
    }

    

    setErrors(formError);
    return Object.keys(formError).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // let id = Math.floor(Math.random() * 100000);
    if (!validate()) return;
    if (isEdit) {
      let updateRecords = patients.map(pat => {
        if (pat.id == inputForm.id) {
          return inputForm;
        } else {
          return pat;
        }
      });

      setPatients(updateRecords);
      setIsEdit(false);

    } else {
      let id = generateUniqueId({ length: 6, useLetters: false });
      inputForm.id = id;
      console.log("Submit", inputForm);
      setPatients([...patients, inputForm]);
    }
    setInputForm(intialState);
  };

  const handleDelete = (id) => {
    let deleteRecords = patients.filter(pat => pat.id != id);
    setPatients(deleteRecords);
  }

  const handleEdit = (id) => {
    let record = patients.find(pat => pat.id == id);
    setInputForm(record);
    setIsEdit(true);
  }

  useEffect(() => {
    localStorage.setItem("patients", JSON.stringify(patients));
  }, [patients]);


  return (
    <>
      <div className="header-navbar">
        <Navbar bg="primary" expand="lg" className="shadow-sm py-3">
          <Container fluid >
            <Navbar.Brand href="#" className="d-flex align-items-center">
              <FaHospitalAlt size={30} className="me-2 text-secondary" />
              <span className="fw-bold fs-4 text-secondary">HealthyLife Hospital</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#home" className="fw-semibold">Home</Nav.Link>
                <Nav.Link href="#services" className="fw-semibold">Services</Nav.Link>
                <Nav.Link href="#about" className="fw-semibold">About Us</Nav.Link>
                <Nav.Link href="#contact" className="fw-semibold">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      <Container>
        <div className="form-wrapper">
          <Row>
            <Col sm={12}>
              <div className="title-text">🏥 Patient Admission Form</div>
              <Form className="mt-4" onSubmit={handleSubmit}>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm="3">
                    Full Name
                  </Form.Label>
                  <Col sm="9">
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Enter Full Name"
                      value={inputForm.name}
                      onChange={handleChanged}
                    />
                    {errors.name && <div className="error">{errors.name}</div>}

                  </Col>
                </Form.Group>

                 <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm="3">
                    Gender
                  </Form.Label>
                  <Col sm="9">
                    <Form.Check
                      inline
                      label="Male"
                      name="gender"
                      type="radio"
                      value={"Male"}
                      onChange={handleChanged}
                      checked={inputForm.gender == "Male" ? true : false}
                    />      <Form.Check
                      inline
                      label="Female"
                      name="gender"
                      type="radio"
                      value={"Female"}
                      onChange={handleChanged}
                      checked={inputForm.gender == "Female" ? true : false}
                    />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm="3">
                    Blood Group
                  </Form.Label>
                  <Col sm="9">
                    <Form.Select name="bloodGroup" value={inputForm.bloodGroup} onChange={handleChanged}>
                      <option value="">Select Blood Group</option>
                      <option value="A++" selected={inputForm.bloodGroup == "A++"}>A++</option>
                      <option value="A+-" selected={inputForm.bloodGroup == "A+-"}>A+-</option>
                      <option value="B++" selected={inputForm.bloodGroup == "B++"}>B++</option>
                      <option value="B+-" selected={inputForm.bloodGroup == "B+-"}>B+-</option>
                      <option value="O++" selected={inputForm.bloodGroup == "O++"}>O++</option>
                      <option value="O+-" selected={inputForm.bloodGroup == "O+-"}>O+-</option>
                      <option value="AB++" selected={inputForm.bloodGroup == "AB++"}>AB++</option>
                      <option value="AB+-" selected={inputForm.bloodGroup == "AB+-"}>AB+-</option>
                    </Form.Select>
                  </Col>
                </Form.Group>
                

                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm="3">
                    Contact Number
                  </Form.Label>
                  <Col sm="9">
                    <Form.Control
                      type="text"
                      name="mobileNo"
                      placeholder="Enter Your Contact Number"
                      value={inputForm.mobileNo}
                      onChange={handleChanged}
                    />
                    {errors.mobileNo && <div className="error">{errors.mobileNo}</div>}
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm="3">
                    Email
                  </Form.Label>
                  <Col sm="9">
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Enter Your Email"
                      value={inputForm.email}
                      onChange={handleChanged}
                    />
                    {errors.email && <div className="error">{errors.email}</div>}
                  </Col>
                </Form.Group>
                
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm="3">
                    Admission Date
                  </Form.Label>
                  <Col sm="9">
                    <Form.Control
                      type="date"
                      name="admissionDate"
                      value={inputForm.admissionDate}
                      onChange={handleChanged}
                    />
                    {errors.admissionDate && <div className="error">{errors.admissionDate}</div>}
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm="3">
                    Department
                  </Form.Label>
                  <Col sm="9">
                    <Form.Select name="department" value={inputForm.department} onChange={handleChanged}>
                      <option value="">Select Department</option>
                      <option value="General Medicine" selected={inputForm.department == "General Medicine"}>General Medicine</option>
                      <option value="Cardiology" selected={inputForm.department == "Cardiology"}>Cardiology</option>
                      <option value="Neurology" selected={inputForm.department == "Neurology"}>Neurology</option>
                      <option value="Orthopedics" selected={inputForm.department == "Orthopedics"}>Orthopedics</option>
                      <option value="Gynecology" selected={inputForm.department == "Gynecology"}>Gynecology</option>
                      <option value="Pediatrics" selected={inputForm.department == "Pediatrics"}>Pediatrics</option>
                    </Form.Select>
                  </Col>
                </Form.Group>
              <div className="text-center style-btn">
                <Button type="submit">{isEdit ? "Update Patient  Info" : "Register Patient"} </Button>
              </div>
              </Form>
            </Col>
          </Row>
        </div>
      </Container>

      <Container>
        <div className="employee mt-5 mb-5">
          <h3>📋 Patient List</h3>
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Blood Group</th>
                <th>Contact Number</th>
                <th>Email</th>
                <th>Admission Date</th>
                <th>Department</th>
                <th colSpan={2} >Actions</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient) => (
                <tr>
                  <td>{patient.id}</td>
                  <td>{patient.name}</td>
                  <td>{patient.gender}</td>
                  <td>{patient.bloodGroup}</td>
                  <td>{patient.mobileNo}</td>
                  <td>{patient.email}</td>
                  <td>{patient.admissionDate}</td>
                  <td>{patient.department}</td>
                  <td><Button onClick={() => handleEdit(patient.id)} variant="warning">Edit</Button></td>
                  <td><Button onClick={() => handleDelete(patient.id)} variant="danger">Delete</Button></td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Container>
    </>
  )

}

export default Patient;