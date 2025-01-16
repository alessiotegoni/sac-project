import { Outlet } from "react-router";
import Navbar from "../../Navbar";
import Footer from "../../Footer"

export default function DefaultLayout() {
  return (
    <>
      <Navbar />
      <main className="container min-vh-100">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
