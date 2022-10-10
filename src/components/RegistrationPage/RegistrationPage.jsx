import React from "react";
import s from "./RegistrationPage.module.scss";
import { AiOutlineTwitter } from "react-icons/ai";
import Input from "../Inputs/Input/Input";
import { useState } from "react";
import Button from "../Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { setUser } from "../../slices/userSlice";
function RegisterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  

  const handleRegister = () => {
    const auth = getAuth();
    console.log(auth);
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            name: name,
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
          );
          updateProfile(auth.currentUser,{
            displayName:name
          })
        
        navigate("/");
      })
      .catch(alert("You are already registered, just login"),navigate("/login"));
  };

  return (
    <div className={s.register}>
      <div className={s.register__img}>
        <AiOutlineTwitter className={s.img__icon} />
      </div>
      <div className={s.form}>
        <div className={s.form__title}>Join Twitter now!</div>
        <div className={s.form__inputs}>
          <div className={s.form__name}>
            <Input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={setName}
            />
          </div>
          <div className={s.form__email}>
            <Input
              type="email"
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
          <div className={s.form__password_repeat}>
            <Input
              placeholder="Repeat your password"
              type="password"
              value={repeatedPassword}
              onChange={setRepeatedPassword}
            />
          </div>
        </div>
        <div className={s.form__btn}>
          <Button
            disabled={password === repeatedPassword ? false : true}
            title={
              repeatedPassword.length > 0
                ? repeatedPassword === password
                  ? "register"
                  : "Passwords do not match"
                : "register"
            }
            handle={handleRegister}
          />
        </div>
        <div className={s.form__already}>
          <div className={s.hr}></div>
          <span className={s.form__already_text}>or</span>
          <div className={s.hr}></div>
        </div>
        <div className={s.form__footer}>
          <p>Already have an account?</p>
          <Link to={"/login"} className={s.form__footer_link}>
            <button className={s.form__footer_btn}>log in</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
