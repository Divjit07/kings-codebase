import { motion } from 'framer-motion';
import { Box, Layers, Hammer, Maximize, Tent, Users } from 'lucide-react';

const services = [
    {
        icon: <Layers size={32} />,
        title: 'Carpet Installation',
        description: 'Precision laying of expo carpets, ensuring seamless finishes for high-end booths and walkways.',
    },
    {
        icon: <Box size={32} />,
        title: 'Octanorm Builds',
        description: 'Expert assembly of Octanorm systems for modular, clean, and professional exhibition structures.',
    },
    {
        icon: <Maximize size={32} />,
        title: 'SEG Frame Systems',
        description: 'Silicone Edge Graphics (SEG) frame installation for flawless, taut fabric displays.',
    },
    {
        icon: <Tent size={32} />,
        title: 'Fabric Walls & Drapery',
        description: 'Transforming spaces with elegant fabric wall installations and ceiling drapery.',
    },
    {
        icon: <Hammer size={32} />,
        title: 'Custom Booth Builds',
        description: 'Bringing bespoke designs to life with intricate carpentry and structural expertise.',
    },
    {
        icon: <Users size={32} />,
        title: 'On-Site Crew',
        description: 'Dedicated professional teams for setup, maintenance, and dismantle support.',
    },
];

const Services = () => {
    return (
        <section className="py-24 bg-black-light relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-gold text-sm tracking-[0.3em] uppercase mb-4 font-semibold"
                    >
                        Our Expertise
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-5xl font-serif text-white mb-6"
                    >
                        We don't just install — <br /> we elevate spaces.
                    </motion.h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative p-8 border border-white/10 hover:border-gold/50 bg-black-rich/50 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2"
                        >
                            <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="text-gold mb-6 group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>

                            <h4 className="text-xl font-serif text-white mb-4 group-hover:text-gold transition-colors">
                                {service.title}
                            </h4>

                            <p className="text-white/60 leading-relaxed text-sm group-hover:text-white/80 transition-colors">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
