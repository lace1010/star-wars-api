import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Loading from "../components/Loading";
import callIndividualSwapi from "../utils/callIndividualSwapi";
import smallRomanNum from "../utils/smallRomanNum";

const Film = () => {
  const location = useLocation();
  const url = location.state.url;
  const index = location.state.index;

  const [data, setData] = useState(null);

  useEffect(() => {
    // for promise to work in useEffect. need to put async function inside then call it
    const fetchData = async () => {
      setData(await callIndividualSwapi(url));
    };
    fetchData();
  }, [url]);

  console.log(data);

  return (
    <>
      <Header />
      {!data ? (
        <Loading />
      ) : (
        <div className="flex flex-col sm:flex-row mt-10 h-full mx-5 shadow-lg shadow-gray-800 max-w-5xl md:mx-auto">
          <img
            className="object-cover max-h-[500px] w-full"
            src={require(`../images/movies/star-wars-${index}.jpg`)}
            alt="movie backdrop"
          />
          <div className="bg-white text-gray-700 p-3 flex-grow">
            <p className="font-bold">
              Episode {smallRomanNum(index)}: {data.title}
            </p>
            <p>Director: {data.director}</p>
            <p>Producers: {data.producer}</p>
            <p>Release Date: {data.release_date}</p>
            <p className="text-sm md:text-base">
              Opening Crawl: {data.opening_crawl}
            </p>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Film;
