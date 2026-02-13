import { Cpu, Beaker, Library, Trophy, Utensils, Laptop } from 'lucide-react';

const Infrastructure = () => {
    const facilities = [
        {
            title: 'Innovation IT Hub',
            desc: 'State-of-the-art computer labs with high-speed internet and latest software for BCA and PUC students.',
            icon: Cpu,
            image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800'
        },
        {
            title: 'Science Research Wing',
            desc: 'Fully equipped Physics, Chemistry, and Biology labs for hands-on experimental learning.',
            icon: Beaker,
            image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800'
        },
        {
            title: 'Knowledge Resource Centre',
            desc: 'A vast library with digital access, research journals, and quiet study zones for holistic learning.',
            icon: Library,
            image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=800'
        },
        {
            title: 'Women\'s Sports Arena',
            desc: 'Dedicated indoor and outdoor sports facilities including basketball, volleyball, and yoga studios.',
            icon: Trophy,
            image: 'https://images.unsplash.com/photo-1541534741688-6078c64b5903?auto=format&fit=crop&q=80&w=800'
        },
        {
            title: 'Culinary Commons',
            desc: 'Hygienic and nutritious cafeteria offering a variety of cuisines catering to student preferences.',
            icon: Utensils,
            image: 'https://images.unsplash.com/photo-1567529684892-09290a1b2d05?auto=format&fit=crop&q=80&w=800'
        },
        {
            title: 'Digital Classrooms',
            desc: 'Smart classrooms equipped with interactive displays and multi-media support for engaging lectures.',
            icon: Laptop,
            image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800'
        }
    ];

    return (
        <div className="flex flex-col">
            {/* Header */}
            <section className="bg-[#0b1e3d] text-white py-20 px-4">
                <div className="container mx-auto text-center space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold">Campus Infrastructure</h1>
                    <p className="text-xl text-blue-200 max-w-2xl mx-auto">
                        World-class facilities designed to provide an inspiring environment for learning and personal growth.
                    </p>
                </div>
            </section>

            {/* Facilities Grid */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {facilities.map((f, i) => (
                            <div key={i} className="group space-y-6">
                                <div className="aspect-[16/10] bg-slate-100 rounded-3xl overflow-hidden relative shadow-lg shadow-blue-900/5 hover:shadow-2xl transition-all duration-500">
                                    <img
                                        src={f.image}
                                        alt={f.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <div className="h-16 w-16 bg-white/90 rounded-full flex items-center justify-center text-blue-600 scale-0 group-hover:scale-100 transition-transform delay-100">
                                            <f.icon className="h-8 w-8" />
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-3 px-2">
                                    <h3 className="text-2xl font-bold text-[#0b1e3d] group-hover:text-blue-600 transition-colors">{f.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        {f.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Legacy/Experience section */}
            <section className="py-24 bg-blue-50">
                <div className="container mx-auto px-4 text-center space-y-12">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold text-[#0b1e3d]">Experience Our Legacy</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Our campus is more than just buildings; it's a vibrant ecosystem where history meets modern innovation.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800',
                            'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800',
                            'https://images.unsplash.com/photo-152305085306e-88021f879ad5?auto=format&fit=crop&q=80&w=800',
                            'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800'
                        ].map((img, i) => (
                            <div key={i} className="aspect-square rounded-2xl overflow-hidden shadow-md">
                                <img src={img} alt="Campus view" className="w-full h-full object-cover hover:scale-105 transition-transform" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Infrastructure;
