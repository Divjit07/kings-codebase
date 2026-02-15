import Contact from '../components/home/Contact';

const ContactPage = () => {
    return (
        <div className="pt-20">
            <div className="bg-black-rich py-16 text-center">
                <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">Contact Us</h1>
                <p className="text-white/60 max-w-2xl mx-auto px-4">
                    Ready to start your project? Get in touch with our team.
                </p>
            </div>
            <Contact />
        </div>
    );
};

export default ContactPage;
