const palindromes = function (inputString) {
  let newString = inputString.replace(/\W/g, "");
  let newArr = [];
  for (let i = 0; i <= newString.length; i++) {
    newArr[i] = newString[newString.length - i];
  }
  let palind = newArr.join("").toLowerCase();
  let check = newString.toLowerCase();
  console.log(check);
  if (check == palind) {
    return true;
  } else return false;
};
// Do not edit below this line
module.exports = palindromes;
