import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailor from "../Hooks/useMovieTrailor";

const VideoBackground = ({ movieId, title }) => {
  useMovieTrailor(movieId);

  const TrailorVideo = useSelector((store) => store.movies?.MovieTrailor);
  // console.log(TrailorVideo);

  // console.log(title);
  // console.log(TrailorVideo?.key);

  return (
    <div className="w-screen aspect-video">
      <div className="pt-36 md:pt-0">
        <iframe
          className="w-screen aspect-video"
          src={
            "https://www.youtube.com/embed/" +
            TrailorVideo?.key +
            "?&autoplay=1&mute=1"
          }
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>
    </div>
  );
};

//https://www.youtube.com/embed/d2OONzqh2jk?si=

export default VideoBackground;
