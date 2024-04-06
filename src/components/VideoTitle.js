import React from "react";

const VideoTitle = ({ title, description }) => {
  // console.log(title);

  return (
    <div className="w-screen h-screen pt-[60%] md:pt-[15%] pl-5 md:pl-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="font-bold text-2xl md:text-6xl my-4 w-1/2 md:w-1/3">
        {title}
      </h1>
      <p className="hidden md:inline-block w-2/6 my-3">{description}</p>
      <div>
        <button className="my-1 md:my-2 p-2 px-8 md:px-24 bg-white hover:bg-opacity-80 rounded-lg text-black">
          Play
        </button>
        <button className="m-2 p-2 px-4 md:px-24 bg-gray-400 text-black hover:bg-opacity-80 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
