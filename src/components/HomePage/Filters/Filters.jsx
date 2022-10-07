import React, { useState } from "react";
import PrimaryInput from "../../Inputs/PrimaryInput/PrimaryInput";
import { BiSearch, BiHash } from "react-icons/bi";
import { BsFillFilePersonFill } from "react-icons/bs";
import s from "./Filters.module.scss";
import Button from "../../Button/Button";
import { useDispatch } from "react-redux";
import { clearFilteredTweets, getTweets } from "../../../slices/tweetsSlice";

function Filters() {
  const setter = () => {
    setAuthor("");
    setDateFrom("");
    setDateTo("");
    setText("");
    setHashtag("");
  };
  const [author, setAuthor] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [text, setText] = useState("");
  const [hashtag, setHashtag] = useState("");

  const dispatch = useDispatch();

  return (
    <div className={s.filters}>
      <h2 className={s.filters__title}>Filters</h2>
      <div className={s.filters__author+" "+s.filters__block}>
        <div className={s.filters__author_title+" "+s.filters__subtitle}>
          Search tweets by author name
        </div>
        <div className={s.filters__author_input}>
          <PrimaryInput
            value={author}
            onChange={setAuthor}
            placeholder="Enter author name"
            icon={BsFillFilePersonFill}
          />
        </div>
      </div>
      <div className={s.filters__date+" "+s.filters__block}>
        <div className={s.filters__date_title+" "+ s.filters__subtitle}>
          Search tweets by date
        </div>
        <div className={s.filters__date_inputs}>
          <span>from</span>
          <PrimaryInput
            value={dateFrom}
            onChange={setDateFrom}
            placeholder="Enter start date"
            type="date"
          />
          <span>to</span>
          <PrimaryInput
            value={dateTo}
            onChange={setDateTo}
            placeholder="Enter end date"
            type="date"
          />
        </div>
      </div>
      <div placeholder={s.filters__text+" "+ s.filters__block}>
        <div className={s.filters__text_title+" "+ s.filters__subtitle}>
          Search tweets by text
        </div>
        <div className={s.filters__text_input}>
          <PrimaryInput
            value={text}
            onChange={setText}
            placeholder="Enter search text"
            icon={BiSearch}
          />
        </div>
      </div>
      <div className={s.filters__hashtag+" "+ s.filters__block}>
        <div className={s.filters__hashtag_title+" "+ s.filters__subtitle}>
          Search tweets by text
        </div>
        <div className={s.filters__hashtag_input}>
          <PrimaryInput
            value={hashtag}
            onChange={setHashtag}
            placeholder="Enter search #tags"
            icon={BiHash}
          />
        </div>
      </div>
      <div className={s.filters__buttons}>
        <div className={s.filters__buttons_clear}>
          <Button
            dispatch={dispatch}
            onClick={clearFilteredTweets}
            title="clear"
            disabled={
              author || dateFrom || dateTo || text || hashtag ? false : true
            }
            setValue={setter}
          />
        </div>
        <Button
          dispatch={dispatch}
          onClick={getTweets}
          value={{
            author: author,
            dateFrom: dateFrom,
            dateTo: dateTo,
            text: text,
            hashtag: hashtag,
          }}
          title="search"
          disabled={
            author || dateFrom || dateTo || text || hashtag ? false : true
          }
        />
      </div>
    </div>
  );
}

export default Filters;
