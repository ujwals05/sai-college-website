import { BarChart3, Binary, BrainCircuit, Globe, LineChart, SearchCode, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const BcomDataAnalytics = () => {
    return (
        <div className="space-y-12 animate-in fade-in duration-700">
            <div className="space-y-3">
                <p className="text-blue-600 font-black text-xs tracking-[0.3em] uppercase">Specialized B.Com Program</p>
                <h1 className="text-4xl lg:text-6xl font-black text-[#101828]">B.Com Data Analytics</h1>
                <p className="text-gray-500 text-lg leading-relaxed max-w-3xl">
                    Information is the new currency. This program combines traditional commerce with data science techniques, training students to analyze business data for strategic insights.
                </p>
            </div>

            <div className="bg-[#101828] text-white rounded-[2.5rem] p-10 lg:p-16 relative overflow-hidden">
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-black text-[#EAB308]">Why Data Analytics with Commerce?</h2>
                        <p className="text-gray-400 leading-relaxed">
                            The modern corporate world demands professionals who can not only manage accounts but also interpret consumer behavior patterns and market trends through data.
                        </p>
                        <ul className="space-y-4">
                            {[
                                { text: 'Predictive Business Modeling', icon: BrainCircuit },
                                { text: 'Big Data Management in Finance', icon: Binary },
                                { text: 'Advanced Statistical Visualization', icon: LineChart }
                            ].map((item) => (
                                <li key={item.text} className="flex items-center gap-4 text-sm font-bold">
                                    <div className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center text-[#EAB308]">
                                        <item.icon className="h-5 w-5" />
                                    </div>
                                    {item.text}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="hidden lg:block">
                        <div className="aspect-square bg-blue-600/20 rounded-[3rem] border border-blue-600/30 flex items-center justify-center p-12">
                            <BarChart3 className="h-full w-full text-blue-400 opacity-40 animate-pulse" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { title: 'Python for Finance', desc: 'Learn to automate financial analysis using industry-standard libraries.', icon: SearchCode },
                    { title: 'Data Visualization', desc: 'Master tools like Power BI and Tableau for business reporting.', icon: LineChart },
                    { title: 'Market Analytics', desc: 'Study global trade patterns and predictive logistics indices.', icon: Globe }
                ].map((card) => (
                    <div key={card.title} className="p-8 bg-white border border-gray-100 rounded-[2rem] space-y-4 hover:border-blue-200 transition-all shadow-sm">
                        <div className="h-12 w-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-2">
                            <card.icon className="h-6 w-6" />
                        </div>
                        <h4 className="font-black text-[#101828] text-lg leading-tight">{card.title}</h4>
                        <p className="text-gray-500 text-sm leading-relaxed">{card.desc}</p>
                    </div>
                ))}
            </div>

            <div className="p-10 bg-amber-50 rounded-[2rem] border border-amber-100 italic font-bold text-amber-900 text-center">
                "Turning data into decisions and accounts into analytics."
            </div>
            {/* Admissions Quick Links */}
            <div className="bg-[#101828] text-white rounded-[2.5rem] p-10 lg:p-16 space-y-8 relative overflow-hidden">
                <div className="relative z-10 text-center lg:text-left space-y-6">
                    <h3 className="text-3xl font-black">Master the Future of Data</h3>
                    <p className="text-gray-400 max-w-xl">
                        Launch your career in analytical commerce. Explore admission guidelines and secure your place today.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                        {[
                            { label: 'Check Eligibility', to: '/admissions#eligibility' },
                            { label: 'Data Analytics Fees', to: '/admissions#fees' },
                            { label: 'Admission Path', to: '/admissions#process' },
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

export default BcomDataAnalytics;
