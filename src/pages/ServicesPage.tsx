import Services from '../components/home/Services';
import Process from '../components/home/Process';

const ServicesPage = () => {
    return (
        <div className="pt-20">
            <div className="bg-black-rich py-16 text-center">
                <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">Our Services</h1>
                <p className="text-white/60 max-w-2xl mx-auto px-4">
                    Comprehensive installation solutions for events, expos, and custom builds.
                </p>
            </div>
            <Services />
            <Process />
        </div>
    );
};

export default ServicesPage;
