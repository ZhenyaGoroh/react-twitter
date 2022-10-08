import React from "react";
import s from "./RegistrationPage.module.scss";
import { AiOutlineTwitter } from "react-icons/ai";
import Input from "../Inputs/Input/Input";
import { useState } from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
function RegisterPage() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  return (
    <div className={s.register}>
      <div className={s.register__img}>
        <AiOutlineTwitter className={s.img__icon} />
      </div>
      <div className={s.form}>
        <div className={s.form__title}>Join Twitter now!</div>
        <div className={s.form__inputs}>
          <div className={s.form__login}>
            <Input
              placeholder="Enter your login"
              value={login}
              onChange={setLogin}
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
          <Button title="Register" />
        </div>
        <div className={s.form__already}>
          <div className={s.hr}></div>
          <span className={s.form__already_text}>or</span>
          <div className={s.hr}></div>
        </div>
        <div className={s.form__footer}>
          <p>Already have an account?</p>
          <Link to={"/login"} className = {s.form__footer_link}>
            <button className={s.form__footer_btn}>log in</button>
          </Link> 
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
