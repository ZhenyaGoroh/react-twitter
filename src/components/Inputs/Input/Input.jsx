import React from "react";

import s from "./Input.module.scss";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
function Input(props) {
  const [type, setType] = useState("password");
  const [focus, setFocus] = useState(false);
  return (
    <div className={s.input}>
      <input
        onFocus={()=>setFocus(true)}
        onBlur = {()=>setFocus(false)}
        onChange={(e) => props.onChange(e.target.value)}
        value={props.value}
        type={props.type ? (props.type === "password" ? type : "text") : "text"}
        placeholder={props.placeholder}
        className={s.input__field}
      />
      {props.type === "password" ? (
        type === "password" ? (
          <button  disabled={props.value!==""?false:true} className={s.input__icon}>
            <AiOutlineEye
              className={focus?s.input__icon_active:s.input__icon}
              onClick={() => setType("text")}
            />
          </button>
        ) : (
          <AiOutlineEyeInvisible
            className={s.input__icon}
            onClick={() => setType("password")}
          />
        )
      ) : null}
    </div>
  );
}

export default Input;
