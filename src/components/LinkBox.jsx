import React from "react";
import { Link } from "react-router-dom";

const LinkBox = ({ link, src }) => {
  return (
    <Link
      className="relative capitalize h-52 w-[350px] bg-cover bg-no-repeat rounded-xl shadow-lg shadow-gray-800 hover:scale-105 hover:brightness-75 transition-all duration-150 ease-in-out"
      to={link}
      style={{ backgroundImage: `url('${src}')` }}
    >
      <p className="absolute bottom-10 p-2 w-full bg-[rgba(0,0,0,.8)] text-center text-3xl font-bold text-red-600 tracking-wider capitalize">
        {link}
      </p>
    </Link>
  );
};

export default LinkBox;
