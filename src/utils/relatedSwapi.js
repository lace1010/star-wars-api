import callSingleSwapi from "./callSingleSwapi";

const relatedSwapi = async (data) =>
  // Waits for all of urls to return before returning array of all urls
  Promise.all(data.map((url) => callSingleSwapi(url)));

export default relatedSwapi;
