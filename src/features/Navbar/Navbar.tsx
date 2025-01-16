import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavbarComponent = () => {
  return (
    <Navbar expand="md" style={{width: '100%'}} className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" className='fw-bold brand-highlight'>
            <img src='logo.png'
            height='50'
            width='50'
            />
            &nbsp;
            WebDev
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="my-navbar-nav" />
        <Navbar.Collapse id="my-navbar-nav">
          <Nav className="ms-auto fw-bold text-center">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#project">Projects</Nav.Link>
            <Nav.Link href="#technical-experties">Technical Experties</Nav.Link>
            <Nav.Link href="#social-media">Social Media</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComponent
