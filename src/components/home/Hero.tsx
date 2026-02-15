import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Background3D from '../ui/Background3D';

const Hero = () => {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
            {/* 3D Background Effect - Explicit Z-Index 0 */}
            <div className="absolute inset-0 z-0">
                <Background3D />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="text-gold text-sm md:text-base tracking-[0.3em] uppercase mb-4 font-semibold">
                        Luxury Event & Expo Builds
                    </h2>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8">
                        Installation Crafted
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed"
                >
                    Precision, excellence, and high-end execution for the world's most prestigious events. We elevate spaces into experiences.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-6"
                >
                    <a href="/contact" className="bg-gold text-black px-8 py-4 font-bold uppercase tracking-widest hover:bg-white transition-colors duration-300 w-full md:w-auto">
                        Book a Consultation
                    </a>
                    <a href="/services" className="border border-white/30 text-white px-8 py-4 font-bold uppercase tracking-widest hover:bg-white/10 transition-colors duration-300 w-full md:w-auto">
                        See Services
                    </a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 1, duration: 1.5, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center"
            >
                <span className="text-[10px] uppercase tracking-widest mb-2">Scroll</span>
                <ChevronDown size={20} />
            </motion.div>
        </section>
    );
};

export default Hero;
