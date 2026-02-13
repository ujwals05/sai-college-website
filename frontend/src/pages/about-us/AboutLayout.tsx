import { NavLink, Outlet } from "react-router-dom";

const AboutLayout = () => {
    return (
        <div className="flex min-h-screen bg-gray-50">

            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-gray-200 p-8 hidden lg:block">
                <h2 className="font-bold text-xl mb-8 text-[#0b1e3d]">About Us</h2>

                <nav className="space-y-4">
                    <NavLink to="/about/history" className="block hover:text-blue-600">History & Milestones</NavLink>
                    <NavLink to="/about/founders" className="block hover:text-blue-600">Founders</NavLink>
                    <NavLink to="/about/vision-mission" className="block hover:text-blue-600">Vision & Mission</NavLink>
                    <NavLink to="/about/chairman-message" className="block hover:text-blue-600">Chairman's Message</NavLink>
                    <NavLink to="/about/principal-message" className="block hover:text-blue-600">Principal's Message</NavLink>
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
