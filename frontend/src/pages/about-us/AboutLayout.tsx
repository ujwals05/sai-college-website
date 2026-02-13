import { NavLink, Outlet } from "react-router-dom";

const AboutLayout = () => {
    return (
        <div className="flex min-h-screen bg-gray-50">

            {/* Sidebar */}
            <aside className="w-72 bg-white border-r border-gray-100 p-8 hidden lg:block">
                <h2 className="font-black text-xl mb-10 text-[#101828] tracking-tight">About Us</h2>

                <nav className="space-y-4">
                    <NavLink to="/about/history" className={({ isActive }) => `block py-2 px-3 rounded-lg transition-all font-bold ${isActive ? 'bg-[#101828] text-[#EAB308]' : 'hover:bg-gray-50 text-gray-600 hover:text-[#101828]'}`}>History & Milestones</NavLink>
                    <NavLink to="/about/founders" className={({ isActive }) => `block py-2 px-3 rounded-lg transition-all font-bold ${isActive ? 'bg-[#101828] text-[#EAB308]' : 'hover:bg-gray-50 text-gray-600 hover:text-[#101828]'}`}>Founders</NavLink>
                    <NavLink to="/about/vision-mission" className={({ isActive }) => `block py-2 px-3 rounded-lg transition-all font-bold ${isActive ? 'bg-[#101828] text-[#EAB308]' : 'hover:bg-gray-50 text-gray-600 hover:text-[#101828]'}`}>Vision & Mission</NavLink>
                    <NavLink to="/about/chairman-message" className={({ isActive }) => `block py-2 px-3 rounded-lg transition-all font-bold ${isActive ? 'bg-[#101828] text-[#EAB308]' : 'hover:bg-gray-50 text-gray-600 hover:text-[#101828]'}`}>Chairman's Message</NavLink>
                    <NavLink to="/about/principal-message" className={({ isActive }) => `block py-2 px-3 rounded-lg transition-all font-bold ${isActive ? 'bg-[#101828] text-[#EAB308]' : 'hover:bg-gray-50 text-gray-600 hover:text-[#101828]'}`}>Principal's Message</NavLink>
                </nav>
            </aside>

            {/* Content */}
            <main className="flex-1 p-10">
                <Outlet />
            </main>

        </div>
    );
};

export default AboutLayout;
