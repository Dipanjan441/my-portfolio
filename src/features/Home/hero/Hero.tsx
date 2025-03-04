import { Col, Container, Row } from "react-bootstrap"
import { HeroData } from "../../../constants/data";
import ContentSlider from "../../../components/ContentSlider";
import { SliderType } from "../../../type";
import { motion } from "motion/react";
import { fadeInUp, slideInLeft, slideInRight } from "../../animation/animations";
import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";

interface Props {
  navbarHeight: number
}

const Hero = ({ navbarHeight }: Props) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <Container style={{ paddingTop: navbarHeight }}>
      <Row className="hero-container">
        <Col md={6} xs={12} className="text-center text-md-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } },
            }}
          >
            <motion.h1 initial="hidden" whileInView="visible" variants={isMobile ? fadeInUp(0.2) : slideInLeft(0.2)} className="mt-2 hero-title">
              {HeroData.title}
            </motion.h1>
            <motion.p initial="hidden" whileInView="visible" variants={isMobile ? fadeInUp(0.4) : slideInLeft(0.4)} className="mt-2 mb-2 hero-subtitle">
              <Typewriter 
              words={HeroData.subTitle}
              cursor
              loop
              cursorColor="white"
              />
            </motion.p>
            <motion.p initial="hidden" whileInView="visible" variants={isMobile ? fadeInUp(0.6) : slideInLeft(0.6)} className="mt-2 mb-2 hero-tagline">{HeroData.tagLine}</motion.p>
            <motion.p initial="hidden" whileInView="visible" variants={isMobile ? fadeInUp(0.8) : slideInLeft(0.8)} className="hero-description">{HeroData.description}</motion.p>
          </motion.div>
        </Col>
        <Col md={6} xs={12}>
          <motion.div initial="hidden" whileInView="visible" variants={slideInRight(0.5)} style={{ width: '80%', margin: '0 auto' }}>
            <ContentSlider sliderType={SliderType.cards} sliderImages={HeroData.heroImage} />
          </motion.div>
        </Col>
      </Row>
    </Container>
  )
}

export default Hero
