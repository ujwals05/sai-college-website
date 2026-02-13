import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, FileText, CreditCard, ClipboardList } from 'lucide-react';

const Admissions = () => {
    return (
        <div className="flex flex-col">
            {/* Header Section */}
            <section className="bg-[#0b1e3d] text-white py-20 px-4">
                <div className="container mx-auto text-center space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold">Admissions Overview</h1>
                    <p className="text-xl text-blue-200 max-w-2xl mx-auto">
                        Where Ambition Meets Opportunity. Join a community of achievers and shape your future with Sai College for Women.
                    </p>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-3xl font-bold text-[#0b1e3d]">Admission Process</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Follow these simple steps to secure your admission at Sai College for Women.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { step: '01', title: 'Inquiry', desc: 'Reach out to us via website, phone, or visit our campus for initial guidance.', icon: FileText },
                            { step: '02', title: 'Application', desc: 'Fill out the application form with required academic documents and details.', icon: ClipboardList },
                            { step: '03', title: 'Criteria Check', desc: 'Our team will verify eligibility based on your academic performance.', icon: CheckCircle2 },
                            { step: '04', title: 'Confirmation', desc: 'Pay the admission fee to confirm your seat and receive your welcome kit.', icon: CreditCard },
                        ].map((s) => (
                            <div key={s.step} className="relative p-8 bg-slate-50 rounded-2xl border border-slate-100 space-y-4 text-center">
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white font-bold px-3 py-1 rounded-full text-xs">
                                    STEP {s.step}
                                </div>
                                <div className="h-12 w-12 bg-white text-blue-600 rounded-xl flex items-center justify-center mx-auto shadow-sm">
                                    <s.icon className="h-6 w-6" />
                                </div>
                                <h3 className="font-bold text-lg text-[#0b1e3d]">{s.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Eligibility & Fees */}
            <section className="py-24 bg-blue-50">
                <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Eligibility */}
                    <div className="bg-white p-10 rounded-3xl shadow-sm space-y-8">
                        <h3 className="text-2xl font-bold text-[#0b1e3d]">Eligibility Criteria</h3>
                        <div className="space-y-6">
                            {[
                                {
                                    prog: 'Pre-University (PUC)',
                                    req: 'Completion of 10th standard (SSLC/ICSE/CBSE) with a minimum aggregate of 50%.'
                                },
                                {
                                    prog: 'Bachelors (BCA/B.Com)',
                                    req: 'Completion of 12th standard (PUC/HSC) in relevant stream with a minimum of 60% aggregate.'
                                }
                            ].map((item) => (
                                <div key={item.prog} className="space-y-2 border-l-4 border-blue-200 pl-4">
                                    <div className="font-bold text-blue-600 uppercase text-xs tracking-widest">{item.prog}</div>
                                    <p className="text-slate-600">{item.req}</p>
                                </div>
                            ))}
                        </div>
                        <div className="bg-blue-50 p-6 rounded-2xl flex gap-4 items-start">
                            <CheckCircle2 className="h-6 w-6 text-blue-600 shrink-0" />
                            <p className="text-sm text-blue-900 leading-relaxed">
                                <strong>Note:</strong> Admissions are primarily based on merit. Exceptional candidates with talents in sports or arts may receive special consideration.
                            </p>
                        </div>
                    </div>

                    {/* Fee Structure */}
                    <div className="bg-white p-10 rounded-3xl shadow-sm space-y-8">
                        <h3 className="text-2xl font-bold text-[#0b1e3d]">Fee Structure (Approx.)</h3>
                        <div className="overflow-hidden rounded-2xl border border-slate-100">
                            <table className="w-full text-left bg-white">
                                <thead className="bg-slate-50">
                                    <tr>
                                        <th className="px-6 py-4 text-sm font-bold text-[#0b1e3d]">Program</th>
                                        <th className="px-6 py-4 text-sm font-bold text-[#0b1e3d]">Annual Fee</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    <tr>
                                        <td className="px-6 py-4 text-slate-600">PUC (Arts/Commerce)</td>
                                        <td className="px-6 py-4 font-bold text-[#0b1e3d]">₹ 45,000</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-slate-600">PUC (Science)</td>
                                        <td className="px-6 py-4 font-bold text-[#0b1e3d]">₹ 55,000</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-slate-600">B.Com / Management</td>
                                        <td className="px-6 py-4 font-bold text-[#0b1e3d]">₹ 75,000</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-slate-600">BCA (Computer App)</td>
                                        <td className="px-6 py-4 font-bold text-[#0b1e3d]">₹ 95,000</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-xs text-slate-400 italic font-medium">
                            * Fees are subject to change based on university guidelines and college policy. Please verify at the office.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-[#0b1e3d]">
                <div className="container mx-auto px-4 text-center space-y-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-white max-w-2xl mx-auto leading-tight">
                        Ready to Begin Your Journey at Sai College?
                    </h2>
                    <div className="flex justify-center gap-4">
                        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white h-14 px-8 font-bold">
                            DOWNLOAD BROCHURE <FileText className="ml-2 h-5 w-5" />
                        </Button>
                        <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#0b1e3d] h-14 px-8 font-bold">
                            APPLY ONLINE <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Admissions;
