import React from "react";
import chewbacca from "../images/chewbacca.png";

const Loading = () => {
  return (
    <div className="fixed top-0 h-screen min-h-[500px] w-full flex items-center justify-center bg-[url('../images/star-wars-bg.jpeg')] mix-blend-soft-light">
      <img
        className="h-52 object-contain  animate-spin "
        src={chewbacca}
        alt="chewbacca head"
      />
    </div>
  );
};

export default Loading;
