import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Loading from "../components/Loading";
import callSingleSwapi from "../utils/callSingleSwapi";
import relatedSwapi from "../utils/relatedSwapi";

const Planet = () => {
  const location = useLocation();
  const url = location.state.url;
  const index = location.state.index;
  const [data, setData] = useState(null);
  const [residents, setResidents] = useState(null);
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
        const x = await relatedSwapi(data.films);
        setRelatedFilms(x);
      }
    };

    fetchCharacters();
  }, [data]);

  // Find planet residents
  useEffect(() => {
    // for promise to work in useEffect. need to put async function inside then call it
    const fetchCharacters = async () => {
      // if data exist. set related characters array by calling utility function and wait for it
      if (data) {
        const x = await relatedSwapi(data.residents);
        setResidents(x);
      }
    };

    fetchCharacters();
  }, [data]);

  return (
    <>
      <Header selected="planets" />
      {!data && !residents ? (
        <Loading />
      ) : (
        <div className="singleContainer">
          <div className="singleInfoContainer">
            <img
              className="object-cover max-h-[450px] md:max-h-[350px] w-full"
              src={require(`../images/planets/star-wars-planet-${index}.jpg`)}
              alt="planet backdrop"
            />
            <div className="bg-white text-gray-700 p-3 min-w-[400px]">
              <p className="font-bold">Name: {data.name}</p>
              <p>Rotation period: {data.rotation_period}</p>
              <p>Orbital period: {data.orbital_period}</p>
              <p>Diameter: {data.diameter}</p>
              <p>Climate: {data.climate}</p>
              <p>Gravity: {data.gravity}</p>
              <p>Terrain: {data.terrain}</p>
              <p>Surface water: {data.surface_water}</p>
              <p>Population: {data.population}</p>
            </div>
          </div>

          <div className="relatedContainer">
            {/* // films */}
            <div className="relatedWrapper col-span-2">
              <h2 className="relatedHeader">Films </h2>
              <div className="linksWrapper">
                {relatedFilms?.map((film) => {
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
                })}
              </div>
            </div>

            {/* residents */}
            {residents?.length !== 0 && (
              <div className="relatedWrapper col-span-1">
                <h2 className="relatedHeader">Residents</h2>
                <div className="linksWrapper">
                  {residents?.map((character, i) => {
                    const ind = character.url.split("/")[5];
                    return (
                      <Link
                        className="relatedLink"
                        key={character.name}
                        to="/person"
                        state={{
                          url: character.url,
                          // Grab index by splitting url and grabbing number at end
                          // Have to make condition bc api is broke at 17 for people
                          index:
                            character.url.split("/")[5] <= 17
                              ? ind
                              : parseInt(ind) - 1,
                        }}
                      >
                        {character.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Planet;
