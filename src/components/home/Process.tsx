import { motion } from 'framer-motion';
import { Phone, Ruler, PenTool, Hammer, CheckCircle } from 'lucide-react';

const steps = [
    {
        icon: <Phone size={24} />,
        title: 'Consultation',
        description: 'We discuss your vision, requirements, and timeline to understand your goals.',
    },
    {
        icon: <Ruler size={24} />,
        title: 'Site Survey',
        description: 'Comprehensive analysis of the venue to ensure precise fit and execution.',
    },
    {
        icon: <PenTool size={24} />,
        title: 'Design & Plan',
        description: 'Detailed project planning, including floor plans and material selection.',
    },
    {
        icon: <Hammer size={24} />,
        title: 'Installation',
        description: 'Our expert team executes the build with speed, safety, and precision.',
    },
    {
        icon: <CheckCircle size={24} />,
        title: 'Completion',
        description: 'Final walkthrough and handover, ensuring every detail meets our gold standard.',
    },
];

const Process = () => {
    return (
        <section className="py-24 bg-black-DEFAULT text-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-gold text-sm tracking-[0.3em] uppercase mb-4 font-semibold"
                    >
                        How It Works
                    </motion.h2>
                    <h3 className="text-4xl md:text-5xl font-serif">From Concept to Reality</h3>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2 z-0" />

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="flex flex-col items-center text-center group"
                            >
                                <div className="w-16 h-16 rounded-full bg-black-light border border-gold/30 flex items-center justify-center text-gold mb-6 group-hover:bg-gold group-hover:text-black transition-all duration-500 relative z-20">
                                    {step.icon}
                                </div>
                                <h4 className="text-lg font-serif mb-3 group-hover:text-gold transition-colors">{step.title}</h4>
                                <p className="text-white/50 text-xs leading-relaxed max-w-[200px]">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
