import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const RootLayout = () => {
    const location = useLocation();
    const isHome = location.pathname === "/";
    const isLibrary = location.pathname.startsWith("/library");
    const isInfrastructure = location.pathname.startsWith("/infrastructure");
    const isAcademics = location.pathname.startsWith("/academics") || location.pathname.startsWith("/about");

    let bgColor = "bg-white";
    if (isAcademics) bgColor = "bg-gray-50";

    return (
        <div className={`min-h-screen flex flex-col transition-colors duration-500 ${bgColor}`}>
            <Navbar />
            <main className={`flex-grow ${(!isHome && !isInfrastructure && !isLibrary) ? 'pt-28' : ''}`}>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default RootLayout;
