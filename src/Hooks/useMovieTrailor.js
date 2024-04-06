import { useDispatch } from "react-redux";
import { addMovieTrailor } from "../Utils/moviesSlice";
import { API_OPTIONS } from "../Utils/constants";
import { useEffect } from "react";

const useMovieTrailor = (movieId) => {
  const dispatch = useDispatch();
  // console.log(movieId);

  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const jsonData = await data.json();
    // console.log(jsonData);

    const filteredData = jsonData.results.filter(
      (video) => video.type === "Trailer"
    );
    const Trailor =
      filteredData.length == 0 ? jsonData.results[0] : filteredData[0];
    // console.log(Trailor);
    dispatch(addMovieTrailor(Trailor));
  };

  useEffect(() => {
    getMovieVideos();

    return () => dispatch(addMovieTrailor(null));
  }, []);
};

export default useMovieTrailor;
