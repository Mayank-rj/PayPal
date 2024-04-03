import Contact from "./Components/Contact";
import Footer1 from "./Components/Footer1";
import Footer2 from "./Components/Footer2";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";


function App() {
  return (
    <div>
      <header>
        <Navbar />
        <Header />
      </header>
      <Contact />
      <footer>
        <Footer1 />
        <Footer2 />
      </footer>
    </div>
  );
}

export default App;
