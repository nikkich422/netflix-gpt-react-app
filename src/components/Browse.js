import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import MainComponent from "./MainComponent";
import SecondaryComponent from "./SecondaryComponent";
import { useSelector } from "react-redux";
import GptContainer from "./GptContainer";

const Browse = () => {
  useNowPlayingMovies();
  const showGptSection = useSelector((store) => store.gpt.togglerGpt);

  return (
    <div>
      <Header />
      {showGptSection ? (
        <GptContainer />
      ) : (
        <>
          <MainComponent />
          <SecondaryComponent />
        </>
      )}
    </div>
  );
};

export default Browse;
