import { Trophy, Music, Heart, Camera, MapPin, Users } from 'lucide-react';

const NonAcademics = () => {
    return (
        <div className="flex flex-col">
            {/* Header */}
            <section className="bg-[#0b1e3d] text-white py-20 px-4">
                <div className="container mx-auto text-center space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold">Life Beyond Books</h1>
                    <p className="text-xl text-blue-200 max-w-2xl mx-auto">
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
                                    <div className="h-10 w-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                                        <item.icon className="h-5 w-5" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-[#0b1e3d]">{item.title}</h3>
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
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4 space-y-16">
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl font-bold text-[#0b1e3d]">Student-Led Clubs</h2>
                        <p className="text-slate-500 max-w-2xl mx-auto">Explore your passions and develop leadership skills in our diverse range of special interest groups.</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { name: 'Photography Club', icon: Camera },
                            { name: 'Eco-Warriors', icon: MapPin },
                            { name: 'Entrepreneurship Cell', icon: Users },
                            { name: 'Literary Society', icon: BookOpen }
                        ].map((club, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 text-center space-y-4 hover:border-blue-300 transition-all hover:-translate-y-1">
                                <div className="h-12 w-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto">
                                    <club.icon className="h-6 w-6" />
                                </div>
                                <div className="font-bold text-[#0b1e3d]">{club.name}</div>
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

export default NonAcademics;
