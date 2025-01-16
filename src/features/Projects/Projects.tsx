import DisplayHeading from '../../components/Heading'
import { Carousel } from 'react-bootstrap'
import { PROJECT_SLIDER_INFORMATION } from '../../constants/data'

const Projects = () => {
  return (
    <div>
      <DisplayHeading label='Projects' />
      <Carousel className='container'>
        {
          PROJECT_SLIDER_INFORMATION.map((silder)=>(
            <Carousel.Item className='item' key={silder.id}>
              <img src={silder.image} className="d-block w-100" alt="..." />
              <Carousel.Caption>
                <h3>{silder.heading}</h3>
                <p>{silder.about}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))
        }
    </Carousel>
    </div>
  )
}

export default Projects
