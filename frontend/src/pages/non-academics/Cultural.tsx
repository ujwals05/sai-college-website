import { Music, Camera, Users } from 'lucide-react';

const Cultural = () => {
    return (
        <div className="space-y-12">
            <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-black text-[#101828] leading-tight">Cultural Spectrum</h1>
                <p className="text-lg text-gray-500 max-w-2xl font-medium">
                    A vibrant platform for creative expression. From rhythmic dance to melodic symphonies, we celebrate the diverse cultural heritage of our students.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { title: 'Dance & Rhythm', desc: 'Classical, contemporary, and folk dance societies.', icon: Users },
                    { title: 'Music & Choir', desc: 'Instrumental and vocal groups for every genre.', icon: Music },
                    { title: 'Drama & Arts', desc: 'Theater productions and fine arts workshops.', icon: Camera }
                ].map((item, i) => (
                    <div key={i} className="p-8 rounded-[2.5rem] border border-gray-100 bg-white shadow-sm hover:shadow-xl hover:border-blue-100 transition-all group">
                        <div className="h-14 w-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#101828] group-hover:text-[#EAB308] transition-all">
                            <item.icon className="h-6 w-6" />
                        </div>
                        <h4 className="font-black text-xl text-[#101828] mb-3">{item.title}</h4>
                        <p className="text-gray-500 text-sm leading-relaxed font-bold italic">{item.desc}</p>
                    </div>
                ))}
            </div>

            <div className="aspect-video rounded-[3rem] overflow-hidden shadow-2xl relative group">
                <img
                    src="https://images.unsplash.com/photo-1514525253361-bee8a18742ca?auto=format&fit=crop&q=80&w=1200"
                    alt="Cultural Event"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-12">
                    <div className="space-y-2">
                        <p className="text-[#EAB308] font-black text-xs tracking-widest uppercase">Upcoming Event</p>
                        <h4 className="text-white text-3xl font-black">Pratibha: The Annual Cultural Fest</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cultural;
