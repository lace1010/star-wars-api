const getUrlIndex = (index, count, i) => {
  return index * 10 <= count && index > 1
    ? (index - 1) * 10 + i + 1
    : index === 9 && i < 2
    ? 80 + i + 1
    : i + 1;
};

export default getUrlIndex;
