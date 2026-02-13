import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const RootLayout = () => {
    const location = useLocation();
    const isHome = location.pathname === "/";

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className={`flex-grow ${!isHome ? 'pt-28' : ''}`}>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default RootLayout;
