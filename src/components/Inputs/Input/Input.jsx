import React from "react";

import s from "./Input.module.scss";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
function Input(props) {
  const [type, setType] = useState("password");
  const [focus, setFocus] = useState(false);
  const setBoth = () => {
    setType("password");
    setFocus(false);
  }
  return (
    <div className={s.input}>
      <input
        onFocus={()=>setFocus(true)}
        onBlur = {()=>setBoth()}
        onChange={(e) => props.onChange(e.target.value)}
        value={props.value}
        type={props.type ? (props.type === "password" ? type : "text") : "text"}
        placeholder={props.placeholder}
        className={s.input__field}
      />
      <button
        // disabled={props.value !== "" ? false : true}
        className={s.input__icon}
      >
        {focus?props.type === "password" ? (
          type === "password" ? (
            <AiOutlineEye
              className={s.input__icon}
              onClick={() => setType("text")}
              onMouseDown={(e) => e.preventDefault()}
            />
          ) : (
            <AiOutlineEyeInvisible
              className={s.input__icon}
              onClick={() => setType("password")}
              onMouseDown={(e) => e.preventDefault()}
            />
          )
        ) : null:null}
      </button>
    </div>
  );
}

export default Input;
