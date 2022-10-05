import React from "react";
import "./Button.scss";

function Button(props) {
  return (
    <button onClick={()=>props.dispatch(props.onClick(props.value,props.setValue("")))} className="btn" disabled={props.disabled}>
      {props.title}
    </button>
  );
}

export default Button;
