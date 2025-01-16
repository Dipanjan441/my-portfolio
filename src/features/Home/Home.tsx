import AboutMe from "../About-Me/AboutMe"
import Projects from "../Projects/Projects"
import Technologies from "../Technologies/Technologies"
import WorkExperiences from "../work-experiences/WorkExperiences"
import Hero from "./hero/Hero"

const Home = () => {
  return (
    <>
      <Hero />
      <AboutMe />
      <Projects />
      <Technologies />
      <WorkExperiences />
    </>
  )
}

export default Home
