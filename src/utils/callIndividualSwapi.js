const callIndividualSwapi = async (url) => {
  const data = await fetch(url)
    .then((res) => {
      if (!res.ok) console.log(res.statusText);
      else {
        return res.json();
      }
    })
    .catch(console.error);

  return data;
};

export default callIndividualSwapi;
