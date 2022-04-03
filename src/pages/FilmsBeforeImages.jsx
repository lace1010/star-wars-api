import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";
import Header from "../components/Header";
import callSwapi from "../utils/callSwapi";
import Footer from "../components/Footer";

const Films = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // for promise to work in useEffect. need to put async function inside then call it
    const fetchData = async () => {
      setData(await callSwapi("films", 1));
    };
    fetchData();
  }, []);

  return (
    <>
      <Header selected="films" />
      {/* films don't need index and buttons because there are only 6 films in sawpi */}
      {!data ? (
        <Loading />
      ) : (
        <div>
          <div className="gridContainer">
            <p className="mb-3 px-10 self-start">Total: {data.count}</p>
            <div className="gridWrapper">
              {data?.results?.map((result, i) => {
                return (
                  <div key={result.episode_id} className="gridCell">
                    <p>Title: {result.title}</p>
                    <p>Directed by: {result.director}</p>
                    <p>Producer: {result.producer}</p>
                    <p>Release Date: {result.release_date}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Films;
