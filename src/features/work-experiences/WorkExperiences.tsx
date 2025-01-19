import DisplayHeading from '../../components/Heading';
import CompanyLogo from '../../assets/images/experiences/pwclogo.png';
import { Carousel } from 'react-bootstrap';
import Experineces from './Experineces';
import { pwcExperineces } from './constant';

const WorkExperiences = () => {
  return (
    <div>
      <DisplayHeading label='Work Experincs' />
      <div style={{
        width: '100%',
        margin: '0 auto',
      }}>
        <div className='container my-2 d-flex mb-4 justify-content-center'>
          <div className='row align-items-center g-5' style={{ width: '60%' }}>
            <div className='col-12 col-md-6 d-flex justify-content-center'>
              <img src={CompanyLogo} style={{
                maxWidth: '100%',
                borderRadius: '10px',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'
              }} height={200} alt='pwc_logo' />
            </div>
            <div className='col-12 col-md-6 d-flex flex-column align-items-center justify-content-center'>
              <h2 style={{
                fontSize: 'clamp(2rem, 5vw, 50px)',
                fontWeight: '600',
                color: '#000',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
                letterSpacing: '1px',
                textTransform: 'uppercase',
              }} className='text-nowrap'>Web Developer</h2>
              <h5>2.5 Years </h5>
            </div>
          </div>
          </div>
          {/* work experiences */}
          <div className="carousel-container py-5">
            <Carousel>
              {pwcExperineces.map((item, index) => (
                <Carousel.Item key={index}>
                  <div className="d-flex justify-content-center">
                    <div className="col-12 col-md-6 col-lg-4">
                      <Experineces title={item.title} description={item.description} />
                    </div>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
    </div>
  )
}

export default WorkExperiences
