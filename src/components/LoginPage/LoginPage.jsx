import React from "react";
import s from "./LoginPage.module.scss";
import { AiOutlineTwitter } from "react-icons/ai";
import Input from "../Inputs/Input/Input";
import { useState } from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
function LoginPage() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
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
        </div>
        <div className={s.form__btn}>
          <Button title="Log in" />
        </div>
        <div className={s.form__already}>
          <div className={s.hr}></div>
          <span className={s.form__already_text}>or</span>
          <div className={s.hr}></div>
        </div>
        <div className={s.form__footer}>
          <p>Don't have an account?</p>
          <Link to={"/registration"} className = {s.form__footer_link}>
            <button className={s.form__footer_btn}>register</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
