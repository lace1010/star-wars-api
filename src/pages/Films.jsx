import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import callSwapi from "../utils/callSwapi";

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
      {/* films don't need index and buttons because there are only 6 films in sawpi */}
      {!data ? (
        <Loading />
      ) : (
        <div className="gridContainer">
          <Link to="/" className="homeLink">
            Home
          </Link>

          <p className="mb-3">Total: {data.count}</p>
          <div className="gridWrapper">
            {data?.results?.map((result) => {
              console.log(result);
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
      )}
    </>
  );
};

export default Films;
