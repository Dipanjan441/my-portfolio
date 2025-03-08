import { useLayoutEffect, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-scroll';
import { NavbarItems } from './navigation';

interface Props {
  setNavbarHeight: (height: number)=>void
}

const NavbarComponent = ({setNavbarHeight}: Props) => {
  const navbarRef = useRef<HTMLElement | null>(null);
  useLayoutEffect(()=>{
    if(navbarRef.current) {
      setNavbarHeight(navbarRef.current.offsetHeight)
    }
  },[navbarRef.current?.offsetHeight])
  return (
    <Navbar ref={navbarRef} expand="md" fixed='top' style={{width: '100%', boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }} className="bg-body-tertiary">
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
            {
              NavbarItems.map((item)=>(
                <Nav.Link as="div">
                  <Link key={item.id} to={item.path} smooth={true} spy={true} duration={200} offset={-80} activeClass='active-link' >{item.title}</Link>
                </Nav.Link>
              ))
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComponent
