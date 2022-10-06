import React from "react";
import Tweets from "./Tweets/Tweets";
import "./HomePage.scss";
import Filters from "./Filters/Filters";

function HomePage() {
  return (
    <div className="home-page">
      <Tweets />
      <Filters />
    </div>
  );
}

export default HomePage;
