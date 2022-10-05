import React, { useState } from "react";
import PrimaryInput from "../../Inputs/PrimaryInput/PrimaryInput";
import { BiSearch, BiHash } from "react-icons/bi";
import { BsFillFilePersonFill } from "react-icons/bs";
import "./Filters.scss";
import Button from "../../Button/Button";


function Filters() {
  const [author, setAuthor] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [text, setText] = useState("");
  const [hashTag, setHashTag] = useState("");

  return (
    <form className="filters">
      <h2 className="filters__title">Filters</h2>
      <div className="filters__author filters__block">
        <div className="filters__author-title filters__subtitle">
          Search tweets by author name
        </div>
        <div className="filters__author-input">
          <PrimaryInput
            value={author}
            onChange={setAuthor}
            placeholder="Enter author name"
            icon={BsFillFilePersonFill}
          />
        </div>
      </div>
      <div className="filters__date filters__block">
        <div className="filters__date-title filters__subtitle">
          Search tweets by date
        </div>
        <div className="filters__date-inputs">
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
      <div placeholder="filters__text filters__block">
        <div className="filters__text-title filters__subtitle">
          Search tweets by text
        </div>
        <div className="filters__text-input">
          <PrimaryInput
            value={text}
            onChange={setText}
            placeholder="Enter search text"
            icon={BiSearch}
          />
        </div>
      </div>
      <div className="filters__hashtag filters__block">
        <div className="filters__hashtag-title filters__subtitle">
          Search tweets by text
        </div>
        <div className="filters__hashtag-input">
          <PrimaryInput
            value={hashTag}
            onChange={setHashTag}
            placeholder="Enter search #tags"
            icon={BiHash}
          />
        </div>
      </div>
      <div className="filters__buttons">
        <div className="filters__buttons-clear">
          <Button title="clear" disabled = {author||dateFrom||dateTo||text||hashTag?false:true}/>
        </div>
        <Button title="search" disabled = {author||dateFrom||dateTo||text||hashTag?false:true}/>
      </div>
    </form>
  );
}

export default Filters;
