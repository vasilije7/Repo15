function printManyTimes(str) {
  "use strict";
  // Only change code below this line
  const sentence = str + " is cool!";
  for (let i = 0; i < str.lenght; i += 2) {
    console.log(sentence);
  }
  return sentence;
  // Only change code above this line
}
printManyTimes("Arena");
module.exports = printManyTimes;
