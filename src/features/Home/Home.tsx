import AboutMe from "../About-Me/AboutMe"
import ContactMe from "../Contact-Me/ContactMe"
import Projects from "../Projects/Projects"
import Technologies from "../Technologies/Technologies"
import WorkExperiences from "../work-experiences/WorkExperiences"
import Hero from "./hero/Hero"

interface Props {
  navbarHeight: number
}

const Home = ({navbarHeight}:Props) => {
  return (
    <>
      <Hero navbarHeight={navbarHeight} />
      <AboutMe />
      <Projects />
      <Technologies />
      {/* <WorkExperiences /> */}
      <ContactMe />
    </>
  )
}

export default Home
