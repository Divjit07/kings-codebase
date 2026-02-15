import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
    {
        text: "Kings Installation transformed our expo presence. The attention to detail on the custom booth build was impeccable.",
        author: "Sarah Jenkins",
        role: "Event Director, TechWorld",
    },
    {
        text: "Professional, punctual, and precise. The carpet installation for our gala was flawless. Highly recommended.",
        author: "Michael Ross",
        role: "CEO, LuxEvents",
    },
    {
        text: "They handled our complex SEG framing challenge with ease. True masters of their craft.",
        author: "Elena Rodriguez",
        role: "Creative Lead, AutoShow Int.",
    },
];

const Testimonials = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-24 bg-black-rich relative overflow-hidden">
            {/* Background Graphic */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-3xl -z-10" />

            <div className="container mx-auto px-6 text-center max-w-4xl">
                <div className="mb-12 flex justify-center text-gold">
                    <Quote size={48} className="opacity-50" />
                </div>

                <AnimatePresence mode='wait'>
                    <motion.div
                        key={current}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="mb-12"
                    >
                        <p className="text-2xl md:text-3xl font-serif text-white leading-relaxed mb-8 italic">
                            "{testimonials[current].text}"
                        </p>
                        <div>
                            <h4 className="text-gold uppercase tracking-widest font-semibold text-sm mb-2">
                                {testimonials[current].author}
                            </h4>
                            <p className="text-white/40 text-xs uppercase tracking-wider">
                                {testimonials[current].role}
                            </p>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Indicators */}
                <div className="flex justify-center gap-3">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrent(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${current === index ? 'bg-gold w-8' : 'bg-white/20 hover:bg-white/40'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
