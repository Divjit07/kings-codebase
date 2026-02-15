import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import Process from '../components/home/Process';
import Portfolio from '../components/home/Portfolio';
import About from '../components/home/About';
import Testimonials from '../components/home/Testimonials';
import Contact from '../components/home/Contact';

const Home = () => {
    return (
        <div className="overflow-x-hidden">
            <Hero />
            <Services />
            <Process />
            <Portfolio />
            <About />
            <Testimonials />
            <Contact />
        </div>
    );
};

export default Home;
