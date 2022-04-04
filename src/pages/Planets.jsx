import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Loading from "../components/Loading";
import callSwapi from "../utils/callSwapi";
import getUrlIndex from "../utils/getUrlIndex";
import indexChange from "../utils/indexChange";

const Planets = () => {
  const [data, setData] = useState(null);
  const [index, setIndex] = useState(1);

  useEffect(() => {
    // for promise to work in useEffect. need to put async function inside then call it
    const fetchData = async () => {
      setData(null); // This is so we have loading screen while we wait for call when next/previous is pushed
      setData(await callSwapi("planets", index));
    };
    fetchData();
  }, [index]);

  return (
    <>
      <Header selected="planets" />
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
              {data?.results?.map((result, i) => {
                console.log(index);
                // added this conditin because api returns a planet with all unknown facts and want to get rid of it.

                return (
                  <Link
                    key={i}
                    to="/planet"
                    state={{
                      url: result.url,
                      // send the currect index to Person page based on which set of results is being returned (util function has the logic)
                      index: getUrlIndex(index, data.count, i),
                    }}
                  >
                    <div className="gridCellWithImages">
                      <img
                        className="gridCellImage"
                        src={require(`../images/planets/star-wars-planet-${getUrlIndex(
                          index,
                          data.count,
                          i
                        )}.jpg`)}
                        alt="movie backdrop"
                      />
                      <p className="gridCellInfo">
                        {getUrlIndex(index, data.count, i)}) {result.name}
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

export default Planets;
