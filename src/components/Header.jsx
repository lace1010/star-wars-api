import React from "react";
import { Link } from "react-router-dom";

const Header = ({ selected }) => {
  return (
    <div className="pt-7 px-7 lg:px-12 lg:pt-12 space-y-8 w-screen overflow-hidden">
      <h1 className="text-6xl md:text-8xl text-yellow-300 font-bold">
        Star Wars
      </h1>
      <div
        // if Home page hide the options because they're already showing
        className={`${
          selected === "home" && "hidden"
        } flex space-x-3 md:space-x-8 w-screen flex-wrap`}
      >
        <Link to="/" className="headerLink">
          Home
        </Link>
        <Link
          to="/films"
          className={`headerLink ${selected === "films" && "border-b-2"}`}
        >
          Films
        </Link>
        <Link
          to="/people"
          className={`headerLink ${selected === "people" && "border-b-2"}`}
        >
          People
        </Link>
        <Link
          to="/planets"
          className={`headerLink ${selected === "planets" && "border-b-2"}`}
        >
          Planets
        </Link>
        <Link
          to="/species"
          className={`headerLink ${selected === "species" && "border-b-2"}`}
        >
          Species
        </Link>
        <Link
          to="/starships"
          className={`headerLink ${selected === "starships" && "border-b-2"}`}
        >
          Starships
        </Link>
        <Link
          to="/vehicles"
          className={`headerLink ${selected === "vehicles" && "border-b-2"}`}
        >
          Vehicles
        </Link>
      </div>
    </div>
  );
};

export default Header;
