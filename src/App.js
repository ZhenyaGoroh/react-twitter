import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";
import TweetPage from "./components/TweetPage/TweetPage";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import RegisterPage from "./components/RegisterPage/RegisterPage";
function App() {
  const state = useSelector((state) => state.tweets);
  
  useEffect(() => {
    localStorage.setItem("tweets", JSON.stringify(state));
  }, [state]);
  return (
    <div className="container">
      <Header />
      <div className="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tweets/*" element={<TweetPage />} />
          <Route path="/register/*" element={<RegisterPage />} />
          
        </Routes>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
