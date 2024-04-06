import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptSuggestions = () => {
  const { searchMovieName, searchMovie } = useSelector((store) => store?.gpt);

  if (!searchMovie) return;

  return (
    <div className="fixed md:absolute mt-[70%] md:mt-[30%] p-2 bg-black bg-opacity-70 ">
      <MovieList title={searchMovieName} list={searchMovie} />
    </div>
  );
};

export default GptSuggestions;
