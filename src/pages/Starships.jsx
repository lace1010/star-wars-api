import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import callSwapi from "../utils/callSwapi";

const Starships = () => {
  const [data, setData] = useState(null);
  const [index, setIndex] = useState(1);

  useEffect(() => {
    // for promise to work in useEffect. need to put async function inside then call it
    const fetchData = async () => {
      setData(await callSwapi("starships", index));
    };
    fetchData();
  }, [index]);

  const indexClick = (option) => {
    const count = data.count;
    console.log(count);
    // if next button and index does not exceed results limit
    if (option === "next" && index * 10 < count) {
      setIndex(index + 1);
      console.log(index);
    } else if (option === "prev" && index > 1) {
      setIndex(index - 1);
    }
  };

  return (
    <>
      {!data ? (
        <Loading />
      ) : (
        <div className="gridContainer">
          <Link to="/" className="homeLink">
            Home
          </Link>

          <div className="indexButtonContainer">
            <button onClick={() => indexClick("prev")}>Prev</button>
            <p className="text-lg">Total: {data.count}</p>
            <button onClick={() => indexClick("next")}>Next</button>
          </div>

          <div className="gridWrapper">
            {data?.results?.map((result) => (
              <div key={result.name} className="gridCell">
                <p>Name: {result.name}</p>
                <p>Model: {result.model}</p>
                <p>Passengers: {result.passengers}</p>
                <p>Manufacturer: {result.manufacturer}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Starships;
