import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import useTVList from "../Hooks/useTVList";
import useTVSeries from "../Hooks/useTVSeries";
import useAllTrending from "../Hooks/useAllTrending";

const SecondaryComponent = () => {
  useTVList();
  useTVSeries();
  useAllTrending();

  const list = useSelector((store) => store.movies);

  return (
    <div className="bg-black">
      <div className="mt-4 md:-mt-36 relative z-20">
        <MovieList title={"Trending"} list={list.PlayingMovies} />
        <MovieList title={"Top Rated"} list={list.TVList} />
        <MovieList title={"TV Series"} list={list.TVSeries} />
        <MovieList title={"Newly Added"} list={list.AllTrending} />
        <MovieList title={"Popular"} list={list.PlayingMovies} />
        <MovieList title={"Drama"} list={list.TVList} />
        <MovieList title={"Action"} list={list.TVSeries} />
      </div>
    </div>
  );
};

export default SecondaryComponent;
