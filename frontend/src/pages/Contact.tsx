import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';

const Contact = () => {
    return (
        <div className="flex flex-col">
            {/* Header Section */}
            <section className="bg-[#0b1e3d] text-white py-20 px-4">
                <div className="container mx-auto text-center space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
                    <p className="text-xl text-blue-200 max-w-2xl mx-auto">
                        Have questions? We're here to help. Reach out to us for admissions, academic inquiries, or general information.
                    </p>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Contact Information */}
                        <div className="space-y-12">
                            <div className="space-y-6">
                                <h2 className="text-3xl font-bold text-[#0b1e3d]">Get in Touch</h2>
                                <p className="text-slate-600 text-lg leading-relaxed">
                                    Our dedicated staff is ready to assist you with any information you may need. Visit us or reach out via phone or email.
                                </p>
                            </div>

                            <div className="grid gap-8">
                                <div className="flex gap-6">
                                    <div className="h-14 w-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0">
                                        <MapPin className="h-6 w-6" />
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="font-bold text-lg text-[#0b1e3d]">Our Campus</h4>
                                        <p className="text-slate-600 leading-relaxed">
                                            12, Hennur Main Road, Near Bio-zeen,<br />
                                            Bangalore - 560077, Karnataka, India
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-6">
                                    <div className="h-14 w-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0">
                                        <Phone className="h-6 w-6" />
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="font-bold text-lg text-[#0b1e3d]">Phone & Mobile</h4>
                                        <p className="text-slate-600 leading-relaxed">
                                            Admissions: +91 98765 43210<br />
                                            Office: 080 - 1234 5678
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-6">
                                    <div className="h-14 w-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0">
                                        <Mail className="h-6 w-6" />
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="font-bold text-lg text-[#0b1e3d]">Email Address</h4>
                                        <p className="text-slate-600 leading-relaxed">
                                            info@saicollege.edu.in<br />
                                            admissions@saicollege.edu.in
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-6">
                                    <div className="h-14 w-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0">
                                        <Clock className="h-6 w-6" />
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="font-bold text-lg text-[#0b1e3d]">Office Hours</h4>
                                        <p className="text-slate-600 leading-relaxed">
                                            Monday - Friday: 9:00 AM - 5:00 PM<br />
                                            Saturday: 9:00 AM - 1:00 PM
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Inquiry Form */}
                        <div className="bg-slate-50 p-10 rounded-3xl border border-slate-200 space-y-8">
                            <div className="space-y-2">
                                <h3 className="text-2xl font-bold text-[#0b1e3d]">Send an Inquiry</h3>
                                <p className="text-slate-500">Fill out the form below and we'll get back to you shortly.</p>
                            </div>

                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-700">Full Name</label>
                                        <input
                                            type="text"
                                            placeholder="Jane Doe"
                                            className="w-full h-12 px-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-700">Email Address</label>
                                        <input
                                            type="email"
                                            placeholder="jane@example.com"
                                            className="w-full h-12 px-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-700">Subject</label>
                                    <select className="w-full h-12 px-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white">
                                        <option>General Inquiry</option>
                                        <option>Admission Inquiry</option>
                                        <option>Academics</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-700">Message</label>
                                    <textarea
                                        rows={4}
                                        placeholder="How can we help you?"
                                        className="w-full p-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                                    />
                                </div>

                                <Button className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg rounded-xl shadow-lg shadow-blue-200">
                                    SEND MESSAGE <Send className="ml-2 h-5 w-5" />
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="h-[450px] w-full bg-slate-200 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-slate-400 flex-col gap-4">
                    <MapPin className="h-12 w-12" />
                    <p className="font-semibold text-lg uppercase tracking-widest">Google Maps Integration Placeholder</p>
                    <p className="text-sm max-w-md text-center px-4">In a production environment, this would feature an interactive map showing the college's exact location.</p>
                </div>
                {/* Placeholder image that looks like a map */}
                <img
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=2000"
                    alt="Map Location"
                    className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale"
                />
            </section>
        </div>
    );
};

export default Contact;
