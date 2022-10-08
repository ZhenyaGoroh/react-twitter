import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";
import TweetPage from "./components/TweetPage/TweetPage";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import RegistrationPage from "./components/RegistrationPage/RegistrationPage";
import RegistrationHeader from "./components/RegistrationHeader/RegistrationHeader";
import LoginPage from "./components/LoginPage/LoginPage";
function App() {
  const state = useSelector((state) => state.tweets);

  useEffect(() => {
    localStorage.setItem("tweets", JSON.stringify(state));
  }, [state]);
  return (
    <div className="container">
      <div className="main">
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Header />
                <HomePage />
              </div>
            }
          />
          <Route
            path="/tweets/*"
            element={
              <div>
                <Header />
                <TweetPage />
              </div>
            }
          />
          <Route
            path="/registration/"
            element={
              <div>
                <RegistrationHeader />
                <RegistrationPage />
              </div>
            }
          />
          <Route
            path="/login/"
            element={
              <div>
                <RegistrationHeader />
                <LoginPage />
              </div>
            }
          />
        </Routes>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
