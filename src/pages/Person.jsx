import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Loading from "../components/Loading";
import callSingleSwapi from "../utils/callSingleSwapi";
import relatedSwapi from "../utils/relatedSwapi";

const Person = () => {
  const location = useLocation();
  const url = location.state.url;
  const index = location.state.index;
  const [data, setData] = useState(null);
  const [relatedFilms, setRelatedFilms] = useState(null);
  const [homeWorld, setHomeworld] = useState(null);

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
        setHomeworld(await callSingleSwapi(data.homeworld));
      }
    };
    fetchCharacters();
  }, [data]);

  return (
    <>
      <Header selected="people" />
      {!data && !homeWorld ? (
        <Loading />
      ) : (
        <div className="singleContainer">
          <div className="singleInfoContainer">
            <img
              className="singleInfoImg"
              src={require(`../images/people/star-wars-person-${index}.jpg`)}
              alt="movie backdrop"
            />
            <div className="singleInfoText">
              <p className="font-bold">Name: {data.name}</p>
              <p>Homeworld: {homeWorld ? homeWorld.name : "loading... "}</p>
              <p>Height: {data.height}</p>
              <p>Mass: {data.mass}</p>
              <p>Skin Color: {data.skin_color}</p>
              <p>Eye Color: {data.eye_color}</p>
              <p>Gender: {data.gender}</p>
              <p>Birth year: {data.birth_year}</p>
            </div>
          </div>

          {/* related info */}
          <div className="relatedContainer">
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

export default Person;
