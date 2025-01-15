import { Outlet } from 'react-router';
import Navbar from './navbar';
import Footer from './Footer';

export default function DefaultLayout() {
    return (
        <>
            <Navbar />
            <main className="container min-vh-100 mt-5">
                <Outlet></Outlet>
            </main>
            <Footer />
        </>
    );
}
