import DisplayHeading from '../../components/Heading'
import { Col, Container, Row } from 'react-bootstrap'
import { AboutMeData } from '../../constants/data';
import ContentSlider from '../../components/ContentSlider';
import { SliderType } from '../../type';

const AboutMe = () => {
  return (
    <div>
      <DisplayHeading label='About Me' />
      <Container>
        <Row className="hero-container">
            <Col className="mb-4" md={6} xs={12}>
                <ContentSlider sliderType={SliderType.cube} sliderImages={AboutMeData.sliderImages} />
            </Col>
            <Col md={6} xs={12}>
              {
                AboutMeData.aboutText.map((text,index)=>
                <p key={index}>
                  {text}
                </p>
                )
              }
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default AboutMe
