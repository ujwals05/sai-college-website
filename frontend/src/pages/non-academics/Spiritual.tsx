import { Heart, Wind } from 'lucide-react';

const Spiritual = () => {
    return (
        <div className="space-y-12">
            <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-black text-[#101828] leading-tight">Spiritual & Mindfulness</h1>
                <p className="text-lg text-gray-500 max-w-2xl font-medium">
                    Nurturing the soul and the mind. Our spiritual programs provide a serene space for reflection, ethical growth, and mental well-being.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 items-center bg-gray-50 rounded-[3rem] p-10 lg:p-16 border border-gray-100">
                <div className="w-full lg:w-1/2 space-y-8">
                    <div className="space-y-6">
                        <div className="flex items-center gap-4 text-blue-600">
                            <Wind className="h-8 w-8" />
                            <h3 className="text-3xl font-black italic">Inner Peace Center</h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed font-bold">
                            Located in the quietest part of the campus, our hall of silence is open to all students for meditation and prayer. We organize weekly sessions led by guest speakers on ethics, values, and mindfulness.
                        </p>
                    </div>
                    <div className="space-y-4">
                        {['Daily Meditation Sessions', 'Value-based Seminars', 'Community Prayer', 'Mindfulness Workshops'].map((item, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div className="h-2 w-2 bg-[#EAB308] rounded-full" />
                                <span className="font-black text-[#101828] text-sm uppercase tracking-wider">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl relative">
                        <img
                            src="https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&q=80&w=1000"
                            alt="Meditation"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-blue-900/20" />
                    </div>
                </div>
            </div>

            <section className="text-center py-12">
                <blockquote className="max-w-3xl mx-auto space-y-6">
                    <Heart className="h-10 w-10 text-red-500 mx-auto opacity-50" />
                    <p className="text-2xl lg:text-3xl font-black text-[#101828] italic leading-snug">
                        "True education must go beyond the intellect to touch the spirit, creating compassionate leaders for tomorrow."
                    </p>
                </blockquote>
            </section>
        </div>
    );
};

export default Spiritual;
