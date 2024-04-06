import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";

const MainComponent = () => {
  useNowPlayingMovies();
  const movies = useSelector((store) => store.movies?.PlayingMovies);
  if (!movies) return;

  const rand = Math.floor(Math.random() * 20);
  const mainMovie = movies[rand];

  // console.log(mainMovie);

  const { original_title, overview, id } = mainMovie;
  // console.log(id);

  return (
    <div>
      <VideoTitle title={original_title} description={overview} />
      <VideoBackground movieId={id} title={original_title} />
    </div>
  );
};

export default MainComponent;
