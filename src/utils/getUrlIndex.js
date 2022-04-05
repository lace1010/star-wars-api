const getUrlIndex = (index, count, i, result) => {
  // if items don't exceed count
  if (index * 10 <= count && index > 1) {
    return (index - 1) * 10 + i + 1;
  }
  // for people version. Only add 2. If not for this we loop through 8 undefined results. This stops that error.
  else if (index === 9 && i < 2) {
    return (index - 1) * 10 + i + 1;
  }
  // Same reason for starships as people version, (goes before people because has lower amount of cards to display in last index page)
  else if (index === 4 && i < 6) {
    return (index - 1) * 10 + i + 1;
  }
  // Same reason for species as people version,
  else if (index === 4 && i < 7 && result) {
    return (index - 1) * 10 + i + 1;
  } else {
    return i + 1;
  }
};

export default getUrlIndex;
