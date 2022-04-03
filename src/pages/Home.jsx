import React from "react";
import LinkBox from "../components/LinkBox";
import filmsSRC from "../images/home-bgs/films-bg.png";
import peopleSRC from "../images/home-bgs/darth-vader.png";
import planetsSRC from "../images/home-bgs/star-wars-planet.png";
import speciesSRC from "../images/home-bgs/star-wars-species.png";
import starshipsSRC from "../images/home-bgs/star-wars-ships.png";
import vehicleSRC from "../images/home-bgs/star-wars-vehicle.png";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header selected="home" />
      <div className="mt-16 px-5 flex justify-center items-center">
        <div className="grid  grid-cols-1 md:grid-cols-2 xl:grid-cols-3 min-h-[400px] gap-4 xl:gap-10">
          <LinkBox link="films" src={filmsSRC} />
          <LinkBox link="people" src={peopleSRC} />
          <LinkBox link="planets" src={planetsSRC} />
          <LinkBox link="species" src={speciesSRC} />
          <LinkBox link="starships" src={starshipsSRC} />
          <LinkBox link="vehicles" src={vehicleSRC} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
