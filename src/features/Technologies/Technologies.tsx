import DisplayHeading from "../../components/Heading"
import { TechIcon } from "./constant"
import {motion} from "motion/react"

const Technologies = () => {
  // Variants for staggered effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  // Variants for each box
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div>
      <DisplayHeading label='Technologies' />
      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" className="container my-4">
        <div className="row d-flex justify-content-center">
          {TechIcon.map((techIcon) =>
            <motion.div variants={cardVariants} key={techIcon.id} className="col-6 col-md-4 col-lg-4 mb-4 d-flex justify-content-center">
              <div
                className="card card-scale shadow"
                style={{
                  width: "200px",
                  height: "200px",
                  borderRadius: "15px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div>{techIcon.icon}</div>
                <p
                  style={{
                    marginTop: "10px",
                    fontSize: "14px",
                    fontWeight: "bold",
                    color: "#555",
                    textAlign: "center",
                  }}
                >
                  {techIcon.name}
                </p>
              </div>
            </motion.div>
          )}
        </div>

      </motion.div>
    </div>
  )
}

export default Technologies
