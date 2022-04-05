import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Loading from "../components/Loading";
import callSingleSwapi from "../utils/callSingleSwapi";
import relatedSwapi from "../utils/relatedSwapi";
import smallRomanNum from "../utils/smallRomanNum";

const Film = () => {
  const location = useLocation();
  const url = location.state.url;
  const index = location.state.index;
  const [data, setData] = useState(null);
  const [relatedCharacters, setRelatedCharacters] = useState(null);
  const [relatedPlanets, setRelatedPlanets] = useState(null);
  const [relatedSpecies, setRelatedSpecies] = useState(null);

  useEffect(() => {
    // for promise to work in useEffect. need to put async function inside then call it
    const fetchData = async () => {
      setData(await callSingleSwapi(url));
    };
    fetchData();
  }, [url]);

  // Find related characters and planets
  useEffect(() => {
    // for promise to work in useEffect. need to put async function inside then call it
    const fetchCharacters = async () => {
      // if data exist. set related characters array by calling utility function and wait for it
      if (data) {
        setRelatedCharacters(await relatedSwapi(data.characters));
        setRelatedPlanets(await relatedSwapi(data.planets));
        setRelatedSpecies(await relatedSwapi(data.species));
      }
    };
    fetchCharacters();
  }, [data]);

  return (
    <>
      <Header />
      {!data && !relatedCharacters && !relatedPlanets ? (
        <Loading />
      ) : (
        <div className="singleContaier">
          <div className="singleInfoContainer">
            <img
              className="singleInfoImg"
              src={require(`../images/movies/star-wars-${index}.jpg`)}
              alt="movie backdrop"
            />
            <div className="singleInfoText">
              <p className="font-bold">
                Episode {smallRomanNum(index)}: {data.title}
              </p>
              <p>Director: {data.director}</p>
              <p>Producers: {data.producer}</p>
              <p>Release Date: {data.release_date}</p>
              <p className="sm:text-sm md:text-base">
                Opening Crawl: {data.opening_crawl}
              </p>
            </div>
          </div>

          {/* related info */}
          <div className="relatedContainer">
            {/* related wrapper 1 */}
            <div className="relatedWrapper col-span-2">
              <h2 className="relatedHeader">Characters </h2>
              <div className="linksWrapper">
                {!relatedCharacters ? (
                  <p>loading...</p>
                ) : (
                  relatedCharacters?.map((character) => {
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
                  })
                )}
              </div>
            </div>

            {/* related wrapper 2 */}
            <div className="relatedWrapper col-span-1">
              <h2 className="relatedHeader">Planets </h2>
              <div className="linksWrapper">
                {!relatedPlanets ? (
                  <p>loading...</p>
                ) : (
                  relatedPlanets?.map((planet) => {
                    const ind = planet.url.split("/")[5];
                    return (
                      <Link
                        className="relatedLink"
                        key={planet.name}
                        to="/planet"
                        state={{
                          url: planet.url,
                          // Grab index by splitting url and grabbing number at end
                          index: ind,
                        }}
                      >
                        {planet.name}
                      </Link>
                    );
                  })
                )}
              </div>
            </div>

            {/* wrapper 3 */}

            <div className="relatedWrapper col-span-2 mt-10">
              <h2 className="relatedHeader">Species </h2>
              <div className="linksWrapper">
                {!relatedSpecies ? (
                  <p>loading...</p>
                ) : (
                  relatedSpecies?.map((species) => {
                    const ind = species.url.split("/")[5];
                    return (
                      <Link
                        className="relatedLink"
                        key={species.name}
                        to="/singspecies"
                        state={{
                          url: species.url,
                          // Grab index by splitting url and grabbing number at end
                          index: ind,
                        }}
                      >
                        {species.name}
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

export default Film;
