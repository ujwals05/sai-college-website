import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: 'About Us', path: '/about' },
        { name: 'Admissions', path: '/admissions' },
        { name: 'Academics', path: '/academics' },
        { name: 'Faculty', path: '/faculty' },
        { name: 'Contact', path: '/contact' }
    ];

    const studentResources = [
        { name: 'Library', path: '/library' },
        { name: 'Infrastructure', path: '/infrastructure' },
        { name: 'Student Welfare', path: '/student-welfare' },
        { name: 'Life at Sai', path: '/non-academics' }
    ];

    return (
        <footer className="bg-[#0b1e3d] text-white pt-16 pb-8">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                {/* Brand Section */}
                <div className="space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold">SAI COLLEGE</h2>
                        <p className="text-sm font-medium tracking-[0.2em] text-blue-200">FOR WOMEN</p>
                    </div>
                    <p className="text-blue-100/80 leading-relaxed">
                        Nurturing talent and fostering innovation in the heart of Bangalore. Dedicated to providing quality education for women since its inception.
                    </p>
                    <div className="flex gap-4">
                        <Link to="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                            <Facebook className="h-5 w-5" />
                        </Link>
                        <Link to="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                            <Twitter className="h-5 w-5" />
                        </Link>
                        <Link to="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                            <Instagram className="h-5 w-5" />
                        </Link>
                        <Link to="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                            <Linkedin className="h-5 w-5" />
                        </Link>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-bold mb-6 border-b border-white/20 pb-2">Quick Links</h3>
                    <ul className="space-y-4">
                        {quickLinks.map((link) => (
                            <li key={link.name}>
                                <Link to={link.path} className="text-blue-100/80 hover:text-white transition-colors flex items-center gap-2">
                                    <span className="h-1 w-1 bg-blue-400 rounded-full"></span>
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Student Resources */}
                <div>
                    <h3 className="text-lg font-bold mb-6 border-b border-white/20 pb-2">Student Resources</h3>
                    <ul className="space-y-4">
                        {studentResources.map((link) => (
                            <li key={link.name}>
                                <Link to={link.path} className="text-blue-100/80 hover:text-white transition-colors flex items-center gap-2">
                                    <span className="h-1 w-1 bg-blue-400 rounded-full"></span>
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-lg font-bold mb-6 border-b border-white/20 pb-2">Contact Us</h3>
                    <ul className="space-y-4">
                        <li className="flex gap-3 text-blue-100/80">
                            <MapPin className="h-5 w-5 shrink-0 text-blue-400" />
                            <span>12, Hennur Main Road, Near Bio-zeen, Bangalore - 560077</span>
                        </li>
                        <li className="flex gap-3 text-blue-100/80">
                            <Phone className="h-5 w-5 shrink-0 text-blue-400" />
                            <span>+91 123 456 7890</span>
                        </li>
                        <li className="flex gap-3 text-blue-100/80">
                            <Mail className="h-5 w-5 shrink-0 text-blue-400" />
                            <span>info@saicollege.edu.in</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="container mx-auto px-4 mt-16 pt-8 border-t border-white/10 text-center text-blue-200/60 text-sm">
                <p>© {currentYear} Sai College for Women. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
