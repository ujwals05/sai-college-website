import { useState } from 'react';
import { Mail, GraduationCap, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Faculty = () => {
    const [activeTab, setActiveTab] = useState('All');

    const departments = ['All', 'PUC', 'BCA', 'B.Com', 'Management', 'Science'];

    const facultyMembers = [
        {
            name: 'Dr. Samuel Joseph',
            role: 'Principal',
            dept: 'Management',
            desc: 'Expert in Educational Leadership with 25+ years of experience.',
            image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400'
        },
        {
            name: 'Ms. Sarah Williams',
            role: 'Head of Department',
            dept: 'BCA',
            desc: 'Specializes in Artificial Intelligence and Cloud Computing.',
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400'
        },
        {
            name: 'Dr. Anita Rao',
            role: 'Senior Professor',
            dept: 'Commerce',
            desc: 'Acclaimed researcher in Financial Economics and Accounting.',
            image: 'https://images.unsplash.com/photo-1580894732230-282b963a709d?auto=format&fit=crop&q=80&w=400'
        },
        {
            name: 'Mr. David Raj',
            role: 'Assistant Professor',
            dept: 'PUC',
            desc: 'Dedicated to building strong foundations in Mathematics and Logic.',
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400'
        },
        {
            name: 'Dr. Priya Mani',
            role: 'Professor',
            dept: 'Science',
            desc: 'Research expert in Molecular Biology and Genetics.',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400'
        },
    ];

    const filteredFaculty = activeTab === 'All'
        ? facultyMembers
        : facultyMembers.filter(f => f.dept === activeTab || (activeTab === 'B.Com' && f.dept === 'Commerce'));

    return (
        <div className="flex flex-col">
            {/* Header */}
            <section className="bg-[#0b1e3d] text-white py-20 px-4">
                <div className="container mx-auto text-center space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold">Our Faculty</h1>
                    <p className="text-xl text-blue-200 max-w-2xl mx-auto">
                        Meet the exceptional educators and industry experts dedication to building the leaders of tomorrow.
                    </p>
                </div>
            </section>

            {/* Filters & Directory */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    {/* Controls */}
                    <div className="flex flex-col lg:flex-row justify-between items-center mb-16 gap-8">
                        <div className="flex flex-wrap gap-2">
                            {departments.map((dept) => (
                                <button
                                    key={dept}
                                    onClick={() => setActiveTab(dept)}
                                    className={`px-6 py-2 rounded-full font-bold text-sm transition-all ${activeTab === dept
                                            ? 'bg-blue-600 text-white'
                                            : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                                        }`}
                                >
                                    {dept}
                                </button>
                            ))}
                        </div>
                        <div className="relative w-full max-w-sm">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Search faculty..."
                                className="w-full h-12 pl-12 pr-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredFaculty.map((f, i) => (
                            <div key={i} className="group bg-white rounded-3xl border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col">
                                <div className="aspect-[4/5] bg-slate-200 relative overflow-hidden">
                                    <img
                                        src={f.image}
                                        alt={f.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent" />
                                    <div className="absolute bottom-6 left-6 right-6">
                                        <div className="text-blue-400 font-bold text-xs uppercase tracking-widest mb-1">{f.dept}</div>
                                        <div className="text-white text-2xl font-bold">{f.name}</div>
                                        <div className="text-slate-300 text-sm font-medium">{f.role}</div>
                                    </div>
                                </div>
                                <div className="p-8 space-y-6 flex-grow flex flex-col">
                                    <p className="text-slate-600 leading-relaxed italic">
                                        "{f.desc}"
                                    </p>
                                    <div className="pt-6 border-t border-slate-100 mt-auto flex justify-between items-center">
                                        <div className="flex gap-2">
                                            <Button variant="outline" size="icon" className="h-10 w-10 rounded-full text-blue-600">
                                                <Mail className="h-4 w-4" />
                                            </Button>
                                            <Button variant="outline" size="icon" className="h-10 w-10 rounded-full text-blue-600">
                                                <GraduationCap className="h-4 w-4" />
                                            </Button>
                                        </div>
                                        <Button variant="link" className="text-blue-600 font-bold p-0 h-auto">
                                            VIEW PROFILE
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Faculty;
