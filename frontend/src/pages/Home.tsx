import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Users, GraduationCap, Award, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import useEmblaCarousel from "embla-carousel-react"
import { useEffect, useCallback, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const heroImages = [
    "/hero/hero1.png",
    "/hero/hero2.png",
    "/hero/hero3.png"

]

const Home = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 30 })
    const [selectedIndex, setSelectedIndex] = useState(0)

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

    const onSelect = useCallback(() => {
        if (!emblaApi) return
        setSelectedIndex(emblaApi.selectedScrollSnap())
    }, [emblaApi])

    useEffect(() => {
        if (!emblaApi) return
        emblaApi.on("select", onSelect)
        onSelect()

        const interval = setInterval(() => {
            emblaApi.scrollNext()
        }, 6000)

        return () => clearInterval(interval)
    }, [emblaApi, onSelect])

    return (
        <div className="flex flex-col">
            {/* ================= HERO SECTION ================= */}
            <section className="relative min-h-screen w-full text-white overflow-hidden">

                {/* Background Carousel */}
                <div className="absolute inset-0 z-0" ref={emblaRef}>
                    <div className="flex h-full">
                        {heroImages.map((src, index) => (
                            <div key={index} className="min-w-full h-full relative">
                                <img
                                    src={src}
                                    alt={`Hero ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                                {/* Clean Overlay */}
                                <div className="absolute inset-0 bg-black/60" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Hero Content */}
                <div className="relative z-10 flex items-center min-h-screen">
                    <div className="container mx-auto px-6 lg:px-12">
                        <div className="max-w-3xl space-y-6">

                            {/* Badge
                            <div className="inline-flex items-center gap-2 bg-blue-600/20 backdrop-blur-md border border-blue-400/30 px-4 py-2 rounded-full">
                                <span className="h-2 w-2 bg-blue-400 rounded-full animate-pulse" />
                                <span className="text-xs font-semibold tracking-widest uppercase text-blue-100">
                                    Admissions Open — 2026
                                </span>
                            </div> */}

                            {/* Heading */}
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
                                Empowering <br />
                                <span className="text-blue-400">
                                    Future Leaders
                                </span>
                            </h1>

                            {/* Description */}
                            <p className="text-lg md:text-xl text-gray-200 max-w-xl leading-relaxed">
                                Sai College for Women nurtures academic excellence and leadership
                                through innovative teaching and holistic development.
                            </p>

                            {/* Buttons */}
                            <div className="flex flex-wrap gap-4 pt-4">
                                <Link to="/admissions">
                                    <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-5 text-base font-semibold rounded-lg transition-all duration-300 hover:-translate-y-1">
                                        APPLY NOW <ArrowRight className="ml-2 w-5 h-5" />
                                    </Button>
                                </Link>

                                <Link to="/academics">
                                    <Button className="border border-white text-white hover:bg-white hover:text-[#0b1e3d] px-8 py-5 text-base font-semibold rounded-lg transition-all duration-300 hover:-translate-y-1">
                                        EXPLORE PROGRAMS
                                    </Button>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Carousel Controls */}
                <div className="absolute bottom-10 right-10 z-20 hidden md:flex items-center gap-4">
                    <div className="flex gap-2">
                        {heroImages.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => emblaApi?.scrollTo(index)}
                                className={`h-1.5 rounded-full transition-all duration-300 ${selectedIndex === index
                                        ? "w-10 bg-blue-500"
                                        : "w-4 bg-white/40 hover:bg-white/70"
                                    }`}
                            />
                        ))}
                    </div>

                    <div className="flex gap-2 ml-4">
                        <button
                            onClick={scrollPrev}
                            className="h-10 w-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/20 transition"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>

                        <button
                            onClick={scrollNext}
                            className="h-10 w-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/20 transition"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

            </section>


            {/* ================= CORE VALUES ================= */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2 space-y-8">
                            <div className="space-y-4">
                                <p className="text-blue-600 font-black text-xs tracking-[0.3em] uppercase">Why Choose SCW?</p>
                                <h2 className="text-4xl lg:text-6xl font-black text-[#1b2c47] leading-[1.1]">
                                    A Tradition of excellence, <br />
                                    A future of innovation.
                                </h2>
                            </div>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                We provide a supportive and challenging environment that encourages students to discover their passions, achieve their goals, and make a positive impact on the world.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {['Holistic Digital Learning', 'Women Empowerment Focus', 'Placement Assistance', 'Modern Infrastructure'].map(item => (
                                    <div key={item} className="flex items-center gap-3 font-bold text-[#1b2c47]">
                                        <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                            <CheckCircle className="w-4 h-4" />
                                        </div>
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:w-1/2 relative">
                            <div className="aspect-square bg-blue-600 rounded-[3rem] overflow-hidden rotate-3 shadow-2xl translate-x-4">
                                <img
                                    src="https://images.unsplash.com/photo-1523240795203-d684964f852e?auto=format&fit=crop&q=80&w=1000"
                                    className="w-full h-full object-cover -rotate-3 scale-110"
                                    alt="Students"
                                />
                            </div>
                            <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-3xl shadow-xl space-y-2 max-w-[240px]">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3, 4].map(i => (
                                        <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                                            <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                                        </div>
                                    ))}
                                </div>
                                <p className="text-sm font-bold text-[#1b2c47]">Join over 10,000+ successful graduates worldwide.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= PROGRAMS GRID ================= */}
            <section className="py-24 bg-gray-50/50">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
                        <p className="text-blue-600 font-black text-xs tracking-[0.3em] uppercase">Academic Pathways</p>
                        <h2 className="text-4xl lg:text-6xl font-black text-[#1b2c47]">Our Specialized Programs</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Pre-University (PUC)',
                                desc: 'Building strong foundations in Science & Commerce for a bright career ahead.',
                                icon: BookOpen,
                                color: 'blue'
                            },
                            {
                                title: 'BCA (Computer App)',
                                desc: 'Unlock the future of technology with our industry-aligned computer science program.',
                                icon: GraduationCap,
                                color: 'cyan'
                            },
                            {
                                title: 'B.Com / Management',
                                desc: 'Expertise in finance, accounting, and business strategies for future leaders.',
                                icon: Award,
                                color: 'indigo'
                            },
                        ].map((p) => (
                            <div key={p.title} className="group relative bg-white p-10 rounded-[2.5rem] border border-gray-100 hover:border-blue-200 transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] hover:-translate-y-2">
                                <div className="h-16 w-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                                    <p.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl lg:text-3xl font-black text-[#1b2c47] mb-4">{p.title}</h3>
                                <p className="text-gray-500 font-medium leading-relaxed mb-8">{p.desc}</p>
                                <Link to="/academics" className="inline-flex items-center text-sm font-black text-blue-600 tracking-widest hover:text-blue-700">
                                    LEARN MORE <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
