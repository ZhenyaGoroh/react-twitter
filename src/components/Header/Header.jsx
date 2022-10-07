import React from "react";
import s from "./Header.module.scss";
import { AiFillTwitterCircle } from "react-icons/ai";
import Button from "../Button/Button";
function Header() {
  return (
    <header>
      <div className={s.header}>
        <div className={s.header__start}>
          <div className={s.header__logo}>
            <AiFillTwitterCircle className={s.logo} />
          </div>
          <div className={s.header__breadcrumbs}></div>
        </div>
        <div className={s.header__end}>
          <div className={s.header__btn}>
            <Button title="log in" />
          </div>
        </div>
      </div>
      <div className={s.hr}></div>
    </header>
  );
}

export default Header;
