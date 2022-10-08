import React from "react";
import s from "./RegisterPage.module.scss";
import { AiOutlineTwitter } from "react-icons/ai";
import Input from "../Inputs/Input/Input";
import { useState } from "react";
import Button from "../Button/Button";
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
          <div className={s.form__btn}>
            <Button title="Register" />
          </div>
        </div>  
      </div>
    </div>
  );
}

export default RegisterPage;
