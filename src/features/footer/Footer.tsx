import { Container, Row, Col } from "react-bootstrap";
import { FaInstagram, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="d-flex flex-column flex-md-row justify-content-center align-items-center text-center text-md-start">
          <Col xs={12} md="auto" className="footer-text mb-3 mb-md-0">
            © {new Date().getFullYear()} WebDev | All Rights Reserved
          </Col>
          <Col xs={12} md="auto">
            <div className="social-icons d-flex justify-content-center">
              <a href="https://github.com/dipanjan441" target="_blank" rel="noopener noreferrer">
                <FaGithub color="#0d1117" className="social-icon" />
              </a>
              <a href="https://linkedin.com/in/dipanjan-tripathi-652a1a207" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="social-icon" />
              </a>
              <a href="https://facebook.com/dipanjan.tripathi" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="social-icon" />
              </a>
              <a href="https://instagram.com/im_dip.10" target="_blank" rel="noopener noreferrer">
                <FaInstagram color="#E1306C " className="social-icon" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
