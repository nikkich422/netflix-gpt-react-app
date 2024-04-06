import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { addPlayingMovies } from "../Utils/moviesSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const fetchNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const jsonData = await data.json();
    // console.log(jsonData?.results);
    dispatch(addPlayingMovies(jsonData?.results));
  };

  useEffect(() => {
    fetchNowPlayingMovies();

    return () => dispatch(addPlayingMovies(null));
  }, []);
};

export default useNowPlayingMovies;
