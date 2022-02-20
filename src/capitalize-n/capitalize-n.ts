const capitalizeN = (s: string, n: number): string => {
  const alphaNumericRegex = /[a-zA-z0-9]/;
  let builtString = "";
  let alphaNumericCount = 0;
  Array.from(s).forEach((c) => {
    if (alphaNumericRegex.test(c)) {
      alphaNumericCount++;
      if (alphaNumericCount % n === 0) {
        //Nth character. Capitalizing
        builtString += c.toUpperCase();
      } else {
        builtString += c.toLowerCase();
      }
    } else {
      //Non alphanumberic. pushing
      builtString += c;
    }
  });
  return builtString;
};

export { capitalizeN };
