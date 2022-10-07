import React from "react";
import Tweets from "./Tweets/Tweets";
import s from "./HomePage.module.scss";
import Filters from "./Filters/Filters";

function HomePage() {
  return (
    <div className={s.home_page}>
      <Tweets />
      <Filters />
    </div>
  );
}

export default HomePage;
