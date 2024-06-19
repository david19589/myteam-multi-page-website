import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./components/home";

function App() {
  return (
    <div>
      <div className="bg-[#014E56]">
        <Header />
          <Home />
      </div>

      <Footer />
    </div>
  );
}

export default App;
