import DisplayHeading from '../../components/Heading'
import { Col, Container, Row } from 'react-bootstrap'
import { AboutMeData } from '../../constants/data';
import ContentSlider from '../../components/ContentSlider';
import { SliderType } from '../../type';
import {motion} from "motion/react"
import { fadeInUp, scaleIn } from '../animation/animations';
import { NavbarItemPath } from '../Navbar/navigation';

const AboutMe = () => {
  return (
    <div id={NavbarItemPath.about_me}>
      <DisplayHeading label='About Me' />
      <Container>
        <Row className="hero-container">
            <Col className="mb-4" md={6} xs={12}>
            <motion.div initial="hidden" whileInView="visible" variants={scaleIn(0.3)}>
                <ContentSlider sliderType={SliderType.cube} sliderImages={AboutMeData.sliderImages} />
            </motion.div>
            </Col>
            <Col md={6} xs={12}>
              {
                AboutMeData.aboutText.map((text,index)=>
                <motion.p initial="hidden" whileInView="visible" variants={fadeInUp(0.15*(index+1))} key={index}>
                  {text}
                </motion.p>
                )
              }
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default AboutMe
