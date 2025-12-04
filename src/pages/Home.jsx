import CTASection from "../components/home/CTASection";
import FeaturedDestinations from "../components/home/FeatureDestinations";
import HeroSection from "../components/home/HeroSection";
import StatsSection from "../components/home/StatsSection";
import WhyChooseUs from "../components/home/WhyChooseUs";
import MainLayout from "../layout/MainLayout";

const Home = () => {
    return(
        <>
        <MainLayout>
            <HeroSection/>
            <StatsSection/>
            <FeaturedDestinations/>
            <WhyChooseUs/>
            <CTASection/>
        </MainLayout>
        
        </>
    )
}

export default Home;