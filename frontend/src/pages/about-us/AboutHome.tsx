import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useCallback, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const heroImages = [
    {
        url: "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=1500",
        caption: "Excellence in Women's Education"
    },
    {
        url: "https://images.unsplash.com/photo-152305085306e-88021f879ad5?auto=format&fit=crop&q=80&w=1500",
        caption: "State-of-the-Art Campus Facilities"
    },
    {
        url: "https://images.unsplash.com/photo-1523240795203-d684964f852e?auto=format&fit=crop&q=80&w=1500",
        caption: "Empowering Future Leaders"
    }
];

const AboutHome = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 30 });
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

    return (
        <div className="space-y-20 ">

            {/* Hero Section */}
            <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden rounded-[2.5rem]">

                {/* Carousel Container */}
                <div className="absolute inset-0" ref={emblaRef}>
                    <div className="flex h-full">
                        {heroImages.map((image, index) => (
                            <div key={index} className="min-w-full h-full relative">
                                <img
                                    src={image.url}
                                    alt={`About Hero ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-[#101828]/60" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 text-white pointer-events-none">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-6 tracking-tight">
                        About Sai College <br />
                        <span className="text-[#EAB308]">for Women</span>
                    </h1>

                    <p className="max-w-2xl text-gray-200 text-lg md:text-xl font-bold uppercase tracking-widest">
                        {heroImages[selectedIndex].caption}
                    </p>
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


            {/* Image Grid */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <img
                    src="/about1.jpg"
                    alt="Campus"
                    className="rounded-2xl shadow-lg object-cover h-72 w-full"
                />
                <img
                    src="/about2.jpg"
                    alt="Students"
                    className="rounded-2xl shadow-lg object-cover h-72 w-full"
                />
                <img
                    src="/about3.jpg"
                    alt="Events"
                    className="rounded-2xl shadow-lg object-cover h-72 w-full"
                />
            </section>

            {/* Overview */}
            <section className="text-center max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6 text-[#101828]">
                    Our Journey
                </h2>
                <p className="text-gray-600 leading-relaxed">
                    Since our establishment, Sai College for Women has been committed to
                    fostering academic excellence, character building, and leadership
                    skills. We believe education should empower women to lead, innovate,
                    and contribute meaningfully to society.
                </p>
            </section>

            {/* Quick Navigation Cards */}
            <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {[
                    { title: "History", link: "history" },
                    { title: "Founders", link: "founders" },
                    { title: "Vision & Mission", link: "vision-mission" },
                    { title: "Chairman Message", link: "chairman-message" },
                    { title: "Principal Message", link: "principal-message" },
                ].map((item) => (
                    <Link
                        key={item.title}
                        to={item.link}
                        className="p-6 bg-white border border-gray-100 rounded-2xl text-center hover:bg-[#101828] hover:text-[#EAB308] transition-all hover:shadow-xl font-bold text-[#101828]"
                    >
                        {item.title}
                    </Link>
                ))}
            </section>

        </div>
    );
};

export default AboutHome;
