import React from "react";

const Box = ({ color, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`w-full aspect-square ${color} border border-gray-300 cursor-pointer hover:opacity-80`}
    ></div>
  );
};

export default Box;