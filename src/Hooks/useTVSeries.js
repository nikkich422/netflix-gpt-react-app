import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { addTVSeries } from "../Utils/moviesSlice";

const useTVSeries = () => {
  const dispatch = useDispatch();

  const fetchTVSeries = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1",
      API_OPTIONS
    );
    const jsonData = await data.json();
    // console.log(jsonData?.results);
    dispatch(addTVSeries(jsonData?.results));
  };

  useEffect(() => {
    fetchTVSeries();

    return () => dispatch(addTVSeries(null));
  }, []);
};

export default useTVSeries;
