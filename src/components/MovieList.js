import React from "react";
import MovieCard from "./MovieCard";
import "../index.css";

const MovieList = ({ title, list }) => {
  if (list == null) {
    return;
  }

  return (
    <div className="py-2 md:py-6">
      <h1 className="text-xl mx-2 md:text-3xl py-2 md:py-4 text-white">
        {title}
      </h1>
      <div className="scroll_bar flex overflow-x-scroll">
        <div className="flex ">
          {list.map((movie) => (
            <MovieCard key={movie.id} img_link={movie?.backdrop_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
