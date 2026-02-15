
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black-light text-white py-16 border-t border-white/5">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
                {/* Brand */}
                <div className="space-y-6">
                    <h3 className="text-2xl font-serif font-bold tracking-widest">
                        KINGS <span className="text-gold">INSTALLATION</span>
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed">
                        Premium installation services for luxury events, expos, and corporate showcases. Precision, passion, and prestige in every detail.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-gold font-serif text-lg mb-6">Quick Links</h4>
                    <ul className="space-y-4 text-sm text-white/70">
                        <li><Link to="/services" className="hover:text-gold transition-colors">Our Services</Link></li>
                        <li><Link to="/portfolio" className="hover:text-gold transition-colors">Portfolio</Link></li>
                        <li><Link to="/about" className="hover:text-gold transition-colors">About Us</Link></li>
                        <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="text-gold font-serif text-lg mb-6">Contact</h4>
                    <ul className="space-y-4 text-sm text-white/70">
                        <li className="flex items-center space-x-3">
                            <Phone size={16} className="text-gold" />
                            <span>(555) 123-4567</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <Mail size={16} className="text-gold" />
                            <span>info@kingsinstallation.com</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <MapPin size={16} className="text-gold" />
                            <span>Los Angeles, CA</span>
                        </li>
                    </ul>
                </div>

                {/* Socials */}
                <div>
                    <h4 className="text-gold font-serif text-lg mb-6">Follow Us</h4>
                    <div className="flex space-x-4">
                        <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-black transition-all">
                            <Instagram size={18} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-black transition-all">
                            <Facebook size={18} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-black transition-all">
                            <Linkedin size={18} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="border-t border-white/5 mt-16 pt-8 text-center text-white/40 text-xs">
                &copy; {new Date().getFullYear()} Kings Installation. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
