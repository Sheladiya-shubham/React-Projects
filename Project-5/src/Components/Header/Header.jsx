import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { BsSearch, BsPerson, BsBag, BsHeart } from "react-icons/bs";
import logo from "../../assets/logo-primary.svg";
import "../Header/Header.css"; 

const Header = () => {
  return (
    <Navbar
      expand="lg"
      style={{
        backgroundColor: "#fff",
        padding: "10px 0",
        fontFamily: `"DM Sans", "HelveticaNeue-Light", "Helvetica Neue Light", 
                      "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif`,
        boxShadow: "0 1px 10px rgba(0,0,0,0.06)",
        position: "relative",
        top: 0,
        zIndex: 999,
      }}
    >
      <Container fluid className="px-5">
        {/* Logo */}
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" style={{ height: "59px", width: "174px" }} />
        </Navbar.Brand>

        {/* Mobile Toggle */}
        <Navbar.Toggle aria-controls="main-navbar" />

        {/* Nav + Icons */}
        <Navbar.Collapse id="main-navbar">
          {/* Center Nav Links */}
          <Nav className="mx-auto  text-capitalize menu-items">
            {/* HOME with dropdown */}
            <NavDropdown
              title={
                <span className="nav-link-item align-items-center gap-1">
                  Home
                </span>
              }
              className="dropdown-item-style"
            >
              <NavDropdown.Item href="#">Home v1</NavDropdown.Item>
              <NavDropdown.Item href="#">Home v2</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#" className="nav-link-item">Our Story</Nav.Link>

            <NavDropdown
              title={
                <span className="nav-link-item align-items-center gap-1">Shop</span>
              }
              className="dropdown-item-style"
            >
              <NavDropdown.Item href="#">All Products</NavDropdown.Item>
              <NavDropdown.Item href="#">Categories</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title={
                <span className="nav-link-item align-items-center gap-1">Blog</span>
              }
              className="dropdown-item-style"
            >
              <NavDropdown.Item href="#">Latest Posts</NavDropdown.Item>
              <NavDropdown.Item href="#">Single Blog</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title={
                <span className="nav-link-item align-items-center gap-1">Pages</span>
              }
              className="dropdown-item-style"
            >
              <NavDropdown.Item href="#">About Us</NavDropdown.Item>
              <NavDropdown.Item href="#">FAQ</NavDropdown.Item>
              <NavDropdown.Item href="#">404</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#" className="nav-link-item  align-items-center gap-1">Contact</Nav.Link>
          </Nav>

          {/* Right Side Icons */}
          <div className="d-flex align-items-center gap-4 ms-auto">
            <BsSearch size={18} className="icon-style" />
            <BsPerson size={18} className="icon-style" />
            <BsHeart size={18} className="icon-style" />
            <BsBag size={18} className="icon-style" />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
