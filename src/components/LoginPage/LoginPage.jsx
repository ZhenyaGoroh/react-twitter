import React from "react";
import s from "./LoginPage.module.scss";
import { AiOutlineTwitter } from "react-icons/ai";
import Input from "../Inputs/Input/Input";
import { useState } from "react";
import Button from "../Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../../slices/userSlice";
function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            name: auth.currentUser.displayName,
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        navigate("/")
      })
      .catch((error)=>{
        console.log(error.code); 
        // console.log(error.message); 
        
      });
  };

  return (
    <div className={s.register}>
      <div className={s.register__img}>
        <AiOutlineTwitter className={s.img__icon} />
      </div>
      <div className={s.form}>
        <div className={s.form__title}>Welcome back!</div>
        <div className={s.form__inputs}>
          <div className={s.form__login}>
            <Input
              placeholder="Enter your email"
              value={email}
              onChange={setEmail}
            />
          </div>
          <div className={s.form__password}>
            <Input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={setPassword}
            />
          </div>
        </div>
        <div className={s.form__btn}>
          <Button handle={handleLogin} title="Log in" />
        </div>
        <div className={s.form__already}>
          <div className={s.hr}></div>
          <span className={s.form__already_text}>or</span>
          <div className={s.hr}></div>
        </div>
        <div className={s.form__footer}>
          <p>Don't have an account?</p>
          <Link to={"/registration"} className={s.form__footer_link}>
            <button className={s.form__footer_btn}>register</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
