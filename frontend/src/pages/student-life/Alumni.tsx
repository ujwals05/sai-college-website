import { Globe, Users, Trophy, ExternalLink } from 'lucide-react';

const Alumni = () => {
    return (
        <div className="space-y-12 animate-in fade-in duration-700">
            <div className="space-y-4">
                <p className="text-[#EAB308] font-black text-xs tracking-[0.3em] uppercase">Global Community</p>
                <h1 className="text-4xl lg:text-6xl font-black text-[#101828]">Alumni Network</h1>
                <p className="text-gray-500 text-lg max-w-3xl leading-relaxed">
                    Our graduates are making their mark in every corner of the globe. Join the Sai College Alumni Association to stay connected with your alma mater and fellow graduates.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative">
                    <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=1000"
                            alt="Alumni"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-[2rem] shadow-2xl border border-gray-100 hidden md:block">
                        <div className="text-4xl font-black text-[#101828]">5000+</div>
                        <div className="text-xs font-black text-[#EAB308] uppercase tracking-[0.2em]">Active Members</div>
                    </div>
                </div>

                <div className="space-y-8">
                    <h3 className="text-3xl font-black text-[#101828]">Benefits of Joining</h3>
                    <div className="space-y-6">
                        {[
                            { title: 'Networking', desc: 'Connect with professionals across various industries.', icon: Globe },
                            { title: 'Mentorship', desc: 'Guide the next generation of students.', icon: Users },
                            { title: 'Success Stories', desc: 'Get featured in our annual magazine.', icon: Trophy },
                        ].map((b, i) => (
                            <div key={i} className="flex gap-6 group">
                                <div className="h-14 w-14 bg-yellow-50 text-[#EAB308] rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-[#101828] group-hover:text-white transition-all">
                                    <b.icon className="h-7 w-7" />
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-xl font-black text-[#101828]">{b.title}</h4>
                                    <p className="text-gray-500 text-sm font-medium">{b.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="pt-4">
                        <button className="bg-[#101828] text-white font-black px-10 py-5 rounded-2xl hover:bg-[#EAB308] hover:text-[#101828] transition-all shadow-xl active:scale-95 flex items-center gap-3">
                            ALUMNI PORTAL <ExternalLink className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="bg-gray-50 rounded-[2.5rem] p-10 lg:p-16 border border-gray-100 italic">
                <p className="text-2xl lg:text-3xl font-black text-[#101828] text-center leading-relaxed">
                    "Once a student of Sai College, always an ambassador of excellence."
                </p>
            </div>
        </div>
    );
};

export default Alumni;
