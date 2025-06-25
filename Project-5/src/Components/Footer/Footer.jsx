import { Col, Container, Row } from "react-bootstrap";
import DecorLine from "../../assets/decor-primary.svg";
import DeliveryIcon from "../../assets/delivery-red.png";
import IcecreamIcon from "../../assets/icecream-red.png";
import StoreIcon from "../../assets/store-red.png";
import logo from "../../assets/logo-primary.svg";
import '../Footer/Footer.css'; 

const Footer = () => {
  return (
      <Container>
    <footer style={{ fontFamily: "sans-serif", marginTop: "60px" }}>
           <Row className="align-items-center pt-5 " style={{borderBottom: "1px solid #ddd", paddingBottom: "20px",borderTop: "3px solid red",}}>
        <Col xs={12} sm={12}  md={4}>
          <h2 className="f-heading" style={{
    fontWeight: "600",
    fontFamily:
      'Kalnia, "HelveticaNeue-Light"',
    fontSize: "28px",
  }}> Need Lebagol Now?</h2>
        </Col>

        <Col xs={12}  md={8}>
          <div className="d-flex justify-content-around align-items-center ">
            {/* Local Delivery */}
            <div className="text-center">
              <img src={DeliveryIcon} alt="Local Delivery" className="f-icon" />
              <p className="mt-2 f-text" style={{ fontWeight: 500,fontSize:"12px"}}>LOCAL DELIVERY</p>
            </div>

            <img src={DecorLine} alt="divider" className="line" />

            {/* Scoop Shops */}
            <div className="text-center">
              <img src={IcecreamIcon} alt="Scoop Shops"   className="f-icon"/>
              <p className="mt-2 f-text" style={{ fontWeight: 500,fontSize:"12px" }}>SCOOP SHOPS</p>
            </div>

            <img src={DecorLine} alt="divider" className="line" />

            {/* Grocery Locator */}
            <div className="text-center">
              <img src={StoreIcon} alt="Grocery Locator" className="f-icon"/>
              <p className="mt-2 f-text" style={{ fontWeight: 500, fontSize:"12px" }}>GROCERY LOCATOR</p>
            </div>
          </div>
        </Col>
      </Row>

        {/* Main Footer Grid */}
        <Row className="text-start py-5">
          {/* Logo & Contact */}
          <Col  xs={12} sm={12} md={4}>
          <div className="f-valley">
            <img src={logo} alt="Logo" style={{ height: "50px" ,width:"160px",marginBottom:"25px"}} />
            <p style={{fontSize:"14px"}}>5609 E Sprague Ave, Spokane<br />Valley, WA 99212, USA</p>
            <p style={{ fontWeight: "700", fontSize: "18px",marginTop:"30px",marginBottom:"0px"}}>+ 1834 123 456 789</p>
            <p style={{fontSize:"14px"}}>support1@example.com</p>
          </div>
          </Col>

          {/* Info Links */}
          <Col xs={6} sm={6} md={2}>
            <h6 style={{ fontWeight: "700",fontSize:"16px"}}>Information</h6>
            <p className="footer-link" style={{fontSize:"14px",marginTop:"10px"}}>Help Center</p>
            <p className="footer-link" style={{fontSize:"14px"}}>Shipping</p>
            <p className="footer-link" style={{fontSize:"14px"}}>Returns</p>
            <p className="footer-link" style={{fontSize:"14px"}}>Policies</p>
            <p className="footer-link" style={{fontSize:"14px"}}>Gift Cards</p>
          </Col>

          <Col md={2} sm={6}>
            <h6 style={{ fontWeight: "700",fontSize:"16px" }}>Useful Links</h6>
            <p className="footer-link" style={{fontSize:"14px",marginTop:"10px"}}>My Account</p>
            <p className="footer-link" style={{fontSize:"14px"}}>Order Tracking</p>
            <p className="footer-link" style={{fontSize:"14px"}}>All Products</p>
            <p className="footer-link" style={{fontSize:"14px"}}>Ingredients</p>
            <p className="footer-link" style={{fontSize:"14px"}}>Wholesale</p>
          </Col>

          <Col md={2} sm={6}>
            <h6 style={{ fontWeight: "700",fontSize:"16px"}}>About Us</h6>
            <p className="footer-link" style={{fontSize:"14px",marginTop:"10px"}}>Our story</p>
            <p className="footer-link" style={{fontSize:"14px"}}>Contacts</p>
            <p className="footer-link" style={{fontSize:"14px"}}>Affiliate Program</p>
            <p className="footer-link" style={{fontSize:"14px"}}>Referral Program</p>
            <p className="footer-link" style={{fontSize:"14px"}}>Careers</p>
          </Col>

          <Col md={2} sm={6}>
            <h6 style={{ fontWeight: "700",fontSize:"16px" }}>Categories</h6>
            <p className="footer-link" style={{fontSize:"14px",marginTop:"10px"}}>Gelato</p>
            <p className="footer-link" style={{fontSize:"14px"}}>Kulfi</p>
            <p className="footer-link" style={{fontSize:"14px"}}>Sherbet</p>
            <p className="footer-link" style={{fontSize:"14px"}}>Sorbet</p>
            <p className="footer-link" style={{fontSize:"14px"}}>Frozen Yogurt</p>
          </Col>
        </Row>

        {/* Bottom Bar */}
<Row className="footer-row">
  {/* Left Section */}
  <Col xs={12} md={4} className="footer-section left">
    <p className="footer-text">© 2024 <strong>Lebagol</strong>. All Rights Reserved</p>
  </Col>

  {/* Middle Section */}
  <Col xs={12} md={4} className="footer-section center">
    <img
      src="/src/assets/payment.png"
      alt="Payment Methods"
      className="payment-img"
    />
  </Col>

  {/* Right Section */}
  <Col xs={12} md={4} className="footer-section right">
    <div className="follow-wrapper">
      <span className="follow-label">Follow Us:</span>
      <div className="social-icons">
        <img src="https://img.icons8.com/ios-filled/20/000000/facebook-new.png" alt="Facebook" />
        <img src="https://img.icons8.com/ios-filled/20/000000/twitter.png" alt="Twitter" />
        <img src="https://img.icons8.com/ios-filled/20/000000/instagram-new.png" alt="Instagram" />
        <img src="https://img.icons8.com/ios-filled/20/000000/pinterest.png" alt="Pinterest" />
        <img src="https://img.icons8.com/ios-filled/20/000000/youtube-play.png" alt="YouTube" />
      </div>
    </div>
  </Col>
</Row>








    </footer>
      </Container>
  );
};

export default Footer;