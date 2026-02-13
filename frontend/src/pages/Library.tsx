import { Search, Book, Monitor, Globe, Clock, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Library = () => {
    return (
        <div className="flex flex-col">
            {/* Header */}
            <section className="bg-[#101828] text-white py-24 px-4 overflow-hidden relative">
                <div className="container mx-auto text-center space-y-6 relative z-10">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight">Library & Information Centre</h1>
                    <p className="text-xl text-[#EAB308] max-w-2xl mx-auto font-bold uppercase tracking-widest text-sm">
                        Your gateway to a world of knowledge. Explore our extensive collection of physical books and digital repositories.
                    </p>
                </div>
            </section>

            {/* Stats & Search */}
            <section className="py-12 bg-blue-50">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex gap-12">
                        <div>
                            <div className="text-3xl font-black text-[#101828]">25,000+</div>
                            <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Volumes</div>
                        </div>
                        <div>
                            <div className="text-3xl font-black text-[#101828]">100+</div>
                            <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Journals</div>
                        </div>
                        <div>
                            <div className="text-3xl font-black text-[#101828]">5,000+</div>
                            <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">E-Books</div>
                        </div>
                    </div>
                    <div className="relative w-full max-w-md">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search library catalog..."
                            className="w-full h-14 pl-12 pr-4 rounded-2xl border border-gray-100 shadow-sm focus:ring-2 focus:ring-[#EAB308] transition-all"
                        />
                    </div>
                </div>
            </section>

            {/* Facilities */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {[
                            { title: 'Digital Repository', desc: 'Access to international research databases like IEEE, JSTOR, and N-LIST.', icon: Globe },
                            { title: 'Reference Section', desc: 'Quiet zones with a vast collection of encyclopedias, dictionaries, and rare manuscripts.', icon: Book },
                            { title: 'E-Learning Zone', desc: 'High-end computer systems for browsing, research, and technical project work.', icon: Monitor },
                            { title: 'Current Affairs', desc: 'Dedicated space for latest newspapers, monthly magazines, and competitive exam guides.', icon: Clock },
                            { title: 'Borrowing Services', desc: 'Seamless automated system for issuing and returning books with student IDs.', icon: ShieldCheck },
                            { title: 'Reading Halls', desc: 'Spacious, well-lit reading halls designed for deep focus and group study sessions.', icon: Library }
                        ].map((item, i) => (
                            <div key={i} className="p-10 rounded-3xl border border-slate-100 bg-white space-y-6 hover:border-[#EAB308] hover:shadow-xl transition-all group">
                                <div className="h-14 w-14 bg-yellow-50 text-[#EAB308] rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-[#101828] group-hover:text-white transition-all">
                                    <item.icon className="h-7 w-7" />
                                </div>
                                <h3 className="text-2xl font-black text-[#101828]">{item.title}</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Rules */}
            <section className="py-24 bg-blue-50">
                <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2 w-full">
                        <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=1000"
                                alt="Library Interior"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="lg:w-1/2 space-y-8">
                        <h2 className="text-3xl lg:text-5xl font-black text-[#101828]">Library Rules & Ethics</h2>
                        <div className="space-y-4">
                            {[
                                'Maintain absolute silence inside the library premises.',
                                'Student ID card is mandatory for entry and borrowing.',
                                'Handle books and equipment with utmost care.',
                                'Bags and personal belongings must be kept in the property counter.',
                                'Food and beverages are strictly prohibited.'
                            ].map((rule, i) => (
                                <div key={i} className="flex gap-4 items-start">
                                    <div className="h-6 w-6 rounded-full bg-[#101828] text-[#EAB308] flex items-center justify-center text-[10px] font-black shrink-0 mt-1">
                                        {i + 1}
                                    </div>
                                    <p className="text-slate-700 font-medium">{rule}</p>
                                </div>
                            ))}
                        </div>
                        <div className="pt-4">
                            <Button className="h-14 px-10 bg-[#101828] hover:bg-[#EAB308] text-white hover:text-[#101828] font-black rounded-xl shadow-xl transition-all active:scale-95">
                                DOWNLOAD LIBRARY HANDBOOK
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Library;
