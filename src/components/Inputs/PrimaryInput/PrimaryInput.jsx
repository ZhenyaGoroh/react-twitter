import React from "react";
import s from "./PrimaryInput.module.scss";
function PrimaryInput(props) {
  return (
    <div className={s.primary_input}>
      {props.icon ? <props.icon className={s.primary_input__icon} /> : null}
      <input
        onChange={(e) => props.onChange(e.target.value)}
        value={props.value}
        type={props.type ? props.type : "text"}
        placeholder={props.placeholder}
        className={s.primary_input__field}
      />
    </div>
  );
}

export default PrimaryInput;
