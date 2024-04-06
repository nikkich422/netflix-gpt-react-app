import React from "react";
import { IMG_CDN_URL } from "../Utils/constants";

const MovieCard = ({ img_link }) => {
  if (!img_link) {
    return;
  }

  return (
    <div className="w-36 md:w-56 pr-4 hover:scale-110 ">
      <img src={IMG_CDN_URL + img_link} alt="Movie-card" />
    </div>
  );
};

export default MovieCard;
