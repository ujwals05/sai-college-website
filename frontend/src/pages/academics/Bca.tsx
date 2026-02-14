import { Code2, Terminal, Cpu, Database, Cloud, Users } from 'lucide-react';

const Bca = () => {
    return (
        <div className="space-y-12 animate-in fade-in duration-700">
            <div className="space-y-3">
                <p className="text-blue-600 font-black text-xs tracking-[0.3em] uppercase">Bachelor of Computer Applications</p>
                <h1 className="text-4xl lg:text-6xl font-black text-[#101828]">BCA Program</h1>
                <p className="text-gray-500 text-lg leading-relaxed max-w-3xl">
                    Prepare for a dynamic career in IT. Our BCA program combines computational theory with practical applications in software development, cloud computing, and cybersecurity.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                    <div className="bg-white border border-gray-100 rounded-[2.5rem] p-10 space-y-8">
                        <h3 className="text-2xl font-black text-[#101828]">Curriculum Highlights</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                { title: 'Programming', icon: Terminal, list: ['Java, Python, C++', 'Data Structures', 'Algorithms'] },
                                { title: 'Web Development', icon: Code2, list: ['HTML/CSS/JS', 'React & Node.js', 'Fullstack Frameworks'] },
                                { title: 'Core Computing', icon: Cpu, list: ['OS & Networking', 'Digital Logic', 'Architecture'] },
                                { title: 'Data & Cloud', icon: Database, list: ['SQL/NoSQL', 'AWS & Azure', 'Big Data'] }
                            ].map((topic) => (
                                <div key={topic.title} className="space-y-4">
                                    <div className="flex items-center gap-3 text-blue-600">
                                        <topic.icon className="h-5 w-5" />
                                        <span className="font-black uppercase text-xs tracking-widest">{topic.title}</span>
                                    </div>
                                    <ul className="space-y-2">
                                        {topic.list.map(item => (
                                            <li key={item} className="flex items-center gap-2 text-gray-500 text-sm font-bold">
                                                <div className="h-1 w-1 bg-blue-400 rounded-full" /> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-[#101828] text-white rounded-[2.5rem] p-10 overflow-hidden relative">
                        <div className="relative z-10 space-y-4">
                            <h3 className="text-2xl font-black">Industrial Internships</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Our students undergo mandatory internships in top IT firms, gaining hands-on experience in real-world software development lifecycles.
                            </p>
                        </div>
                        <div className="absolute bottom-0 right-0 opacity-10">
                            <Cloud className="h-48 w-48 -rotate-12 translate-x-12 translate-y-12" />
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="p-8 bg-blue-50 border border-blue-100 rounded-[2rem] space-y-6">
                        <div className="h-12 w-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600">
                            <Users className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-black text-[#101828]">Career Outcomes</h3>
                        <div className="space-y-4">
                            {['Software Developer', 'System Analyst', 'Web Designer', 'Database Administrator', 'IT Consultant'].map(job => (
                                <div key={job} className="flex items-center gap-3 text-gray-600 font-bold text-sm">
                                    <div className="h-1.5 w-1.5 bg-blue-600 rounded-full" /> {job}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="p-8 bg-gray-50 border border-gray-200 rounded-[2rem] space-y-4">
                        <h4 className="font-black text-xs uppercase tracking-widest text-gray-400">Eligibility</h4>
                        <p className="text-gray-600 text-sm leading-relaxed font-medium">
                            Completion of 10+2 / PUC from any stream with a minimum of 45% marks. Mathematical background is preferred.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bca;
