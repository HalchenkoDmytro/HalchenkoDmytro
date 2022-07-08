import React from "react";
import aside from "./aside";
import content from "./content";

const main = (
  <div className="main">
    {aside}
    <div className="main_content">
      <p className="main__text">main</p>
      {content}
    </div>

  </div>
)

export default main;
