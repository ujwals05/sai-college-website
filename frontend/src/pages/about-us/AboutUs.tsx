import { Target, Eye } from 'lucide-react';

const AboutUs = () => {
    return (
        <div className="flex flex-col">
            {/* Header Section */}
            <section className="bg-[#0b1e3d] text-white py-20 px-4">
                <div className="container mx-auto text-center space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold">About Sai College for Women</h1>
                    <p className="text-xl text-blue-200 max-w-2xl mx-auto">
                        Empowering Women, Envisioning Future through excellence in education and leadership.
                    </p>
                </div>
            </section>

            {/* Legacy Section */}
            <section id="legacy" className="py-24 bg-white">
                <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/2 space-y-6">
                        <h2 className="text-3xl font-bold text-[#0b1e3d]">Legacy of Quality Education</h2>
                        <p className="text-slate-600 leading-relaxed text-lg">
                            Sai College for Women has been a cornerstone of academic excellence in Bangalore. We believe in holistic development, combining rigorous curriculum with practical exposure to empower women as global leaders of tomorrow.
                        </p>
                        <p className="text-slate-600 leading-relaxed text-lg">
                            Our institution is dedicated to creating an environment where intellectual curiosity meets social responsibility, ensuring our students are prepared for the complexities of the modern world.
                        </p>
                        <div className="flex items-center gap-4 pt-4">
                            <div className="text-4xl font-bold text-blue-600">20+</div>
                            <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                                Years of Academic<br />Excellence
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2">
                        <div className="aspect-video bg-blue-100 rounded-2xl flex items-center justify-center relative overflow-hidden">
                            {/* Placeholder for college building image */}
                            <img
                                src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=1000"
                                alt="College Campus"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-blue-900/10" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section id="vision-mission" className="py-24 bg-blue-50">
                <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="p-10 bg-white rounded-3xl shadow-sm space-y-6">
                        <div className="h-14 w-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center">
                            <Eye className="h-8 w-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-[#0b1e3d]">Our Vision</h3>
                        <p className="text-slate-600 leading-relaxed text-lg">
                            To be a premier institution of higher education for women, fostering excellence in academics, character building, and social empowerment to create leaders who shape a better world.
                        </p>
                    </div>
                    <div className="p-10 bg-white rounded-3xl shadow-sm space-y-6">
                        <div className="h-14 w-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center">
                            <Target className="h-8 w-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-[#0b1e3d]">Our Mission</h3>
                        <p className="text-slate-600 leading-relaxed text-lg">
                            To provide quality education through innovative teaching-learning processes, and to nurture talent by providing a supportive environment for personal and professional growth.
                        </p>
                    </div>
                </div>
            </section>

            {/* Principal's Message */}
            <section id="principal-message" className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="w-48 h-48 rounded-full overflow-hidden bg-slate-200 shrink-0 border-4 border-blue-50">
                            <img
                                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400"
                                alt="Principal"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="space-y-6">
                            <div className="text-blue-600 font-bold uppercase tracking-widest text-sm">Principal's Address</div>
                            <blockquote className="text-2xl font-medium text-[#0b1e3d] leading-relaxed italic">
                                "Our mission is to foster an environment where intellectual curiosity meets social responsibility, ensuring our students are prepared for the complexities of the modern world."
                            </blockquote>
                            <div>
                                <div className="font-bold text-lg">Dr. Samuel Joseph</div>
                                <div className="text-slate-500">Principal, Sai College for Women</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
