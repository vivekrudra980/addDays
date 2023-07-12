// Given an index.js file parallel to README.md file.
// Write a JS function that accepts days as an argument and return the date after given number of days from 22nd Aug 2020 using the date-fns package.
// Export the function using the default export syntax.
// Date Format
// DD-MM-YYYY
// Use Common JS module syntax.

const addDays = require("date-fns/addDays");
const dateAfterXDays = (days) => {
  const newDate = addDays(new Date(2020, 7, 22), days);
  return `${newDate.getDate()}-${
    newDate.getMonth() + 1
  }-${newDate.getFullYear()}`;
};
module.exports = dateAfterXDays;
