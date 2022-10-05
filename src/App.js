
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";

function App() {
  return (
    
      <div className="container">
        <Header />
        <div className="main">
          <HomePage />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    
  );
}

export default App;
