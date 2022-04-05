import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Loading from "../components/Loading";
import callSingleSwapi from "../utils/callSingleSwapi";
import relatedSwapi from "../utils/relatedSwapi";

const Vehicle = () => {
  const location = useLocation();
  const url = location.state.url;
  const index = location.state.index;
  const [data, setData] = useState(null);
  const [relatedFilms, setRelatedFilms] = useState(null);

  useEffect(() => {
    // for promise to work in useEffect. need to put async function inside then call it
    const fetchData = async () => {
      setData(await callSingleSwapi(url));
    };
    fetchData();
  }, [url]);

  // Find related films
  useEffect(() => {
    // for promise to work in useEffect. need to put async function inside then call it
    const fetchCharacters = async () => {
      // if data exist. set related characters array by calling utility function and wait for it
      if (data) {
        setRelatedFilms(await relatedSwapi(data.films));
      }
    };
    fetchCharacters();
  }, [data]);

  return (
    <>
      <Header selected="vehicles" />
      {!data ? (
        <Loading />
      ) : (
        <div className="singleContainer">
          <div className="singleInfoContainer">
            <img
              className="singleInfoImg"
              src={require(`../images/vehicles/star-wars-vehicle-${index}.jpg`)}
              alt="planet backdrop"
            />
            <div className="singleInfoText">
              <p className="font-bold">Name: {data.name}</p>
              <p>Model: {data.model}</p>
              <p className="w-fit">Manufacturer: {data.manufacturer}</p>
              <p>Cost in credits: {data.cost_in_credits}</p>
              <p>Length: {data.length}</p>
              <p>Max atmosphere speed: {data.max_atmosphering_speed}</p>
              <p>Crew: {data.crew}</p>
              <p>Passengers: {data.passengers}</p>
              <p>Consumables: {data.consumables}</p>
              <p>Vehicle class: {data.vehicle_class}</p>
            </div>
          </div>

          <div className="relatedContainer">
            {/* // films */}
            <div className="relatedWrapper col-span-2">
              <h2 className="relatedHeader">Films </h2>
              <div className="linksWrapper">
                {!relatedFilms ? (
                  <p>loading...</p>
                ) : (
                  relatedFilms?.map((film) => {
                    return (
                      <Link
                        className="relatedLink"
                        key={film.title}
                        to="/film"
                        state={{
                          url: film.url,
                          // Grab index by splitting url and grabbing number at end
                          index: film.episode_id,
                        }}
                      >
                        {film.title}
                      </Link>
                    );
                  })
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Vehicle;
