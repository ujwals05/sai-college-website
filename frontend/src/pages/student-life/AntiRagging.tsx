import { ShieldAlert, Scale, Users, PhoneCall } from 'lucide-react';

const AntiRagging = () => {
    return (
        <div className="space-y-12 animate-in fade-in duration-700">
            <div className="space-y-4">
                <p className="text-red-600 font-black text-xs tracking-[0.3em] uppercase">Zero Tolerance Policy</p>
                <h1 className="text-4xl lg:text-6xl font-black text-[#101828]">Anti-Ragging</h1>
                <p className="text-gray-500 text-lg max-w-3xl leading-relaxed">
                    Sai College for Women maintains a ragging-free campus. We strictly follow the UGC regulations on curbing the menace of ragging in higher educational institutions.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-8">
                <div className="p-10 bg-red-50 rounded-[2.5rem] border border-red-100 flex flex-col lg:flex-row gap-8 items-center text-[#101828]">
                    <div className="h-20 w-20 bg-red-600 text-white rounded-3xl flex items-center justify-center shrink-0 shadow-xl shadow-red-200">
                        <ShieldAlert className="h-10 w-10" />
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-3xl font-black">What is Ragging?</h2>
                        <p className="text-gray-600 font-medium leading-relaxed">
                            Any conduct by any student or students whether by words spoken or written or by an act which has the effect of teasing, treating or handling with rudeness a fresher or any other student.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-8 bg-white rounded-3xl border border-gray-100 space-y-6">
                        <div className="h-14 w-14 bg-gray-50 text-[#101828] rounded-2xl flex items-center justify-center">
                            <Scale className="h-7 w-7" />
                        </div>
                        <h3 className="text-2xl font-black text-[#101828]">Legal Consequences</h3>
                        <ul className="space-y-3 text-gray-500 text-sm font-medium">
                            <li className="flex items-start gap-2">
                                <div className="h-1.5 w-1.5 bg-red-600 rounded-full mt-1.5 shrink-0" />
                                Suspension from attending classes
                            </li>
                            <li className="flex items-start gap-2">
                                <div className="h-1.5 w-1.5 bg-red-600 rounded-full mt-1.5 shrink-0" />
                                Debarring from representing the institution
                            </li>
                            <li className="flex items-start gap-2">
                                <div className="h-1.5 w-1.5 bg-red-600 rounded-full mt-1.5 shrink-0" />
                                Cancellation of admission
                            </li>
                        </ul>
                    </div>

                    <div className="p-8 bg-white rounded-3xl border border-gray-100 space-y-6">
                        <div className="h-14 w-14 bg-gray-50 text-[#101828] rounded-2xl flex items-center justify-center">
                            <Users className="h-7 w-7" />
                        </div>
                        <h3 className="text-2xl font-black text-[#101828]">Anti-Ragging Squad</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Our dedicated squad conducts surprise raids at various locations across the campus to ensure total compliance and student safety.
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-[#101828] text-white p-12 lg:p-16 rounded-[3rem] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="space-y-4 text-center md:text-left">
                        <h2 className="text-3xl lg:text-4xl font-black">Emergency Contact</h2>
                        <p className="text-gray-400 font-medium">Report any incident immediately. Your identity will remain confidential.</p>
                    </div>
                    <a href="tel:18001805522" className="flex items-center gap-4 bg-red-600 px-8 py-5 rounded-2xl font-black text-xl hover:bg-white hover:text-red-600 transition-all shadow-xl shadow-red-900/20 active:scale-95">
                        <PhoneCall className="h-6 w-6" />
                        1800-180-5522
                    </a>
                </div>
            </div>
        </div>
    );
};

export default AntiRagging;
