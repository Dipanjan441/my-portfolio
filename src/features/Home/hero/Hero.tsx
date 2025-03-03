import { Col, Container, Row } from "react-bootstrap"
import { HeroData } from "../../../constants/data";
import ContentSlider from "../../../components/ContentSlider";
import { SliderType } from "../../../type";
import {motion} from "motion/react";
import { slideInLeft, slideInRight } from "../../animation/animations";

interface Props {
  navbarHeight: number
}

const Hero = ({navbarHeight}: Props) => {
  return (
    <Container style={{paddingTop: navbarHeight}}>
        <Row className="hero-container">
            <Col md={6} xs={12} className="text-center text-md-start">
                <motion.h1 initial="hidden" animate="visible" variants={slideInLeft(0.2)} className="mt-2 hero-title">
                  {HeroData.title}
                </motion.h1>
                <motion.p initial="hidden" animate="visible" variants={slideInLeft(0.4)} className="mt-2 mb-2 hero-subtitle">{HeroData.subTitle}</motion.p>
                <motion.p initial="hidden" animate="visible" variants={slideInLeft(0.6)} className="mt-2 mb-2 hero-tagline">{HeroData.tagLine}</motion.p>
                <motion.p initial="hidden" animate="visible" variants={slideInLeft(0.8)} className="hero-description">{HeroData.description}</motion.p>
            </Col>
            <Col md={6} xs={12}>
              <motion.div initial="hidden" animate="visible" variants={slideInRight(0.5)} style={{width:'80%',margin: '0 auto'}}>
                <ContentSlider sliderType={SliderType.cards} sliderImages={HeroData.heroImage} />
              </motion.div>
            </Col>
        </Row>
    </Container>
  )
}

export default Hero
