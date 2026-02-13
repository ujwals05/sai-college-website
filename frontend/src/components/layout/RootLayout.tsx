import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { useEffect } from 'react';

const RootLayout = () => {
    const { pathname, hash } = useLocation();
    const isHome = pathname === "/";

    // Smooth scroll to hash links
    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.substring(1));
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        } else if (!isHome) {
            window.scrollTo(0, 0);
        }
    }, [pathname, hash, isHome]);

    return (
        <div className="min-h-screen flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900">
            <Navbar />
            <main className={`flex-grow transition-all duration-300 ${!isHome ? 'pt-24 lg:pt-28' : ''}`}>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default RootLayout;
