import { Link } from "react-router-dom";
import {
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    Phone
} from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#101828] text-white pt-20 pb-10 border-t border-white/5">

            {/* TOP GRID */}
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">

                {/* BRAND */}
                <div className="space-y-6">
                    <div className="flex items-center gap-4">
                        <div className="h-16 w-16 bg-white rounded-xl p-1 shadow-lg overflow-hidden">
                            <img src="/college_logo_.png" alt="SSCW Logo" className="w-full h-full object-contain" />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold">Sai College for Women</h2>
                            <p className="text-[#EAB308] text-[11px] mt-1 uppercase tracking-[0.2em] font-black">
                                Empowering Women Through Education
                            </p>
                        </div>
                    </div>

                    <p className="text-white/70 leading-relaxed text-sm">
                        A premier women's institution dedicated to academic excellence,
                        holistic development, and empowering future women leaders.
                    </p>

                    {/* SOCIALS */}
                    <div className="flex gap-4">
                        {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                            <Link
                                key={i}
                                to="#"
                                className="h-10 w-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-[#EAB308] hover:text-[#101828] transition-all"
                            >
                                <Icon className="h-5 w-5" />
                            </Link>
                        ))}
                    </div>
                </div>

                {/* QUICK LINKS */}
                <div>
                    <h3 className="font-bold text-[#EAB308] uppercase tracking-widest text-xs mb-8">Quick Navigation</h3>
                    <ul className="space-y-4 text-white/80">
                        {[
                            { name: "About Us", path: "/about" },
                            { name: "Admissions", path: "/admissions" },
                            { name: "Faculty", path: "/faculty" },
                            { name: "Library", path: "/library" },
                            { name: "Infrastructure", path: "/infrastructure" },
                            { name: "Academics", path: "/academics" }
                        ].map((item) => (
                            <li key={item.name}>
                                <Link to={item.path} className="hover:text-[#EAB308] transition-colors font-medium">
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* STUDENT RESOURCES */}
                <div>
                    <h3 className="font-bold text-[#EAB308] uppercase tracking-widest text-xs mb-8">Student Resources</h3>
                    <ul className="space-y-4 text-white/80">
                        {[
                            { name: "Student Welfare", path: "/student-welfare" },
                            { name: "Non-Academics", path: "/non-academics" },
                            { name: "Infrastructure", path: "/infrastructure" },
                            { name: "Admissions", path: "/admissions" },
                            { name: "Life in Campus", path: "/about" },
                            { name: "Contact Support", path: "/contact" }
                        ].map((item) => (
                            <li key={item.name}>
                                <Link to={item.path} className="hover:text-[#EAB308] transition-colors font-medium">
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* CONTACT */}
                <div>
                    <h3 className="font-bold text-[#EAB308] uppercase tracking-widest text-xs mb-8">Contact Us</h3>
                    <ul className="space-y-6 text-white/80 text-sm">

                        <li className="flex gap-4">
                            <div className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                                <MapPin className="h-5 w-5 text-[#EAB308]" />
                            </div>
                            <span>
                                12, Hennur Main Road,<br />
                                Bangalore, Karnataka - 560077
                            </span>
                        </li>

                        <li className="flex gap-4">
                            <div className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                                <Phone className="h-5 w-5 text-[#EAB308]" />
                            </div>
                            <span>+91 123 456 7890</span>
                        </li>

                        <li className="flex gap-4">
                            <div className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                                <Mail className="h-5 w-5 text-[#EAB308]" />
                            </div>
                            <span>info@saicollege.edu.in</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* GOOGLE MAP */}
            <div className="max-w-7xl mx-auto px-6 mt-16">
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                    <iframe
                        title="College Location"
                        src="https://www.google.com/maps?q=Bangalore&output=embed"
                        width="100%"
                        height="300"
                        loading="lazy"
                        className="w-full grayscale invert opacity-80 hover:grayscale-0 hover:invert-0 hover:opacity-100 transition-all duration-700"
                    ></iframe>
                </div>
            </div>

            {/* BOTTOM COPYRIGHT */}
            <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 text-center text-white/40 text-[11px] uppercase tracking-widest font-bold">
                © {currentYear} Sai College for Women. Excellence in Education.
            </div>

        </footer>
    );
};

export default Footer;
