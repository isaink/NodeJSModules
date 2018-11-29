const caps = (str) => {
  return str.charAt(0).toUpperCase() + " " + str;
};
const rev = (str) => {
  return str.split("").reverse().join("");
};

module.exports = {
  caps: caps,
  rev: rev
};
