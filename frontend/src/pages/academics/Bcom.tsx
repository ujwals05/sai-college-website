import { Landmark, PieChart, Users2, ShieldCheck, TrendingUp, Handshake, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Bcom = () => {
    return (
        <div className="space-y-12 animate-in fade-in duration-700">
            <div className="space-y-3">
                <p className="text-blue-600 font-black text-xs tracking-[0.3em] uppercase">Bachelor of Commerce (General/Professional)</p>
                <h1 className="text-4xl lg:text-6xl font-black text-[#101828]">B.Com Program</h1>
                <p className="text-gray-500 text-lg leading-relaxed max-w-3xl">
                    Our B.Com program provides a comprehensive foundation in accounting, finance, and business law, equipping students for a successful career in the corporate world.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                    {
                        title: 'Finance & Accounts',
                        icon: Landmark,
                        desc: 'Mastering the principles of financial accounting, corporate finance, and auditing.',
                        bgColor: 'bg-emerald-50',
                        iconColor: 'text-emerald-600'
                    },
                    {
                        title: 'Business Law',
                        icon: ShieldCheck,
                        desc: 'Understanding the legal framework governing commercial transactions and corporations.',
                        bgColor: 'bg-blue-50',
                        iconColor: 'text-blue-600'
                    },
                    {
                        title: 'Marketing & HR',
                        icon: Users2,
                        desc: 'Exploring consumer behavior, branding, and human resource management strategies.',
                        bgColor: 'bg-purple-50',
                        iconColor: 'text-purple-600'
                    },
                    {
                        title: 'Business Economics',
                        icon: PieChart,
                        desc: 'Analytical study of economic theories and their application in business decision-making.',
                        bgColor: 'bg-amber-50',
                        iconColor: 'text-amber-600'
                    }
                ].map((feat) => (
                    <div key={feat.title} className={`p-10 rounded-[2.5rem] border border-gray-100 transition-all hover:shadow-xl hover:-translate-y-1 ${feat.bgColor}`}>
                        <div className="h-14 w-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                            <feat.icon className={`h-7 w-7 ${feat.iconColor}`} />
                        </div>
                        <h3 className="text-2xl font-black text-[#101828] mb-3">{feat.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{feat.desc}</p>
                    </div>
                ))}
            </div>

            <div className="bg-white border border-gray-100 rounded-[2.5rem] p-10 lg:p-16 space-y-10">
                <div className="flex flex-col lg:flex-row gap-8 items-center text-center lg:text-left">
                    <div className="flex-1 space-y-4">
                        <TrendingUp className="h-10 w-10 text-blue-600 mx-auto lg:mx-0" />
                        <h3 className="text-3xl font-black text-[#101828]">Professional Training</h3>
                        <p className="text-gray-500 leading-relaxed">
                            We offer specialized training in Tally Prime, SAP, and advanced Excel to ensure our students are technically proficient and day-one ready for job roles.
                        </p>
                    </div>
                    <div className="w-1 bg-gray-100 h-24 hidden lg:block" />
                    <div className="flex-1 space-y-4">
                        <Handshake className="h-10 w-10 text-blue-600 mx-auto lg:mx-0" />
                        <h3 className="text-3xl font-black text-[#101828]">Placement Cell</h3>
                        <p className="text-gray-500 leading-relaxed">
                            Dedicated support for campus interviews, internship opportunities, and soft-skill development sessions.
                        </p>
                    </div>
                </div>
            </div>
            {/* Admissions Quick Links */}
            <div className="bg-[#101828] text-white rounded-[2.5rem] p-10 lg:p-16 space-y-8 relative overflow-hidden">
                <div className="relative z-10 text-center lg:text-left space-y-6">
                    <h3 className="text-3xl font-black">Begin Your Career in Commerce</h3>
                    <p className="text-gray-400 max-w-xl">
                        Interested in our B.Com programs? Find all the admission details you need to get started.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                        {[
                            { label: 'Admission Process', to: '/admissions#process' },
                            { label: 'Fee Structure', to: '/admissions#fees' },
                            { label: 'Eligibility', to: '/admissions#eligibility' },
                            { label: 'Apply Now', to: '/admissions#apply', primary: true },
                        ].map((link) => (
                            <Link
                                key={link.label}
                                to={link.to}
                                className={`px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2 transition-all ${link.primary
                                    ? "bg-[#EAB308] text-[#101828] hover:bg-white"
                                    : "bg-white/10 hover:bg-white/20"
                                    }`}
                            >
                                {link.label} <ArrowRight className="h-4 w-4" />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bcom;
