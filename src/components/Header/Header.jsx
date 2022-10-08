import React from "react";
import s from "./Header.module.scss";
import { AiFillTwitterCircle } from "react-icons/ai";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header>
      <div className={s.header}>
        <div className={s.header__start}>
          <Link to={"/"} className={s.header__logo}>
            <AiFillTwitterCircle className={s.logo} />
          </Link>
          <div className={s.header__breadcrumbs}></div>
        </div>
        <div className={s.header__end}>
          <div className={s.header__btn}>
            <Link to={"/login"}>
              <Button title="log in" />
            </Link>
          </div>
        </div>
      </div>
      <div className={s.hr}></div>
    </header>
  );
}

export default Header;
