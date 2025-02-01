import { Col, Container, Row } from "react-bootstrap"
import { HeroData } from "../../../constants/data";
import ContentSlider from "../../../components/ContentSlider";
import { SliderType } from "../../../type";
// import {motion} from "framer-motion";

const Hero = () => {
  return (
    <Container>
        <Row className="hero-container">
            <Col md={6} xs={12} className="text-center text-md-start">
                <h1 className="mt-2 hero-title">
                  {HeroData.title}
                </h1>
                <p className="mt-2 mb-2 hero-subtitle">{HeroData.subTitle}</p>
                <p className="mt-2 mb-2 hero-tagline">{HeroData.tagLine}</p>
                <p className="hero-description">{HeroData.description}</p>
            </Col>
            <Col md={6} xs={12}>
              <div style={{width:'80%',margin: '0 auto'}}>
                <ContentSlider sliderType={SliderType.cards} sliderImages={HeroData.heroImage} />
              </div>
            </Col>
        </Row>
    </Container>
  )
}

export default Hero
