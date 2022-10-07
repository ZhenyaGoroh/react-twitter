import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";
import TweetPage from "./components/TweetPage/TweetPage";
import { useEffect } from "react";
import { useSelector } from "react-redux";
function App() {
  const state = useSelector((state) => state.tweets);
  console.log("app ",JSON.parse(localStorage.getItem("tweets")));
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
        </Routes>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
