import React, { useState } from "react";
import Button from "../../../Button/Button";
import "./NewTweet.scss";

function NewTweet() {
  const [value, setValue] = useState("");

  return (
    <div className="new-tweet">
      <input
        className="new-tweet__input"
        type="text"
        placeholder="What's new?"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className="new-tweet__btn" >
        <Button title="tell" />
      </div>
    </div>
  );
}

export default NewTweet;
