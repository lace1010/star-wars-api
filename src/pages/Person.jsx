import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Loading from "../components/Loading";
import callSingleSwapi from "../utils/callSingleSwapi";

const Person = () => {
  const location = useLocation();
  const url = location.state.url;
  const index = location.state.index;
  const [data, setData] = useState(null);

  useEffect(() => {
    // for promise to work in useEffect. need to put async function inside then call it
    const fetchData = async () => {
      setData(await callSingleSwapi(url));
    };
    fetchData();
  }, [url]);

  return (
    <>
      <Header selected="people" />
      {!data ? (
        <Loading />
      ) : (
        <div className="singleContainer">
          <div className="singleInfoContainer">
            <img
              className="object-cover max-h-[450px] md:max-h-[350px] w-full"
              src={require(`../images/people/star-wars-person-${index}.jpg`)}
              alt="movie backdrop"
            />
            <div className="bg-white text-gray-700 p-3 min-w-[400px]">
              <p className="font-bold">Name: {data.name}</p>
              <p>Height: {data.height}</p>
              <p>Mass: {data.mass}</p>
              <p>Skin Color: {data.skin_color}</p>
              <p>Eye Color: {data.eye_color}</p>
              <p>Gender: {data.gender}</p>
              <p>Birth year: {data.birth_year}</p>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Person;
