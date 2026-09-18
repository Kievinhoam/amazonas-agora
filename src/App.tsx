import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import BreakingNews from "./components/BreakingNews";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <div className="site">
      <Header />

      <Navbar />

      <main>
        <BreakingNews />

        <Home />
      </main>

      <Footer />
    </div>
  );
}

export default App;