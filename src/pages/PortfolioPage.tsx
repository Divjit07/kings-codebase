import Portfolio from '../components/home/Portfolio';

const PortfolioPage = () => {
    return (
        <div className="pt-20">
            <div className="bg-black-rich py-16 text-center">
                <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">Our Portfolio</h1>
                <p className="text-white/60 max-w-2xl mx-auto px-4">
                    A showcase of our precision craftsmanship and luxury installations.
                </p>
            </div>
            <Portfolio />
        </div>
    );
};

export default PortfolioPage;
