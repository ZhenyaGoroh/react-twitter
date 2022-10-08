import React from "react";
import s from "./RegistrationHeader.module.scss";
import { AiFillTwitterCircle } from "react-icons/ai";
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
        <div className={s.header__end}></div>
      </div>
      <div className={s.hr}></div>
    </header>
  );
}

export default Header;
