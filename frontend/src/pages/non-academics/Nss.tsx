import { Heart, Users, Globe, CheckCircle2 } from 'lucide-react';

const Nss = () => {
    return (
        <div className="space-y-12">
            <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-black text-[#101828] leading-tight">National Service Scheme (NSS)</h1>
                <p className="text-lg text-gray-500 max-w-2xl font-medium">
                    "Not Me, But You." NSS at Sai College is dedicated to social service, community engagement, and character building among our students.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-black text-[#101828]">Our Commitment</h2>
                        <p className="text-gray-600 leading-relaxed font-bold">
                            The NSS unit of SCW actively participates in various social service activities, aiming to develop a sense of social responsibility and civic sense among students.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        {[
                            { title: 'Blood Donation Camps', desc: 'Regular drives to support local hospitals and blood banks.', icon: Heart },
                            { title: 'Rural Development', desc: 'Village adoption programs for educational and health awareness.', icon: Globe },
                            { title: 'Swachh Bharat', desc: 'Active participation in cleanliness drives and environmental protection.', icon: CheckCircle2 }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-6 group p-6 rounded-3xl border border-gray-100 hover:border-[#EAB308] hover:shadow-xl transition-all bg-white">
                                <div className="h-12 w-12 bg-yellow-50 text-[#EAB308] rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-[#101828] group-hover:text-white transition-all">
                                    <item.icon className="h-6 w-6" />
                                </div>
                                <div className="space-y-1">
                                    <h4 className="font-black text-[#101828]">{item.title}</h4>
                                    <p className="text-sm text-gray-500 font-bold italic">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative group">
                    <div className="absolute inset-0 bg-red-600 rounded-[3rem] rotate-3 opacity-10 group-hover:rotate-0 transition-transform duration-500" />
                    <img
                        src="https://images.unsplash.com/photo-1559027615-cd837c920b7b?auto=format&fit=crop&q=80&w=1000"
                        alt="NSS Activities"
                        className="relative z-10 w-full h-full object-cover rounded-[3rem] shadow-2xl border border-gray-100"
                    />
                </div>
            </div>

            <section className="bg-blue-50 p-12 lg:p-16 rounded-[4rem] text-center space-y-8">
                <Users className="h-12 w-12 text-[#101828] mx-auto" />
                <h3 className="text-3xl font-black text-[#101828]">Join the Movement</h3>
                <p className="text-gray-600 font-medium max-w-2xl mx-auto italic">
                    NSS offers a unique opportunity to contribute to society while developing leadership skills and understanding the ground realities of our community.
                </p>
            </section>
        </div>
    );
};

export default Nss;
