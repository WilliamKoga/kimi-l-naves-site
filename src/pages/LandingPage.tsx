import Hero from '../sections/Hero';
import EventInfo from '../sections/EventInfo';
import AboutFormation from '../sections/AboutFormation';
import Instructor from '../sections/Instructor';
import Content from '../sections/Content';
import HowItWorks from '../sections/HowItWorks';
import Pricing from '../sections/Pricing';
import FAQ from '../sections/FAQ';
import FinalCTA from '../sections/FinalCTA';
import Footer from '../sections/Footer';

function LandingPage() {
    return (
        <div className="min-h-screen bg-indigo-deep">
            <Hero />
            <EventInfo />
            <AboutFormation />
            <Instructor />
            <Content />
            <HowItWorks />
            <Pricing />
            <FAQ />
            <FinalCTA />
            <Footer />
        </div>
    );
}

export default LandingPage;
