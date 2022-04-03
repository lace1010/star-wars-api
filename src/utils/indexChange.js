const indexChange = (option, index, count) => {
  // if next/prev button and index does not exceed results limit
  if (option === "next" && index * 10 < count) {
    return index + 1;
  } else if (option === "prev" && index > 1) {
    return index - 1;
  } else return index;
};

export default indexChange;
