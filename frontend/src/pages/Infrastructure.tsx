import { Cpu, Beaker, Library as LibraryIcon, Trophy, Utensils, Laptop, ChevronLeft, ChevronRight, CheckCircle2, Heart } from 'lucide-react';
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useCallback, useState } from "react";

const heroImages = [
    {
        url: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1500",
        title: "Main Campus",
        subtitle: "A Beacon of Excellence in Women's Education"
    },
    {
        url: "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=1500",
        title: "Innovation Hub",
        subtitle: "Where Technology and Creativity Converge"
    },
    {
        url: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=1500",
        title: "Knowledge Centre",
        subtitle: "Gateway to Endless Intellectual Growth"
    },
    {
        url: "https://images.unsplash.com/photo-1517649763962-0c6234278a0b?auto=format&fit=crop&q=80&w=1500",
        title: "Sports Arena",
        subtitle: "Fostering Strength, Speed, and Sportsmanship"
    },
    {
        url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1500",
        title: "Auditorium",
        subtitle: "The Stage for Tomorrow's Leaders"
    }
];

const Infrastructure = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 40 });
    const [selectedIndex, setSelectedIndex] = useState(0);

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        emblaApi.on("select", onSelect);
        onSelect();

        const interval = setInterval(() => {
            emblaApi.scrollNext();
        }, 6000);

        return () => clearInterval(interval);
    }, [emblaApi, onSelect]);

    const detailedFacilities = [
        {
            title: 'Digital Innovation Hub',
            category: 'Technology',
            desc: 'Our premium computer laboratories are the heartbeat of technical education at Sai College. Equipped with the latest high-performance workstations and enterprise-grade software, we provide students with the tools to master software development, data science, and web technologies.',
            icon: Cpu,
            features: ['High-speed Fiber Internet', 'Industry-standard Software', 'Full-time Technical Support', 'Collaborative Workspaces'],
            image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200'
        },
        {
            title: 'Scientific Research Wing',
            category: 'Academics',
            desc: 'The college features specialized, fully-equipped laboratories for Physics, Chemistry, and Biology. These spaces are designed to encourage empirical learning and scientific inquiry, providing a solid foundation for our PUC and Science students.',
            icon: Beaker,
            features: ['Safety-first Environment', 'Modern Apparatus', 'Individual Workstations', 'Experienced Lab Tutors'],
            image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=1200'
        },
        {
            title: 'Central Library',
            category: 'Knowledge',
            desc: 'Far more than a repository of books, our Knowledge Resource Centre is a quiet sanctuary for deep learning. With an extensive collection of textbooks, research journals, and 10,000+ digital resources, it supports every academic aspiration.',
            icon: LibraryIcon,
            features: ['Digital Library Portal', 'Reference Section', 'Current Affairs Hub', 'NPTEL Video Gallery'],
            image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=1200'
        },
        {
            title: 'Indoor Sports Complex',
            category: 'Wellness',
            desc: 'We believe in a sound mind in a sound body. Our indoor sports arena and yoga studio provide students with dedicated spaces for physical fitness, competitive training, and mental well-being.',
            icon: Trophy,
            features: ['Badminton Courts', 'Table Tennis Zone', 'Professional Coaching', 'Yoga & Meditation Hall'],
            image: 'https://images.unsplash.com/photo-1541534741688-6078c64b5903?auto=format&fit=crop&q=80&w=1200'
        }
    ];

    return (
        <div className="flex flex-col space-y-24 pb-24">

            {/* Hero Carousel */}
            <section className="relative h-screen w-full overflow-hidden">
                <div className="absolute inset-0" ref={emblaRef}>
                    <div className="flex h-full">
                        {heroImages.map((slide, index) => (
                            <div key={index} className="min-w-full h-full relative">
                                <img
                                    src={slide.url}
                                    alt={slide.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-[#101828]/60" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 text-white pointer-events-none">
                    <p className="text-[#EAB308] font-black text-xs md:text-sm tracking-[0.4em] uppercase mb-6 animate-in slide-in-from-bottom duration-700">
                        Campus Excellence
                    </p>
                    <h1 className="text-4xl md:text-6xl lg:text-8xl font-black mb-8 leading-tight tracking-tight">
                        {heroImages[selectedIndex].title}
                    </h1>
                    <p className="max-w-xl text-gray-200 text-lg md:text-xl font-bold uppercase tracking-[0.2em] opacity-80">
                        {heroImages[selectedIndex].subtitle}
                    </p>
                </div>

                {/* Carousel Controls */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 lg:left-auto lg:right-20 lg:translate-x-0 z-20 flex items-center gap-6">
                    <div className="flex gap-2.5">
                        {heroImages.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => emblaApi?.scrollTo(index)}
                                className={`h-1.5 rounded-full transition-all duration-300 ${selectedIndex === index
                                    ? "w-12 bg-white"
                                    : "w-4 bg-white/30 hover:bg-white/50"
                                    }`}
                            />
                        ))}
                    </div>
                    <div className="hidden lg:flex gap-3 ml-4">
                        <button onClick={scrollPrev} className="h-12 w-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition group">
                            <ChevronLeft className="w-5 h-5 text-white/70 group-hover:text-white" />
                        </button>
                        <button onClick={scrollNext} className="h-12 w-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition group">
                            <ChevronRight className="w-5 h-5 text-white/70 group-hover:text-white" />
                        </button>
                    </div>
                </div>
            </section>

            {/* Introduction */}
            <section className="container mx-auto px-6 text-center max-w-4xl space-y-6">
                <h2 className="text-3xl lg:text-5xl font-black text-[#101828]">A Living Ecosystem for Learning</h2>
                <p className="text-gray-500 text-lg md:text-xl leading-relaxed">
                    Sai College for Women is spread across a serene, green campus that provides the perfect balance between academic rigor and creative freedom. Our facilities are continuously upgraded to meet global standards.
                </p>
                <div className="flex justify-center pt-4">
                    <div className="h-1.5 w-24 bg-blue-600 rounded-full" />
                </div>
            </section>

            {/* Detailed Feature Sections */}
            <section className="container mx-auto px-6 space-y-32">
                {detailedFacilities.map((facility, index) => (
                    <div
                        key={facility.title}
                        className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center animate-in duration-700`}
                    >
                        <div className="w-full lg:w-1/2 space-y-8">
                            <div className="space-y-4 text-center lg:text-left">
                                <span className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-xs font-black uppercase tracking-widest border border-blue-100 italic">
                                    {facility.category}
                                </span>
                                <h3 className="text-4xl lg:text-5xl font-black text-[#101828] leading-tight tracking-tight">
                                    {facility.title}
                                </h3>
                                <p className="text-gray-500 text-lg leading-relaxed">
                                    {facility.desc}
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {facility.features.map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100 hover:border-blue-200 transition-colors group">
                                        <div className="h-10 w-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all">
                                            <CheckCircle2 className="h-5 w-5" />
                                        </div>
                                        <span className="font-bold text-[#1b2c47] text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2">
                            <div className="relative group">
                                <div className="absolute inset-0 bg-blue-600 rounded-[3rem] rotate-3 group-hover:rotate-0 transition-transform duration-500 opacity-10" />
                                <img
                                    src={facility.image}
                                    alt={facility.title}
                                    className="relative z-10 w-full h-[400px] lg:h-[500px] object-cover rounded-[3rem] shadow-2xl border border-gray-100 group-hover:-translate-y-2 transition-transform duration-500"
                                />
                                <div className="absolute -bottom-6 -right-6 h-32 w-32 bg-blue-50 rounded-full blur-3xl opacity-50" />
                            </div>
                        </div>
                    </div>
                ))}
            </section>

            {/* Quick Overview Grid */}
            <section className="bg-gray-50 py-24 border-y border-gray-100">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20 space-y-4">
                        <p className="text-blue-600 font-black text-xs tracking-[0.4em] uppercase">The SCW Experience</p>
                        <h2 className="text-3xl lg:text-5xl font-black text-[#101828]">More Than Just Classrooms</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: 'Auditorium', icon: Trophy, desc: 'Large capacity venue for state-level events.' },
                            { title: 'Seminar Hall', icon: Laptop, desc: 'Smart audio-visual enabled guest lectures.' },
                            { title: 'Cafeteria', icon: Utensils, desc: 'Nutritious & hygienic student hub.' },
                            { title: 'Safe Campus', icon: Heart, desc: '24/7 security with women-first protocols.' }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-8 rounded-[2rem] border border-gray-100 hover:shadow-xl transition-all group hover:-translate-y-2">
                                <div className="h-14 w-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#101828] group-hover:text-[#EAB308] transition-all">
                                    <item.icon className="h-6 w-6" />
                                </div>
                                <h4 className="font-black text-xl text-[#101828] mb-3">{item.title}</h4>
                                <p className="text-gray-500 text-sm leading-relaxed font-bold italic">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Infrastructure;
