import { Outlet } from 'react-router';
import Navbar from './navbar';
import Footer from './Footer';

export default function DefaultLayout() {
    return (
        <>
            <Navbar />
            <main className="container">
                <Outlet></Outlet>
            </main>
            <Footer />
        </>
    );
}
