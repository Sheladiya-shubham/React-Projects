import { Container, Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { FaShoppingCart, FaSearch, FaUser } from "react-icons/fa";
import logo from '../assets/Myntra-Logo.png';
import { Link } from "react-router";

const Header = () => {
  return (
    <header className="glass-header">
      <Container fluid className="d-flex align-items-center justify-content-between flex-wrap px-4 py-3">

        {/* LOGO */}
        <div className="d-flex align-items-center header-logo">
          <Link to="/">
            <img src={logo} alt="Logo" className="custom-logo" />
          </Link>
        </div>

        {/* SEARCH BAR */}
        <div className="header-search mx-auto my-3">
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search products..."
              className="search-input"
            />
            <Button type="submit" className="search-button"><FaSearch /></Button>
          </Form>
        </div>

        {/* RIGHT ICONS */}
        <Nav className="header-actions d-flex align-items-center gap-3">
          <Nav.Link className="action-btn login"><FaUser className="me-1" /> Login</Nav.Link>
          <Nav.Link className="action-btn cart"><FaShoppingCart className="me-1" /> Cart</Nav.Link>
          <Link to="/add-product" className="action-btn add-product text-decoration-none">+ Add Product</Link>
        </Nav>
      </Container>
    </header>
  );
};

export default Header;
