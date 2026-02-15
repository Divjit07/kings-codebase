import { motion } from 'framer-motion';
import { useData } from '../../context/DataContext';

const Portfolio = () => {
    const { projects } = useData();

    // Default static projects if none exist
    const displayProjects = projects.length > 0 ? projects : [
        { id: '1', title: 'Luxury Penthouse', category: 'Residential', image: 'bg-gradient-to-br from-gray-900 to-black' },
        { id: '2', title: 'Tech Summit 2025', category: 'Event', image: 'bg-gradient-to-bl from-black to-gray-800' },
        { id: '3', title: 'Modern Office', category: 'Commercial', image: 'bg-gradient-to-r from-gray-900 via-black to-gray-900' }
    ];

    return (
        <section className="py-24 bg-black relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">Selected <span className="text-gold">Works</span></h2>
                    <p className="text-white/60 max-w-2xl text-lg">
                        A curated collection of our most prestigious installations across events, commercial spaces, and luxury residences.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative h-96 overflow-hidden rounded-lg bg-white/5 border border-white/10"
                        >
                            <div className={`absolute inset-0 ${project.image} transition-transform duration-700 group-hover:scale-110`}></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80"></div>

                            <div className="absolute bottom-0 left-0 p-8 w-full">
                                <span className="text-gold text-xs uppercase tracking-widest mb-2 block">{project.category}</span>
                                <h3 className="text-2xl font-serif text-white mb-4 group-hover:text-gold transition-colors">{project.title}</h3>
                                <div className="h-1 w-0 bg-gold group-hover:w-full transition-all duration-500"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
