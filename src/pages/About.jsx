import AboutHero from "../components/about/AboutHero"
import AboutStatsSection from "../components/about/AboutStatSection"
import MissionSection from "../components/about/MissionSection"
import StorySection from "../components/about/StorySection"
import ValuesSection from "../components/about/ValuesSection"
import MainLayout from "../layout/MainLayout"

const About = () => {
    return(
        <>
            <MainLayout>
            <AboutHero/>
            <MissionSection/>
            <AboutStatsSection/>
            <ValuesSection/>
            <StorySection/> 
            </MainLayout>
        </>
    )
}

export default About