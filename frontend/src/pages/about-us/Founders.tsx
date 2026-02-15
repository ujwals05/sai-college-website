import { Quote, Sparkles, Heart, GraduationCap } from 'lucide-react';

const Founders = () => {
  return (
    <div className="space-y-24 animate-in fade-in duration-700">

      {/* Hero Section */}
      <div className="relative rounded-[2.5rem] overflow-hidden bg-[#101828] p-12 lg:p-20 text-center lg:text-left">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-500/10 -skew-x-12 transform translate-x-20" />
        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-black uppercase tracking-widest">
              <Sparkles className="w-3 h-3" /> The Visionaries
            </div>
            <h1 className="text-4xl lg:text-6xl font-black text-white leading-tight">
              Building a Legacy of <span className="text-[#EAB308]">Empowerment</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
              Our founders believed that education is the most powerful tool for social change. They envisioned a sanctuary where women could achieve excellence without compromise.
            </p>
          </div>
          <div className="hidden lg:block relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-full blur-3xl animate-pulse" />
            <img
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1000"
              alt="Founding Team"
              className="relative z-10 rounded-3xl shadow-2xl border border-white/10"
            />
          </div>
        </div>
      </div>

      {/* Founding Quote */}
      <div className="max-w-4xl mx-auto text-center space-y-8 px-6">
        <div className="flex justify-center">
          <div className="h-20 w-20 rounded-full bg-blue-50 flex items-center justify-center">
            <Quote className="h-10 w-10 text-blue-600 rotate-180" />
          </div>
        </div>
        <h2 className="text-2xl md:text-4xl font-black text-[#101828] leading-tight italic">
          "True education is not about literacy alone; it is about character building, self-reliance, and the courage to transform society."
        </h2>
        <div className="space-y-1">
          <p className="font-black text-blue-600 uppercase tracking-widest">Our Founding Philosophy</p>
          <p className="text-gray-400 font-bold">est. 2004</p>
        </div>
      </div>

      {/* Founder Profiles */}
      <div className="grid lg:grid-cols-2 gap-12">
        {[
          {
            name: "Late Dr. M.A. Sai Krishna",
            role: "Principal Founder & Visionary",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
            bio: "An eminent educationist and social reformer, Dr. Krishna dedicated his life to bridging the gender gap in higher education. His commitment to 'Excellence with Empathy' remains our guiding light.",
            stats: [
              { icon: Heart, label: "40+ Years", sub: "in Education" },
              { icon: GraduationCap, label: "National", sub: "Award Winner" }
            ]
          },
          {
            name: "Mrs. Saraswathi Sai",
            role: "Co-Founder & Mentor",
            image: "https://images.unsplash.com/photo-1544168190-79c17527004f?auto=format&fit=crop&q=80&w=800",
            bio: "A pioneer in women's development, Mrs. Saraswathi focus on holistic well-being and moral values has shaped the unique campus culture of Sai College for Women.",
            stats: [
              { icon: Sparkles, label: "Legacy", sub: "Builder" },
              { icon: Heart, label: "15,000+", sub: "Graduates" }
            ]
          }
        ].map((founder, i) => (
          <div key={i} className="group bg-white border border-gray-100 rounded-[3rem] overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col">
            <div className="aspect-[4/3] overflow-hidden relative">
              <img
                src={founder.image}
                alt={founder.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101828]/80 to-transparent" />
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-2xl font-black tracking-tight">{founder.name}</h3>
                <p className="text-[#EAB308] font-bold text-sm uppercase tracking-widest">{founder.role}</p>
              </div>
            </div>
            <div className="p-10 space-y-8 flex-1 flex flex-col">
              <p className="text-gray-500 leading-relaxed font-medium flex-1 italic">
                "{founder.bio}"
              </p>
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-100">
                {founder.stats.map((stat, si) => (
                  <div key={si} className="space-y-1">
                    <div className="flex items-center gap-2 text-blue-600">
                      <stat.icon className="h-4 w-4" />
                      <span className="font-black text-sm">{stat.label}</span>
                    </div>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">{stat.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-50 rounded-[2.5rem] p-12 lg:p-20 text-center space-y-8 border border-gray-100">
        <h3 className="text-3xl font-black text-[#101828]">The Promise Continues</h3>
        <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Today, the next generation of leadership carries forward the flame lit by our founders. We remain steadfast in our commitment to keeping Sai College for Women a beacon of hope and excellence.
        </p>
        <div className="h-px w-24 bg-blue-100 mx-auto" />
      </div>

    </div>
  );
};

export default Founders;
