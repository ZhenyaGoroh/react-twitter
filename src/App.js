import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";
import TweetPage from "./components/TweetPage/TweetPage";
function App() {
  return (
    <div className="container">
      <Header />
      <div className="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path = "/tweets/*" element={<TweetPage/>}/>
        </Routes>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
