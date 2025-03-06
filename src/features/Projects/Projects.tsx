import DisplayHeading from '../../components/Heading'
import { ProjectData } from '../../constants/data'
import ProjectCards from './ProjectCards'
import { motion } from "motion/react"

const Projects = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };
  return (
    <div>
      <DisplayHeading label='Projects' />
      <div className="container">
        <div className="row justify-content-center">
          {
            ProjectData.map((projectInfo, index) => (
              <motion.div
                key={projectInfo.id}
                className="col-12 col-sm-6 col-md-4 mb-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
                transition={{ delay: index * 0.2 }}
              >
                <ProjectCards {...projectInfo} />
              </motion.div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Projects
