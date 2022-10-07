import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTweet } from "../../../../slices/tweetsSlice";
import Button from "../../../Button/Button";
import s from "./NewTweet.module.scss";

function NewTweet(props) {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  return (
    <div className={s.new_tweet}>
      <input
        className={s.new_tweet__input}
        type="text"
        placeholder="What's new?"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className={s.new_tweet__btn}>
        <Button dispatch = {dispatch} onClick = {addTweet} value = {value} setValue = {setValue} title="Tell" disabled={!value ? true : false} />
      </div>
    </div>
  );
}

export default NewTweet;
