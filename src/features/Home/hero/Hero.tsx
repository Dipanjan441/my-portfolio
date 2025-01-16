import { Col, Container, Image, Row } from "react-bootstrap"
import heroImage from '../../../assets/images/hero-1.jpg';

const Hero = () => {
  return (
    <Container>
        <Row className="hero-container">
            <Col md={6} xs={12}>
                <h1>Dipanjan Tripathi</h1>
                <p className="h4 mt-4 mb-3">Frontend Developer</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, ex modi. Obcaecati eos veritatis tempora esse ipsum aliquid, ad reprehenderit assumenda totam quisquam repudiandae deleniti quas mollitia, asperiores expedita vitae officiis nulla impedit alias adipisci aliquam debitis? Corrupti eos fugit suscipit culpa ratione? Obcaecati recusandae delectus architecto facilis enim harum?</p>
            </Col>
            <Col md={6} xs={12}>
                <Image className="rounded img-fluid mx-auto" src={heroImage} alt="hero image" />
            </Col>
        </Row>
    </Container>
  )
}

export default Hero
