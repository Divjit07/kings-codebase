import { motion } from 'framer-motion';

const About = () => {
    return (
        <section className="py-24 bg-black-DEFAULT text-white overflow-hidden">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                {/* Image / Visual */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <div className="aspect-[3/4] md:aspect-square bg-white/5 relative overflow-hidden border border-white/10">
                        {/* CSS-only Graphic */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-gold/10 to-transparent" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-32 h-32 border-2 border-gold/30 rotate-45" />
                        </div>
                    </div>
                    {/* Decorative Border */}
                    <div className="absolute top-4 -left-4 w-full h-full border border-gold/30 -z-10" />
                </motion.div>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-gold text-sm tracking-[0.3em] uppercase mb-6 font-semibold">
                        About Kings Installation
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
                        Installation With <br />
                        <span className="text-white">Precision, Passion & Prestige</span>
                    </h3>
                    <p className="text-white/70 text-lg leading-relaxed mb-6">
                        For over a decade, we have been the silent force behind the most stunning events and expos. Our philosophy is simple: perfection is not optional.
                    </p>
                    <p className="text-white/70 text-lg leading-relaxed mb-10">
                        From the intricacy of custom booth joinery to the vastness of expo carpet layouts, we bring a level of craftsmanship that transforms standard setups into luxury experiences.
                    </p>
                    <div className="grid grid-cols-2 gap-8 mb-10">
                        <div>
                            <h4 className="text-3xl font-serif text-gold mb-2">10+</h4>
                            <p className="text-white/50 text-sm uppercase tracking-wider">Years Experience</p>
                        </div>
                        <div>
                            <h4 className="text-3xl font-serif text-gold mb-2">500+</h4>
                            <p className="text-white/50 text-sm uppercase tracking-wider">Projects Completed</p>
                        </div>
                    </div>
                    <a href="/about" className="px-8 py-3 border border-white text-white uppercase tracking-widest text-sm hover:bg-gold hover:border-gold hover:text-black transition-all">
                        Meet The Team
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
