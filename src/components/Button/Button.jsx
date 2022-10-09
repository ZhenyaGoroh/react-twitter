import React from "react";
import s from "./Button.module.scss";

function Button(props) {
  return (
    <button onClick={()=>props.handle?props.handle():props.dispatch?props.dispatch(props.onClick?props.onClick(props.value?props.value:null,props.setValue?props.setValue(""):null):null):null} className={s.btn} disabled={props.disabled}>
      {props.title}
    </button>
  );
}

export default Button;
