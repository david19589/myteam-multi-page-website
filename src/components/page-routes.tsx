import { Route, Routes } from "react-router-dom";
import Home from "./home";
import About from "./about";

function PageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
    </Routes>
  );
}

export default PageRoutes;
