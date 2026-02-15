import { NavLink, Outlet } from "react-router-dom";

const AboutLayout = () => {
    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <aside className="w-80 bg-white border-r border-gray-100 p-8 hidden lg:block overflow-y-auto">
                <div className="sticky top-24">
                    <p className="text-blue-600 font-black text-xs tracking-[0.3em] uppercase mb-4">About Us</p>
                    <h2 className="font-black text-2xl mb-10 text-[#101828] tracking-tight">Sai College</h2>

                    <nav className="space-y-3">
                        {[
                            { path: "/about/history", label: "History & Milestones" },
                            { path: "/about/founders", label: "Founders" },
                            { path: "/about/vision-mission", label: "Vision & Mission" },
                            { path: "/about/chairman-message", label: "Chairman's Message" },
                            { path: "/about/principal-message", label: "Principal's Message" },
                        ].map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
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

export default AboutLayout;
