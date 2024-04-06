import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { addTVList } from "../Utils/moviesSlice";

const useTVList = () => {
  const dispatch = useDispatch();

  const fetchTVList = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    const jsonData = await data.json();
    // console.log(jsonData?.results);
    dispatch(addTVList(jsonData?.results));
  };

  useEffect(() => {
    fetchTVList();

    return () => dispatch(addTVList(null));
  }, []);
};

export default useTVList;
