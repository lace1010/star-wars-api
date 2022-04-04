import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";
import Header from "../components/Header";
import callSwapi from "../utils/callSwapi";
import Footer from "../components/Footer";
import smallRomanNum from "../utils/smallRomanNum";
import { Link } from "react-router-dom";

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
              {data?.results?.map((result) => {
                return (
                  <Link
                    key={result.episode_id}
                    to="/film"
                    state={{ url: result.url, index: result.episode_id }}
                  >
                    <div className="gridCellWithImages">
                      <img
                        className="gridCellImage"
                        src={require(`../images/movies/star-wars-${result.episode_id}.jpg`)}
                        alt="movie backdrop"
                      />
                      <p className="gridCellInfo">
                        Episode {smallRomanNum(result.episode_id)}:{" "}
                        {result.title}
                      </p>
                    </div>
                  </Link>
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
