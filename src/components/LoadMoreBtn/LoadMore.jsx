import React from "react";
import s from "./LoadMore.module.scss";

function LoadMore(props) {
  return (
    <button onClick={()=>props.onClick(props.value)} className={s.btn} disabled={props.disabled}>
      {props.title}
    </button>
  );
}

export default LoadMore;
