import { Button } from '@/components/ui/button';
import { BookOpen, GraduationCap, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Academics = () => {
    const programs = [
        {
            title: 'Pre-University (PUC)',
            subtitle: 'Foundation for Excellence',
            desc: 'Our PUC program offers specialized tracks in Science and Commerce, designed to bridge the gap between school and professional higher education.',
            icon: BookOpen,
            features: ['Modern Laboratories', 'Foundational Mathematics', 'Stream-specific coaching']
        },
        {
            title: 'BCA (Computer App)',
            subtitle: 'Coding the Future',
            desc: 'A comprehensive Bachelor of Computer Applications program focusing on software engineering, cloud computing, and full-stack development.',
            icon: GraduationCap,
            features: ['Industry Internships', 'Cloud Computing Lab', 'Software Development Kits']
        },
        {
            title: 'B.Com / Management',
            subtitle: 'Business Leadership',
            desc: 'Bachelor of Commerce with tracks in Accounting & Finance, preparing students for the dynamic world of business and entrepreneurship.',
            icon: Award,
            features: ['Tally & ERP Training', 'Stock Market Lab', 'Entrepreneurship Cell']
        }
    ];

    return (
        <div className="flex flex-col">
            {/* Header */}
            <section className="bg-[#0b1e3d] text-white py-20 px-4">
                <div className="container mx-auto text-center space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold">Academic Excellence</h1>
                    <p className="text-xl text-blue-200 max-w-2xl mx-auto">
                        A curriculum designed to empower women through technical proficiency and leadership skills.
                    </p>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-4xl text-center space-y-8">
                    <h2 className="text-3xl font-bold text-[#0b1e3d]">Holistic Education for a Global World</h2>
                    <p className="text-slate-600 text-lg leading-relaxed">
                        At Sai College for Women, we go beyond textbooks. Our academic philosophy integrates rigorous classroom learning with project-based experiences, guest lectures from industry veterans, and dedicated personality development sessions.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <div className="flex items-center gap-2 text-slate-700 font-semibold bg-slate-50 px-4 py-2 rounded-full border border-slate-100">
                            <CheckCircle2 className="h-5 w-5 text-blue-600" /> Professional Ethics
                        </div>
                        <div className="flex items-center gap-2 text-slate-700 font-semibold bg-slate-50 px-4 py-2 rounded-full border border-slate-100">
                            <CheckCircle2 className="h-5 w-5 text-blue-600" /> Digital Literacy
                        </div>
                        <div className="flex items-center gap-2 text-slate-700 font-semibold bg-slate-50 px-4 py-2 rounded-full border border-slate-100">
                            <CheckCircle2 className="h-5 w-5 text-blue-600" /> Leadership Skills
                        </div>
                    </div>
                </div>
            </section>

            {/* Programs Detail */}
            <section className="py-24 bg-blue-50/50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 gap-16">
                        {programs.map((p, i) => (
                            <div key={i} id={p.title.toLowerCase().split(' ')[0]} className={`flex flex-col lg:flex-row items-center gap-12 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                                <div className="lg:w-1/2 space-y-6">
                                    <div className="h-14 w-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center">
                                        <p.icon className="h-8 w-8" />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-3xl font-bold text-[#0b1e3d]">{p.title}</h3>
                                        <p className="text-blue-600 font-bold uppercase tracking-widest text-sm">{p.subtitle}</p>
                                    </div>
                                    <p className="text-slate-600 text-lg leading-relaxed">
                                        {p.desc}
                                    </p>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {p.features.map((f) => (
                                            <li key={f} className="flex gap-3 items-center text-slate-700 font-medium">
                                                <CheckCircle2 className="h-5 w-5 text-blue-400" /> {f}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="pt-4">
                                        <Button asChild size="lg" className="bg-[#0b1e3d] text-white hover:bg-[#1a355e] h-12 px-8 font-bold">
                                            <Link to="/admissions">
                                                ADMISSION INQUIRY <ArrowRight className="ml-2 h-5 w-5" />
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                                <div className="lg:w-1/2 w-full">
                                    <div className="aspect-[16/9] bg-slate-200 rounded-3xl overflow-hidden shadow-2xl">
                                        <img
                                            src={`https://images.unsplash.com/photo-15${500000000 + i * 1000000}?auto=format&fit=crop&q=80&w=1200`}
                                            alt={p.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Assessment Section */}
            <section className="py-24 bg-white border-t border-slate-100">
                <div className="container mx-auto px-4 text-center space-y-12">
                    <h2 className="text-3xl font-bold text-[#0b1e3d]">Assessment & Continuous Learning</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                        {[
                            { title: 'Internal Assessment', desc: 'Regular tests, assignments, and presentations to monitor student progress.' },
                            { title: 'Project Work', desc: 'Hands-on practical projects to apply theoretical knowledge to real-world scenarios.' },
                            { title: 'Seminars & Workshops', desc: 'Active participation in seminars and workshops to enhance expertise and public speaking.' }
                        ].map((item, i) => (
                            <div key={i} className="p-8 bg-slate-50 rounded-2xl border border-slate-100 space-y-4">
                                <h4 className="font-bold text-lg text-[#0b1e3d] uppercase tracking-wide">{item.title}</h4>
                                <p className="text-slate-600 leading-relaxed text-sm">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Academics;
