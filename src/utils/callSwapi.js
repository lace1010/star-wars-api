// fetch swapApi data and set it to state
const callSwapi = async (option, index) => {
  const data = await fetch(`https://swapi.dev/api/${option}/?page=${index}`)
    .then((res) => {
      if (!res.ok) console.log(res.statusText);
      else {
        return res.json();
      }
    })
    .catch(console.error);

  return data;
};

export default callSwapi;
