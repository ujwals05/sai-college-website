import { Trophy } from 'lucide-react';

const Sports = () => {
    return (
        <div className="space-y-12">
            <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-black text-[#101828] leading-tight">Sports & Athletics</h1>
                <p className="text-lg text-gray-500 max-w-2xl font-medium">
                    At SCW, we believe physical excellence goes hand-in-hand with academic success. Our sports programs are designed to build teamwork, discipline, and resilience.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="aspect-[16/9] rounded-3xl overflow-hidden shadow-xl">
                    <img
                        src="https://images.unsplash.com/photo-1542652694-40abf526446e?auto=format&fit=crop&q=80&w=1000"
                        alt="Sports"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="space-y-6">
                    <h2 className="text-2xl font-black text-[#101828]">Available Disciplines</h2>
                    <div className="grid grid-cols-1 gap-4">
                        {['Basketball & Volleyball', 'Table Tennis & Badminton', 'Athletics & Track Events', 'Yoga & Meditation'].map((sport, i) => (
                            <div key={i} className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100 italic transition-all hover:bg-white hover:shadow-lg">
                                <Trophy className="h-5 w-5 text-[#EAB308]" />
                                <span className="font-bold text-[#101828]">{sport}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <section className="bg-[#101828] text-white p-12 lg:p-16 rounded-[3rem] space-y-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <h3 className="text-3xl font-black relative z-10">Annual Sports Meet</h3>
                <p className="text-gray-400 font-medium max-w-2xl relative z-10">
                    The showcase event of our athletic calendar, where students compete in various categories to demonstrate their prowess and sportsmanship.
                </p>
                <div className="flex flex-wrap gap-8 pt-4 relative z-10">
                    <div className="space-y-1">
                        <div className="text-2xl font-black text-[#EAB308]">20+</div>
                        <div className="text-xs uppercase tracking-widest font-bold opacity-60">Events</div>
                    </div>
                    <div className="space-y-1">
                        <div className="text-2xl font-black text-[#EAB308]">500+</div>
                        <div className="text-xs uppercase tracking-widest font-bold opacity-60">Participants</div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Sports;
