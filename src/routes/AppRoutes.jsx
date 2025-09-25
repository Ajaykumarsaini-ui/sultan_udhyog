import { BrowserRouter , Route , Routes , Router } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import OurProducts from "../pages/OurProducts/OurProducts";
import Layout from "../Layout";

const AppRoutes = () => {
    return (
            <Routes>
                <Route path="/" element={<Layout />} >
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/ourproducts" element={<OurProducts />} />
                </Route>
            </Routes>
    );
};

export default AppRoutes ;