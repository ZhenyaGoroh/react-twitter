import React from "react";
import "./Header.scss";
import { AiFillTwitterCircle } from "react-icons/ai";
import Button from "../Button/Button";
function Header() {
  return (
    <div>
      <div className="header">
        <div className="header__start">
          <div className="header__logo">
            <AiFillTwitterCircle className="logo" />
          </div>
          <div className="header__breadcrumbs"></div>
        </div>
        <div className="header__end">
          <div className="header__btn">
            <Button title="log in" />
          </div>
        </div>
      </div>
        <div className="hr"></div>
    </div>
  );
}

export default Header;
