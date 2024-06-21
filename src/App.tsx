import { BrowserRouter } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import PageRoutes from "./components/page-routes";

function App() {
  return (
    <BrowserRouter>
      <div>
        <div className="bg-[#014E56]">
          <Header />
          <PageRoutes />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
