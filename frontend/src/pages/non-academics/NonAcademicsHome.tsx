import { Trophy, Music, Heart, Camera, MapPin, Users } from 'lucide-react';

const NonAcademicsHome = () => {
    return (
        <div className="flex flex-col">
            {/* Header */}
            <section className="bg-[#101828] text-white py-24 px-4 overflow-hidden relative">
                <div className="container mx-auto text-center space-y-6 relative z-10">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight">Life Beyond Books</h1>
                    <p className="text-xl text-[#EAB308] max-w-2xl mx-auto font-bold uppercase tracking-widest text-sm">
                        Discover a vibrant campus life filled with cultural gems, athletic excellence, and meaningful social service.
                    </p>
                </div>
            </section>

            {/* Major Categories */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
                    {[
                        {
                            title: 'Sports & Games',
                            desc: 'From basketball tournaments to indoor yoga, we foster an environment of athletic discipline and physical well-being.',
                            icon: Trophy,
                            image: 'https://images.unsplash.com/photo-1542652694-40abf526446e?auto=format&fit=crop&q=80&w=800'
                        },
                        {
                            title: 'Cultural Activities',
                            desc: 'Express yourself through dance, music, theater, and arts in our numerous student-led cultural societies and festivals.',
                            icon: Music,
                            image: 'https://images.unsplash.com/photo-1514525253361-bee8a18742ca?auto=format&fit=crop&q=80&w=800'
                        },
                        {
                            title: 'Social Service (NSS)',
                            desc: 'Giving back to the community through regular blood donation camps, rural development programs, and health awareness drives.',
                            icon: Heart,
                            image: 'https://images.unsplash.com/photo-1559027615-cd837c920b7b?auto=format&fit=crop&q=80&w=800'
                        }
                    ].map((item, i) => (
                        <div key={i} className="group space-y-6">
                            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
                                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 bg-yellow-50 text-[#EAB308] rounded-xl flex items-center justify-center">
                                        <item.icon className="h-5 w-5" />
                                    </div>
                                    <h3 className="text-2xl font-black text-[#101828]">{item.title}</h3>
                                </div>
                                <p className="text-slate-600 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Clubs Grid */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4 space-y-16">
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl lg:text-5xl font-black text-[#101828]">Student-Led Clubs</h2>
                        <p className="text-slate-500 max-w-2xl mx-auto font-medium">Explore your passions and develop leadership skills in our diverse range of special interest groups.</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { name: 'Photography Club', icon: Camera },
                            { name: 'Eco-Warriors', icon: MapPin },
                            { name: 'Entrepreneurship Cell', icon: Users },
                            { name: 'Literary Society', icon: BookOpen }
                        ].map((club, i) => (
                            <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 text-center space-y-4 hover:border-[#EAB308] hover:shadow-xl transition-all group hover:-translate-y-2">
                                <div className="h-14 w-14 bg-yellow-50 text-[#EAB308] rounded-2xl flex items-center justify-center mx-auto group-hover:bg-[#101828] group-hover:text-white transition-all">
                                    <club.icon className="h-7 w-7" />
                                </div>
                                <div className="font-black text-[#101828] tracking-tight">{club.name}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

const BookOpen = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
);

export default NonAcademicsHome;
