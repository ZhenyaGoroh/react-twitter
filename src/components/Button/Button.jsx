import React from "react";
import s from "./Button.module.scss";

function Button(props) {
  return (
    <button onClick={()=>props.dispatch(props.onClick(props.value?props.value:null,props.setValue?props.setValue(""):null))} className={s.btn} disabled={props.disabled}>
      {props.title}
    </button>
  );
}

export default Button;
