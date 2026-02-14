import { NavLink, Outlet } from "react-router-dom";

const AcademicsLayout = () => {
    const navItems = [
        { path: "/academics", label: "Overview", end: true },
        { path: "/academics/puc", label: "Pre-University (PUC)" },
        { path: "/academics/bca", label: "BCA (Computer App)" },
        { path: "/academics/bcom", label: "B.Com" },
        { path: "/academics/bcom-data-analytics", label: "B.Com Data Analytics" },
    ];

    return (
        <div className="flex min-h-screen bg-gray-50 pt-20">
            {/* Sidebar */}
            <aside className="w-80 bg-white border-r border-gray-100 p-8 hidden lg:block overflow-y-auto">
                <div className="sticky top-24">
                    <p className="text-blue-600 font-black text-xs tracking-[0.3em] uppercase mb-4">Academics</p>
                    <h2 className="font-black text-2xl mb-10 text-[#101828] tracking-tight">Our Programs</h2>

                    <nav className="space-y-3">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                end={item.end}
                                className={({ isActive }) =>
                                    `block py-3 px-4 rounded-xl transition-all font-bold text-sm ${isActive
                                        ? "bg-[#101828] text-[#EAB308] shadow-lg shadow-blue-900/10"
                                        : "hover:bg-gray-50 text-gray-500 hover:text-[#101828]"
                                    }`
                                }
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </nav>

                    <div className="mt-12 p-6 bg-blue-50 rounded-2xl border border-blue-100 mb-20">
                        <p className="text-[#101828] font-bold text-sm mb-2">Need Guidance?</p>
                        <p className="text-gray-500 text-xs mb-4 leading-relaxed">Contact our academic counsellors for course details.</p>
                        <button className="w-full py-3 bg-white text-[#101828] font-bold text-xs rounded-lg border border-blue-200 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-sm">
                            ADMISSION INQUIRY
                        </button>
                    </div>
                </div>
            </aside>

            {/* Content */}
            <main className="flex-1 p-6 lg:p-12">
                <div className="max-w-5xl mx-auto">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default AcademicsLayout;
