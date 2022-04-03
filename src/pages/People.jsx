import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Loading from "../components/Loading";
import callSwapi from "../utils/callSwapi";
import indexChange from "../utils/indexChange";

const People = () => {
  const [data, setData] = useState(null);
  const [index, setIndex] = useState(1);

  // set data by calling api
  useEffect(() => {
    // for promise to work in useEffect. need to put async function inside then call it
    const fetchData = async () => {
      setData(null); // This is so we have loading screen while we wait for call when next/previous is pushed
      setData(await callSwapi("people", index));
    };
    fetchData();
  }, [index]);

  return (
    <>
      <Header selected="people" />
      {!data ? (
        <Loading />
      ) : (
        <div>
          <div className="gridContainer">
            <div className="indexButtonContainer">
              <button
                onClick={() => setIndex(indexChange("prev", index, data.count))}
              >
                Prev
              </button>
              <p className="text-lg">Total: {data.count}</p>
              <button
                onClick={() => setIndex(indexChange("next", index, data.count))}
              >
                Next
              </button>
            </div>

            <div className="gridWrapper">
              {data?.results?.map((result) => (
                <div key={result.name} className="gridCell">
                  <p>Name: {result.name}</p>
                  <p>Birthyear: {result.birth_year}</p>
                  <p>Height: {result.height} cm</p>
                  <p>Mass: {result.mass}</p>
                </div>
              ))}
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default People;
