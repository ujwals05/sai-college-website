import { ShieldCheck, HeartPulse, GraduationCap, Users, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const StudentWelfare = () => {
    return (
        <div className="flex flex-col">
            {/* Header */}
            <section className="bg-[#101828] text-white py-24 px-4 overflow-hidden relative">
                <div className="container mx-auto text-center space-y-6 relative z-10">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight">Student Welfare & Alumni</h1>
                    <p className="text-xl text-[#EAB308] max-w-2xl mx-auto font-bold uppercase tracking-widest text-sm">
                        Nurturing student success and fostering global connections that last a lifetime.
                    </p>
                </div>
            </section>

            {/* Support Services */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16 space-y-4 text-[#101828]">
                        <h2 className="text-3xl lg:text-5xl font-black">Student Support Services</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            We prioritize the safety, mental health, and professional growth of our students above all else.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                title: 'Anti-Ragging & Compliance',
                                desc: 'A strictly monitored campus with a zero-tolerance policy towards ragging and harassment.',
                                icon: ShieldCheck,
                                color: 'blue'
                            },
                            {
                                title: 'Health & Counselling',
                                desc: 'Dedicated counsellors and on-campus medical checkups to ensure student well-being.',
                                icon: HeartPulse,
                                color: 'rose'
                            },
                            {
                                title: 'Placement & Career Cell',
                                desc: 'Comprehensive career guidance and recruitment drives with top-tier organizations.',
                                icon: GraduationCap,
                                color: 'blue'
                            },
                            {
                                title: 'Scholarship Programs',
                                desc: 'Merit-based and need-based financial assistance to ensure quality education is accessible.',
                                icon: Users,
                                color: 'gold'
                            }
                        ].map((s, i) => (
                            <div key={i} className="p-8 bg-white rounded-3xl border border-slate-100 space-y-6 hover:shadow-xl transition-all group flex items-start gap-6">
                                <div className="h-16 w-16 bg-yellow-50 text-[#EAB308] rounded-2xl flex items-center justify-center shrink-0 shadow-sm group-hover:bg-[#101828] group-hover:text-white transition-all">
                                    <s.icon className="h-8 w-8" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-2xl font-black text-[#101828]">{s.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        {s.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Alumni Section */}
            <section className="py-24 bg-[#101828] text-white relative overflow-hidden">
                <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-16 relative z-10">
                    <div className="lg:w-1/2 space-y-8">
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight">Sai College Alumni: <br />A Global Network</h2>
                        <p className="text-white/80 text-lg leading-relaxed font-medium">
                            Our legacy is reflected in our graduates who are leading across industries worldwide. Staying connected with your alma mater is now easier than ever.
                        </p>
                        <div className="grid grid-cols-2 gap-8 py-4">
                            <div>
                                <div className="text-4xl md:text-5xl font-black text-[#EAB308]">5000+</div>
                                <div className="text-white/60 text-xs font-black uppercase tracking-[0.2em] mt-3">Global Alumni</div>
                            </div>
                            <div>
                                <div className="text-4xl md:text-5xl font-black text-[#EAB308]">20+</div>
                                <div className="text-white/60 text-xs font-black uppercase tracking-[0.2em] mt-3">Intl. Chapters</div>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            <Button className="bg-[#EAB308] hover:bg-[#92400E] text-[#101828] hover:text-white font-black h-14 px-10 rounded-xl shadow-xl shadow-yellow-500/10 active:scale-95 transition-all">
                                REGISTER NOW
                            </Button>
                            <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#101828] font-black h-14 px-10 rounded-xl active:scale-95 transition-all">
                                ALUMNI PORTAL <ExternalLink className="ml-2 h-5 w-5" />
                            </Button>
                        </div>
                    </div>
                    <div className="lg:w-1/2 w-full">
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=400',
                                'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=400',
                                'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=400',
                                'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&q=80&w=400'
                            ].map((img, i) => (
                                <img key={i} src={img} alt="Alumni event" className="rounded-2xl w-full aspect-square object-cover shadow-2xl" />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default StudentWelfare;
