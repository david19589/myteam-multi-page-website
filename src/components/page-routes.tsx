import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./home";
import About from "./about";
import { useEffect } from "react";
import ContactUs from "./contact-us";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function PageRoutes() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact-us" element={<ContactUs />} />
      </Routes>
    </>
  );
}

export default PageRoutes;
