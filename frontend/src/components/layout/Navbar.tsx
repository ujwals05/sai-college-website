import { Link, useLocation } from "react-router-dom"
import { Menu, X, ChevronDown, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { useState, useEffect } from "react"
import { fullMenu } from "@/lib/menu"

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
    const [scrolled, setScrolled] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev)
        if (!isMenuOpen) {
            setActiveDropdown(null)
        }
    }

    const toggleDropdown = (label: string) => {
        setActiveDropdown(prev => (prev === label ? null : label))
    }

    // Handle scroll effects
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    // Lock background scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }
        return () => { document.body.style.overflow = "auto" }
    }, [isMenuOpen])

    // Close menu on route change
    useEffect(() => {
        setIsMenuOpen(false)
        setActiveDropdown(null)
    }, [location.pathname])

    return (
        <>
            {/* ================= FLOATING HEADER ================= */}
            <header
                className={`fixed top-0 left-0 right-0 z-[60] px-6 transition-all duration-300 ${scrolled || isMenuOpen ? "py-3" : "py-5"
                    }`}
            >
                <div className="max-w-7xl mx-auto flex justify-between items-center">

                    {/* LEFT SIDE : LOGO + NAV LINKS */}
                    <div className="flex items-center gap-10">

                        {/* LOGO BUBBLE */}
                        <Link
                            to="/"
                            className={`flex items-center gap-3 bg-white/95 backdrop-blur-md rounded-full px-4 py-2 shadow-xl hover:shadow-2xl transition-all border border-white/20 group ${isMenuOpen ? "opacity-0 invisible scale-95" : "opacity-100 visible scale-100"
                                }`}
                        >
                            <div className="h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center rounded-full bg-white shadow-sm overflow-hidden border border-gray-100 shrink-0">
                                <img src="/college_logo_.png" alt="Sai College Logo" className="w-full h-full object-contain p-1" />
                            </div>

                            <div className="flex flex-col">
                                <h1 className="text-[10px] xs:text-xs sm:text-sm font-black text-[#1b2c47] leading-none">
                                    SAI COLLEGE FOR WOMEN
                                </h1>
                                <p className="text-[8px] sm:text-[10px] text-gray-500 font-bold tracking-widest mt-0.5 sm:mt-1">
                                    EXCELLENCE IN EDUCATION
                                </p>
                            </div>
                        </Link>

                        {/* DESKTOP NAVIGATION */}
                        <nav
                            className={`hidden lg:flex items-center gap-8 transition-all duration-300 ${scrolled
                                ? "opacity-0 invisible -translate-y-2"
                                : "opacity-100 visible translate-y-0"
                                }`}
                        >
                            <Link
                                to="/"
                                className="text-blue-500 font-semibold tracking-wide hover:text-yellow-400 transition-colors"
                            >
                                Home
                            </Link>

                            <Link
                                to="/about"
                                className="text-blue-500 font-semibold tracking-wide hover:text-yellow-400 transition-colors"
                            >
                                About Us
                            </Link>

                            <Link
                                to="/contact"
                                className="text-blue-500 font-semibold tracking-wide hover:text-yellow-400 transition-colors duration-300"
                            >
                                Contact Us
                            </Link>


                            <Link
                                to="/admissions"
                                className="bg-yellow-400 text-[#1b2c47] px-5 py-2 rounded-full font-semibold hover:bg-green-600 hover:text-white transition-all"
                            >
                                Apply Now
                            </Link>
                        </nav>


                    </div>

                    {/* HAMBURGER TRIGGER */}
                    <button
                        onClick={toggleMenu}
                        className={`relative z-[70] h-14 w-14 flex items-center justify-center rounded-full backdrop-blur-md shadow-xl transition-all duration-500 ${isMenuOpen
                            ? "bg-[#101828] text-white rotate-180"
                            : "bg-white/95 text-[#101828] hover:bg-[#101828] hover:text-white"
                            }`}
                    >
                        {isMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>

                </div>
            </header>


            {/* ================= PREMIUM FULLSCREEN MENU ================= */}
            <div
                className={`fixed inset-0 z-50 bg-[#f8faff] transition-all duration-700 cubic-bezier(0.85, 0, 0.15, 1) ${isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
                    }`}
            >
                {/* Visual Background Elements */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 -skew-x-12 transform translate-x-20" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

                <div className="relative h-full flex flex-col lg:flex-row max-w-7xl mx-auto">

                    {/* Main Navigation Column */}
                    <nav className="flex-1 h-full overflow-y-auto pt-32 pb-12 px-8 lg:px-12">
                        <div className="max-w-2xl">
                            <p className="text-blue-600 font-black text-xs tracking-[0.3em] uppercase mb-8">Navigation Menu</p>

                            <div className="grid gap-2">
                                <Link
                                    to="/"
                                    className="group flex items-center gap-6 py-4 border-b border-gray-100 hover:border-blue-200 transition-colors"
                                >
                                    <span className="text-gray-300 font-bold text-lg group-hover:text-blue-600 transition-colors">01.</span>
                                    <span className="text-4xl lg:text-5xl font-black text-[#1b2c47] group-hover:translate-x-3 transition-transform duration-300">HOME</span>
                                </Link>

                                {fullMenu.map((item, index) => (
                                    <div key={item.label} className="border-b border-gray-100">
                                        {item.children ? (
                                            <div className="py-4">
                                                <button
                                                    onClick={() => toggleDropdown(item.label)}
                                                    className="group w-full flex items-center justify-between text-left transition-all"
                                                >
                                                    <div className="flex items-center gap-6">
                                                        <span className="text-gray-300 font-bold text-lg group-hover:text-blue-600 transition-colors">
                                                            {String(index + 2).padStart(2, '0')}.
                                                        </span>
                                                        <span className={`text-4xl lg:text-5xl font-black transition-all duration-300 ${activeDropdown === item.label ? "text-blue-600 translate-x-3" : "text-[#1b2c47]"
                                                            }`}>
                                                            {item.label.toUpperCase()}
                                                        </span>
                                                    </div>
                                                    <ChevronDown className={`w-8 h-8 transition-transform duration-500 ${activeDropdown === item.label ? "rotate-180 text-blue-600" : "text-gray-300"
                                                        }`} />
                                                </button>

                                                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeDropdown === item.label ? "max-h-[500px] mt-6 opacity-100" : "max-h-0 opacity-0"
                                                    }`}>
                                                    <div className="grid gap-4 pl-14 pb-4">
                                                        {item.children.map(child => (
                                                            <Link
                                                                key={child.label}
                                                                to={child.path || "/"}
                                                                className="text-xl font-bold text-gray-500 hover:text-blue-600 transition-colors flex items-center gap-3 group"
                                                            >
                                                                <span className="w-6 h-px bg-gray-200 group-hover:w-10 group-hover:bg-blue-600 transition-all" />
                                                                {child.label.toUpperCase()}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <Link
                                                to={item.path || "/"}
                                                className="group flex items-center gap-6 py-4 hover:border-blue-200 transition-colors"
                                            >
                                                <span className="text-gray-300 font-bold text-lg group-hover:text-blue-600 transition-colors">
                                                    {String(index + 2).padStart(2, '0')}.
                                                </span>
                                                <span className="text-4xl lg:text-5xl font-black text-[#1b2c47] group-hover:translate-x-3 transition-transform duration-300">
                                                    {item.label.toUpperCase()}
                                                </span>
                                            </Link>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </nav>

                    {/* Sidebar Information Column */}
                    <div className="hidden lg:flex flex-col justify-center w-96 bg-[#101828] p-12 text-white relative overflow-hidden ring-l ring-white/5">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />

                        <div className="space-y-12 relative z-10">
                            <div className="space-y-4">
                                <p className="text-[#EAB308] font-bold text-xs uppercase tracking-widest">Connect With Us</p>
                                <div className="space-y-5">
                                    <a href="tel:+911234567890" className="flex items-center gap-3 text-lg font-bold hover:text-[#EAB308] transition-colors group/link">
                                        <div className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center group-hover/link:bg-[#EAB308]/20 transition-colors">
                                            <Phone className="w-5 h-5 text-[#EAB308]" />
                                        </div>
                                        +91 123 456 7890
                                    </a>
                                    <a href="mailto:info@saicollege.edu.in" className="flex items-center gap-3 text-lg font-bold hover:text-[#EAB308] transition-colors group/link">
                                        <div className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center group-hover/link:bg-[#EAB308]/20 transition-colors">
                                            <Mail className="w-5 h-5 text-[#EAB308]" />
                                        </div>
                                        info@saicollege.edu.in
                                    </a>
                                    <div className="flex items-start gap-3 text-lg font-bold">
                                        <div className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                                            <MapPin className="w-5 h-5 text-[#EAB308]" />
                                        </div>
                                        <span>12, Hennur Main Road,<br />Bangalore - 560077</span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <p className="text-[#EAB308] font-bold text-xs uppercase tracking-widest">Social Presence</p>
                                <div className="flex gap-4">
                                    {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                        <a key={i} href="#" className="p-3 bg-white/10 rounded-full hover:bg-[#EAB308] hover:text-[#101828] transition-all hover:-translate-y-1">
                                            <Icon className="w-5 h-5" />
                                        </a>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-8">
                                <Link
                                    to="/admissions"
                                    className="inline-block bg-[#EAB308] text-[#101828] font-black px-10 py-5 rounded-full hover:bg-white transition-all shadow-xl hover:shadow-yellow-500/20 active:scale-95"
                                >
                                    APPLY NOW
                                </Link>
                            </div>
                        </div>

                        <div className="absolute bottom-12 left-12 opacity-5">
                            <span className="text-8xl font-black leading-none text-white">SCW</span>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Navbar
