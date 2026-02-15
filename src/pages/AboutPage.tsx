import About from '../components/home/About';
import Testimonials from '../components/home/Testimonials';

const AboutPage = () => {
    return (
        <div className="pt-20">
            <div className="bg-black-rich py-16 text-center">
                <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">About Us</h1>
                <p className="text-white/60 max-w-2xl mx-auto px-4">
                    The team behind the world's most prestigious event installations.
                </p>
            </div>
            <About />
            <Testimonials />
        </div>
    );
};

export default AboutPage;
