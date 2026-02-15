import { GraduationCap, Building2, Briefcase, BarChart } from 'lucide-react';

const Placement = () => {
    return (
        <div className="space-y-12 animate-in fade-in duration-700">
            <div className="space-y-4">
                <p className="text-blue-600 font-black text-xs tracking-[0.3em] uppercase">Career Success</p>
                <h1 className="text-4xl lg:text-6xl font-black text-[#101828]">Placement Cell</h1>
                <p className="text-gray-500 text-lg max-w-3xl leading-relaxed">
                    Our Training and Placement Cell acts as a bridge between the industry and the academia, ensuring that our students find the right platform to kickstart their careers.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { label: 'Placements', value: '95%', icon: BarChart },
                    { label: 'Recruiters', value: '50+', icon: Building2 },
                    { label: 'Highest Package', value: '8 LPA', icon: Briefcase },
                ].map((stat, i) => (
                    <div key={i} className="p-8 bg-blue-50 rounded-[2rem] border border-blue-100 space-y-4">
                        <stat.icon className="h-8 w-8 text-blue-600" />
                        <div>
                            <div className="text-4xl font-black text-[#101828]">{stat.value}</div>
                            <div className="text-xs uppercase font-black text-blue-600 tracking-widest">{stat.label}</div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-8 p-10 bg-white rounded-[2.5rem] border border-gray-100">
                    <h3 className="text-3xl font-black text-[#101828]">Training Programs</h3>
                    <div className="space-y-4">
                        {[
                            'Soft Skills & Communication',
                            'Aptitude & Logical Reasoning',
                            'Technical Interview Prep',
                            'Resume Building Workshops',
                            'Mock Interviews with Industry Experts'
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl italic font-bold text-gray-600">
                                <GraduationCap className="h-5 w-5 text-[#EAB308]" />
                                {item}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    {[
                        'https://images.unsplash.com/photo-1573161158362-5505cba2e6a4?auto=format&fit=crop&q=80&w=400',
                        'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=400',
                        'https://images.unsplash.com/photo-1542744173-8e0ee268cf36?auto=format&fit=crop&q=80&w=400',
                        'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=400'
                    ].map((img, i) => (
                        <img key={i} src={img} alt="Placement" className="rounded-3xl w-full h-full object-cover shadow-lg" />
                    ))}
                </div>
            </div>

            <div className="bg-[#101828] rounded-[2.5rem] p-10 lg:p-16 text-white text-center space-y-8">
                <h2 className="text-3xl lg:text-5xl font-black">Top Recruiters</h2>
                <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale contrast-125">
                    {/* Placeholder for recruiter logos */}
                    <span className="text-2xl font-black">INFOSYS</span>
                    <span className="text-2xl font-black">WIPRO</span>
                    <span className="text-2xl font-black">TCS</span>
                    <span className="text-2xl font-black">ACCENTURE</span>
                    <span className="text-2xl font-black">DELLOITE</span>
                </div>
            </div>
        </div>
    );
};

export default Placement;
