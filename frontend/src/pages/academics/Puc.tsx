import { CheckCircle2, FlaskConical, Calculator, Landmark, BookOpenText } from 'lucide-react';

const Puc = () => {
    const streams = [
        {
            title: 'Science',
            combinations: ['PCMB (Physics, Chemistry, Mathematics, Biology)', 'PCMC (Physics, Chemistry, Mathematics, Computer Science)'],
            icon: FlaskConical,
            desc: 'For students aspiring for careers in Medicine, Engineering, and Information Technology.'
        },
        {
            title: 'Commerce',
            combinations: ['CEBA (Computer Science, Economics, Business Studies, Accountancy)'],
            icon: Landmark,
            desc: 'Focused on financial literacy, business management, and professional accounting.'
        },
        {
            title: 'Arts',
            combinations: ['HEPS (History, Economics, Political Science, Sociology)'],
            icon: BookOpenText,
            desc: 'Exploring human society, culture, and social dynamics for humanities excellence.'
        }
    ];

    return (
        <div className="space-y-12 animate-in fade-in duration-700">
            <div className="space-y-4">
                <p className="text-blue-600 font-black text-xs tracking-[0.3em] uppercase">2-Year Pre-University Course</p>
                <h1 className="text-4xl lg:text-6xl font-black text-[#101828]">PUC Programs</h1>
                <p className="text-gray-500 text-lg leading-relaxed max-w-3xl">
                    Our Pre-University program is the primary bridge between school and university. We provide specialized coaching to ensure students excel in board and competitive exams.
                </p>
            </div>

            <div className="space-y-8">
                {streams.map((stream) => (
                    <div key={stream.title} className="p-8 lg:p-12 bg-white border border-gray-100 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all">
                        <div className="flex flex-col lg:flex-row gap-10 items-start">
                            <div className="h-16 w-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0">
                                <stream.icon className="h-8 w-8" />
                            </div>
                            <div className="space-y-6 flex-1">
                                <div>
                                    <h3 className="text-3xl font-black text-[#101828] mb-2">{stream.title} Stream</h3>
                                    <p className="text-gray-500 leading-relaxed">{stream.desc}</p>
                                </div>
                                <div className="space-y-4">
                                    <p className="text-xs font-black text-blue-600 uppercase tracking-widest">Available Combinations</p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {stream.combinations.map((comb) => (
                                            <div key={comb} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100 italic text-sm font-bold text-gray-700">
                                                <Calculator className="h-4 w-4 text-blue-400" />
                                                {comb}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
                {[
                    { title: 'State Board Prep', desc: 'Intensive coaching for Karnataka State PUC Board.' },
                    { title: 'CET / JEE Coaching', desc: 'Special sessions for engineering and professional entrance.' },
                    { title: 'Career Guidance', desc: 'Dedicated workshops to help choose the right degree path.' }
                ].map((item) => (
                    <div key={item.title} className="p-6 bg-blue-50 rounded-2xl border border-blue-100 space-y-3">
                        <CheckCircle2 className="h-6 w-6 text-green-500" />
                        <h4 className="font-black text-[#101828] uppercase text-xs tracking-widest">{item.title}</h4>
                        <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Puc;
