import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptSuggestions from "./GptSuggestions";

const GptContainer = () => {
  return (
    <div>
      <GptSearchBar />
      <GptSuggestions />
    </div>
  );
};

export default GptContainer;
