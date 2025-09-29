import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Message from "./components/Message";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Message/>
      <main>
        <Outlet />  {/* Nested routes yahan render honge */}
      </main>
      <Footer />
    </>
  );
}
    