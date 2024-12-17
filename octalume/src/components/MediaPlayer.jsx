import React from "react";

const MediaPlayer = ({ song }) => {
  return (
    <div className="bg-[#171717]  p-5 rounded-xl flex flex-col items-center">
      <h3 className="text-lg font-bold">{song}</h3>
      <div className="flex justify-between w-full mt-4">
        <button className="bg-green-400 px-4 py-2 rounded-lg">⏪</button>
        <button className="bg-green-400 px-4 py-2 rounded-lg">⏯</button>
        <button className="bg-green-400 px-4 py-2 rounded-lg">⏩</button>
      </div>
    </div>
  );
};

export default MediaPlayer;
