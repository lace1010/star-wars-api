import React from "react";
import chewbacca from "../images/loading/chewbacca.png";

const Loading = () => {
  // leaning towards keeping the bg pic out
  // deciding if I want to keep these classes bg-[url('../images/loading/star-wars-bg.jpeg')] mix-blend-hard-light Or soft light
  return (
    <div className="fixed top-0 h-screen min-h-[700px] w-full flex items-center justify-center mix-blend-hard-light">
      <img
        className="h-52 object-contain  animate-spin "
        src={chewbacca}
        alt="chewbacca head"
      />
    </div>
  );
};

export default Loading;
