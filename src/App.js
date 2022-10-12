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
import useAuth from "./hooks/useAuth";
import { getAuth, onAuthStateChanged } from "firebase/auth";
function App() {
  const tweets = useSelector((state) => state.tweets);
  const user = useSelector((state) => state.user);
  const { isAuth } = useAuth();
  // console.log(isAuth);
  const auth = getAuth();
  onAuthStateChanged(auth,(user)=>{
    if(user){
      localStorage.setItem("authUser",JSON.stringify(auth.currentUser))
    }
  })
  useEffect(() => {
    localStorage.setItem("tweets", JSON.stringify(tweets));
    localStorage.setItem("user",JSON.stringify(user));
  }, [tweets,user,auth.currentUser]);
  // console.log("dn",auth.currentUser);
  return (
    <div className="container">
      <div className="main">
        <Routes>
          <Route
            path="/"
            element={
              isAuth ? (
                <div>
                  <Header />
                  <HomePage />
                </div>
              ) : (
                <div>
                  <RegistrationHeader />
                  <RegistrationPage />
                </div>
              )
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
