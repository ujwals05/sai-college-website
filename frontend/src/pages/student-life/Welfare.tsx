import { HeartPulse, Users, ShieldCheck, GraduationCap } from 'lucide-react';

const Welfare = () => {
    return (
        <div className="space-y-12 animate-in fade-in duration-700">
            <div className="space-y-4">
                <p className="text-blue-600 font-black text-xs tracking-[0.3em] uppercase">Student Services</p>
                <h1 className="text-4xl lg:text-6xl font-black text-[#101828]">Student Welfare</h1>
                <p className="text-gray-500 text-lg max-w-3xl leading-relaxed">
                    We prioritize the safety, mental health, and professional growth of our students. Sai College for Women provides a nurturing environment where every student can thrive.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                    {
                        title: 'Health & Wellness',
                        desc: 'Access to on-campus medical checkups and dedicated mental health counselling services.',
                        icon: HeartPulse,
                    },
                    {
                        title: 'Scholarships',
                        desc: 'Financial assistance for meritorious students and those from economically weaker sections.',
                        icon: Users,
                    },
                    {
                        title: 'Safety First',
                        desc: 'A secure, CCTV-monitored campus with a dedicated 24/7 security team.',
                        icon: ShieldCheck,
                    },
                    {
                        title: 'Career Growth',
                        desc: 'Training programs designed to enhance employability and professional etiquette.',
                        icon: GraduationCap,
                    }
                ].map((s, i) => (
                    <div key={i} className="p-8 bg-white rounded-3xl border border-gray-100 hover:border-blue-200 transition-all hover:shadow-2xl">
                        <div className="h-14 w-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                            <s.icon className="h-7 w-7" />
                        </div>
                        <h3 className="text-2xl font-black text-[#101828] mb-3">{s.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            {s.desc}
                        </p>
                    </div>
                ))}
            </div>

            <div className="bg-[#101828] rounded-[2.5rem] p-10 lg:p-16 text-white overflow-hidden relative">
                <div className="relative z-10 max-w-2xl space-y-6">
                    <h2 className="text-3xl lg:text-4xl font-black">Committed to You</h2>
                    <p className="text-gray-400 leading-relaxed">
                        Our student welfare committee works tirelessly to ensure that your time at Sai College is safe, productive, and memorable.
                    </p>
                    <div className="pt-4 flex gap-4">
                        <button className="bg-[#EAB308] text-[#101828] font-black px-8 py-4 rounded-xl hover:bg-white transition-colors">
                            VIEW HANDBOOK
                        </button>
                    </div>
                </div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            </div>
        </div>
    );
};

export default Welfare;
