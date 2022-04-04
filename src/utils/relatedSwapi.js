import callSingleSwapi from "./callSingleSwapi";

const relatedSwapi = (data) => {
  let relatedArray = [];
  data.map(async (url) => {
    const related = await callSingleSwapi(url);
    relatedArray.push(related);
  });
  return relatedArray;
};

export default relatedSwapi;
