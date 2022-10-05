import React from "react";
import "./PrimaryInput.scss";
function PrimaryInput(props) {
  return (
    <div className="primary-input">
      {props.icon ? <props.icon className="primary-input__icon" /> : null}
      <input
        onChange={(e) => props.onChange(e.target.value)}
        value={props.value}
        type={props.type ? props.type : "text"}
        placeholder={props.placeholder}
        className="primary-input__field"
      />
    </div>
  );
}

export default PrimaryInput;
