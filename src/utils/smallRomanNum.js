// Have an actual roman numeral converter, but this seemed faster as only dealing with 6 numbers.
const smallRomanNum = (number) => {
  let result = number;
  switch (number) {
    case 1:
      result = "I";
      break;
    case 2:
      result = "II";
      break;
    case 3:
      result = "III";
      break;
    case 4:
      result = "IV";
      break;
    case 5:
      result = "V";
      break;
    case 6:
      result = "VI";
      break;
    default:
      result = number;
  }
  return result;
};

export default smallRomanNum;
