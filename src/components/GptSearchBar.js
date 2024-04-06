import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { lang } from "../Utils/LanguageConstant";
import { setSearchMovie, setSearchMovieName } from "../Utils/GptSlice";
import { API_OPTIONS } from "../Utils/constants";

const GptSearchBar = () => {
  const SetLang = useSelector((store) => store.config.pageLanguage);
  // console.log(SetLang);

  const dispatch = useDispatch();
  const SearchValue = useRef(null);

  const fetchSearchMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        SearchValue?.current?.value +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json);

    dispatch(setSearchMovie(json.results));
  };

  function handleSearch() {
    dispatch(setSearchMovieName(SearchValue.current.value));
    fetchSearchMovie();
  }

  useEffect(() => {
    return function () {
      dispatch(setSearchMovie(null));
      dispatch(setSearchMovieName(null));
    };
  });

  return (
    <div>
      <div className="h-screen absolute w-full -z-20">
        <img
          className="absolute -z-10 md:fixed object-cover h-screen md:w-screen"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="login-page-img"
        />
      </div>
      <form
        className="absolute mt-48 bg-black w-full md:w-1/2 left-0 md:left-[20%] rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          className="w-8/12 my-2 p-2 mx-2 rounded-lg"
          type="text"
          ref={SearchValue}
          placeholder={lang[SetLang].placeholder}
        />
        <button
          className="mx-0 md:mx-2 my-2 px-2 p-2 bg-red-900 text-white rounded-md w-3/12"
          onClick={handleSearch}
        >
          {lang[SetLang].search_btn}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
