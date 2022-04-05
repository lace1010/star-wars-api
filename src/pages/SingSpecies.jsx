import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Loading from "../components/Loading";
import callSingleSwapi from "../utils/callSingleSwapi";
import relatedSwapi from "../utils/relatedSwapi";

const SingSpecies = () => {
  const location = useLocation();
  const url = location.state.url;
  const index = location.state.index;
  const [data, setData] = useState(null);
  const [people, setPeople] = useState(null);
  const [relatedFilms, setRelatedFilms] = useState(null);

  useEffect(() => {
    // for promise to work in useEffect. need to put async function inside then call it
    const fetchData = async () => {
      setData(await callSingleSwapi(url));
    };
    fetchData();
  }, [url]);

  // Find people
  useEffect(() => {
    // for promise to work in useEffect. need to put async function inside then call it
    const fetchCharacters = async () => {
      // if data exist. set related characters array by calling utility function and wait for it
      if (data) {
        setPeople(await relatedSwapi(data.people));
        setRelatedFilms(await relatedSwapi(data.films));
      }
    };
    fetchCharacters();
  }, [data]);
  return (
    <>
      <Header />
      {!data ? (
        <Loading />
      ) : (
        <div className="singleContainer">
          <div className="singleInfoContainer">
            <img
              className="singleInfoImg"
              src={require(`../images/species/star-wars-species-${index}.jpg`)}
              alt="planet backdrop"
            />
            <div className="singleInfoText">
              <p className="font-bold">Name: {data.name}</p>
              <p>Language: {data.language}</p>
              <p>Classification: {data.classification}</p>
              <p>Designation: {data.designation}</p>
              <p>Average lifespan: {data.average_lifespan}</p>
              <p>Average height: {data.average_height}</p>
              <p>Skin colors: {data.skin_colors}</p>
              <p>Hair colors: {data.hair_colors}</p>
              <p>Eye colors: {data.eye_colors}</p>
            </div>
          </div>

          <div className="relatedContainer">
            {/* // films */}
            <div className="relatedWrapper col-span-2">
              <h2 className="relatedHeader">Films</h2>
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

            {/* people */}
            <div className="relatedWrapper col-span-1">
              <h2 className="relatedHeader">Characters </h2>
              <div className="linksWrapper">
                {!people ? (
                  <p>loading...</p>
                ) : (
                  people?.map((character) => {
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
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default SingSpecies;
