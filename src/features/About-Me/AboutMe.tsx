import React from 'react'
import DisplayHeading from '../../components/Heading'
import { Col, Container, Image, Row } from 'react-bootstrap'
import heroImage from '../../assets/images/about-me-1.jpg';

const AboutMe = () => {
  return (
    <div>
      <DisplayHeading label='About Me' />
      <Container>
        <Row className="hero-container">
            <Col md={6} xs={12}>
                <Image className="rounded img-fluid mx-auto" src={heroImage} alt="hero image" />
            </Col>
            <Col md={6} xs={12}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, ex modi. Obcaecati eos veritatis tempora esse ipsum aliquid, ad reprehenderit assumenda totam quisquam repudiandae deleniti quas mollitia, asperiores expedita vitae officiis nulla impedit alias adipisci aliquam debitis? Corrupti eos fugit suscipit culpa ratione? Obcaecati recusandae delectus architecto facilis enim harum?</p>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default AboutMe
