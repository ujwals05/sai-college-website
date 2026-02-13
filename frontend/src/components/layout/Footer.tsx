import { Link } from "react-router-dom";
import {
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    Phone,
    Globe
} from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#071a33] text-white pt-20 pb-10">

            {/* TOP GRID */}
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">

                {/* BRAND */}
                <div className="space-y-6">
                    <div className="flex items-center gap-4">
                        <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center p-1 shrink-0 shadow-lg">
                            <img src="/college_logo_.png" alt="Sai College Logo" className="w-full h-full object-contain" />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold leading-tight">Sai College <br /> for Women</h2>
                            <p className="text-blue-200 text-xs mt-1 font-semibold tracking-wider uppercase">
                                Excellence in Education
                            </p>
                        </div>
                    </div>

                    <p className="text-blue-100/70 leading-relaxed text-sm">
                        A premier women's institution dedicated to academic excellence,
                        holistic development, and empowering future women leaders.
                    </p>

                    {/* SOCIALS */}
                    <div className="flex gap-4">
                        {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                            <Link
                                key={i}
                                to="#"
                                className="h-10 w-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
                            >
                                <Icon className="h-5 w-5" />
                            </Link>
                        ))}
                    </div>
                </div>

                {/* QUICK LINKS */}
                <div>
                    <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
                    <ul className="space-y-4 text-blue-100/80">
                        {["About Us", "Admissions", "Faculty", "Library", "Campus", "Placements"].map((item) => (
                            <li key={item}>
                                <Link to="#" className="hover:text-white transition">
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* STUDENT RESOURCES */}
                <div>
                    <h3 className="font-semibold text-lg mb-6">Student Resources</h3>
                    <ul className="space-y-4 text-blue-100/80">
                        {[
                            "Anti Ragging",
                            "Alumni",
                            "Sports & Games",
                            "Cultural Activities",
                            "Examinations",
                            "Careers"
                        ].map((item) => (
                            <li key={item}>
                                <Link to="#" className="hover:text-white transition">
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* CONTACT */}
                <div>
                    <h3 className="font-semibold text-lg mb-6">Contact Us</h3>
                    <ul className="space-y-4 text-blue-100/80 text-sm">

                        <li className="flex gap-3">
                            <MapPin className="h-5 w-5 text-yellow-400 shrink-0" />
                            <span>
                                123 College Road, Education District,
                                Bangalore, Karnataka - 560001
                            </span>
                        </li>

                        <li className="flex gap-3">
                            <Phone className="h-5 w-5 text-yellow-400 shrink-0" />
                            <span>+91 123 456 7890</span>
                        </li>

                        <li className="flex gap-3">
                            <Mail className="h-5 w-5 text-yellow-400 shrink-0" />
                            <span>info@college.edu</span>
                        </li>

                        <li className="flex gap-3">
                            <Globe className="h-5 w-5 text-yellow-400 shrink-0" />
                            <span>www.college.edu</span>
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
                        height="350"
                        loading="lazy"
                        className="w-full"
                    ></iframe>
                </div>
            </div>

            {/* BOTTOM COPYRIGHT */}
            <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 text-center text-blue-200/60 text-sm">
                © {currentYear} Sai College for Women. All Rights Reserved.
            </div>

        </footer>
    );
};

export default Footer;
