import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { addAllTrending } from "../Utils/moviesSlice";

const useAllTrending = () => {
  const dispatch = useDispatch();

  const fetchAllTrending = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/all/day?language=en-US",
      API_OPTIONS
    );
    const jsonData = await data.json();
    // console.log(jsonData?.results);
    dispatch(addAllTrending(jsonData?.results));
  };

  useEffect(() => {
    fetchAllTrending();

    return () => dispatch(addAllTrending(null));
  }, []);
};

export default useAllTrending;
