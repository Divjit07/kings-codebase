import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle submission logic here
        console.log('Form submitted:', formState);
        alert('Thank you for your inquiry. We will contact you shortly.');
    };

    return (
        <section className="py-24 bg-black-rich relative overflow-hidden" id="contact">
            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Info Side */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-gold text-sm tracking-[0.3em] uppercase mb-6 font-semibold">
                        Get In Touch
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-serif text-white mb-8">
                        Let's Build Something <br /> Extraordinary
                    </h3>
                    <p className="text-white/60 text-lg mb-12 max-w-md leading-relaxed">
                        Ready to elevate your next event? Contact our team for a consultation and customized proposal.
                    </p>

                    <div className="space-y-8">
                        <div className="flex items-start space-x-6">
                            <div className="w-12 h-12 bg-black-light border border-white/10 flex items-center justify-center text-gold">
                                <Phone size={20} />
                            </div>
                            <div>
                                <h4 className="text-white font-serif text-lg mb-1">Phone</h4>
                                <p className="text-white/60">+1 (555) 123-4567</p>
                                <p className="text-white/40 text-sm mt-1">Mon-Fri, 9am - 6pm PST</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-6">
                            <div className="w-12 h-12 bg-black-light border border-white/10 flex items-center justify-center text-gold">
                                <Mail size={20} />
                            </div>
                            <div>
                                <h4 className="text-white font-serif text-lg mb-1">Email</h4>
                                <p className="text-white/60">inquiry@kingsinstallation.com</p>
                                <p className="text-white/40 text-sm mt-1">Responses within 24 hours</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-6">
                            <div className="w-12 h-12 bg-black-light border border-white/10 flex items-center justify-center text-gold">
                                <MapPin size={20} />
                            </div>
                            <div>
                                <h4 className="text-white font-serif text-lg mb-1">Headquarters</h4>
                                <p className="text-white/60">123 Luxury Lane, Suite 100<br />Los Angeles, CA 90210</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Form Side */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-black-light p-8 md:p-12 border border-white/5"
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-gold text-xs uppercase tracking-widest mb-2">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formState.name}
                                    onChange={handleChange}
                                    className="w-full bg-black-DEFAULT border border-white/10 px-4 py-3 text-white focus:border-gold focus:outline-none transition-colors"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-gold text-xs uppercase tracking-widest mb-2">Phone</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formState.phone}
                                    onChange={handleChange}
                                    className="w-full bg-black-DEFAULT border border-white/10 px-4 py-3 text-white focus:border-gold focus:outline-none transition-colors"
                                    placeholder="(555) 123-4567"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-gold text-xs uppercase tracking-widest mb-2">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formState.email}
                                onChange={handleChange}
                                className="w-full bg-black-DEFAULT border border-white/10 px-4 py-3 text-white focus:border-gold focus:outline-none transition-colors"
                                placeholder="john@company.com"
                            />
                        </div>

                        <div>
                            <label className="block text-gold text-xs uppercase tracking-widest mb-2">Project Type</label>
                            <select
                                name="projectType"
                                value={formState.projectType}
                                onChange={handleChange}
                                className="w-full bg-black-DEFAULT border border-white/10 px-4 py-3 text-white/70 focus:border-gold focus:outline-none transition-colors"
                            >
                                <option value="">Select a service...</option>
                                <option value="Expo Booth">Expo Booth Build</option>
                                <option value="Carpet Installation">Carpet Installation</option>
                                <option value="Custom Build">Custom Build</option>
                                <option value="Full Event Setup">Full Event Setup</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-gold text-xs uppercase tracking-widest mb-2">Project Details</label>
                            <textarea
                                name="message"
                                value={formState.message}
                                onChange={handleChange}
                                rows={4}
                                className="w-full bg-black-DEFAULT border border-white/10 px-4 py-3 text-white focus:border-gold focus:outline-none transition-colors"
                                placeholder="Tell us about your event, dates, and requirements..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-gold text-black font-semibold py-4 uppercase tracking-widest hover:bg-white transition-colors flex items-center justify-center gap-2 group"
                        >
                            Send Inquiry <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
