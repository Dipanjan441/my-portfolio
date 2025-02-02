import DisplayHeading from '../../components/Heading'
import { ProjectData } from '../../constants/data'
import ProjectCards from './ProjectCards'

const Projects = () => {
  return (
    <div>
      <DisplayHeading label='Projects' />
      <div className="container">
        <div className="row justify-content-center">
          {
            ProjectData.map((projectInfo)=>(
              <div key={projectInfo.id} className="col-12 col-sm-6 col-md-4 mb-4">
                <ProjectCards {...projectInfo} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Projects
