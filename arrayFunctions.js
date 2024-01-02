/**
 * isArrayLengthOdd(numbers):
 * - receives array `numbers`
 * - returns true if array has an odd number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthOdd([1, 2, 3]) -> true
 * isArrayLengthOdd([1, 2, 3, 4]) -> flase
 */
function isArrayLengthOdd(numbers) {
  // Your code here
  let x = numbers;
  if (x.length % 2 != 0) {
    console.log("Odd Length");
    return true;
  } else {
    console.log("Not Odd Length");
    return false;
  }
}

/**
 * isArrayLengthEven(numbers):
 * - receives array `numbers`
 * - returns true if array has an even number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthEven([1, 2, 3]) -> false
 * isArrayLengthEven([1, 2, 3, 4]) -> true
 */
function isArrayLengthEven(numbers) {
  // Your code here
  let x = numbers;
  if (x.length % 2 == 0) {
    console.log("Even length");
    return true;
  } else {
    console.log("Not even Length");
    return false;
  }
}
let x = [1, 2, 3, 4];
let y = [1, 2, 3, 4, 5, 6, 7];
let xTestOdd = isArrayLengthOdd(x);
let yTestOdd = isArrayLengthOdd(y);
let xTestEven = isArrayLengthEven(x);
let yTestEven = isArrayLengthEven(y);
isArrayLengthOdd(x);
isArrayLengthOdd(y);
isArrayLengthEven(x);
isArrayLengthEven(y);
/**
 * addLailaToArray(instructors):
 * - receives array `instructors`
 * - returns a new array that's a copy of array `instructors` with additional string "Laila"
 *
 * e.g.
 * addLailaToArray(["Mshary", "Hasan"]) -> ["Mshary", "Hasan", "Laila"]
 */
let testAddLaila = ["Mshary", "Hasan"];
function addLailaToArray(instructors) {
  return instructors.push("Laila");

  // Your code here
}
addLailaToArray(testAddLaila);
console.log(testAddLaila);
/**
 * eliminateTeam(teams):
 * - receives array `teams`
 * - removes the last element from the array and return it
 *
 * e.g.
 * eliminateTeam(["Brazil", "Germany", "Italy"]) -> "Italy"
 */
function eliminateTeam(teams) {
  // Your code here
  return teams.pop();
}
let testTeamPop = ["Brazil", "Germany", "Italy"];
let ttest = eliminateTeam(testTeamPop);
console.log(ttest);

/**
 * secondHalfOfArrayIfItIsEven(fruits):
 * - receives array `fruits`
 * - returns a new array that's the second half of the original array if it has an even number of elements
 * - returns an empty array if it has an odd number of elements
 *
 * e.g.
 * secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"]) -> ["banana", "kiwi"]
 * secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi", "blueberry"]) -> []
 */
function secondHalfOfArrayIfItIsEven(fruits) {
  // Your code here
  if (isArrayLengthEven(fruits)) return fruits.slice(fruits.length / 2);
  else return [];
}
secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"]);
let fruitsTestEven = secondHalfOfArrayIfItIsEven([
  "apple",
  "orange",
  "banana",
  "kiwi",
]);
let fruitsTestOdd = secondHalfOfArrayIfItIsEven([
  "apple",
  "orange",
  "banana",
  "kiwi",
  "blueberry",
]);
console.log(fruitsTestEven);
console.log(fruitsTestOdd);
/**
 * youGottaCalmDown(shout):
 * - receives a string `shout`
 * - returns the string `shout` with at most one exclamation mark (!) at the end.
 *
 * e.g.
 * youGottaCalmDown("HI!!!!!!!!!!") -> "HI!"
 * youGottaCalmDown("Taylor Schwifting!!!!!!!!!!!") -> "Taylor Shwifting!"
 * youGottaCalmDown("Hellooooo") -> "Hellooooo"
 *
 * Hint:
 * - Use number method .indexOf()
 * - Use string method .slice()
 */
function youGottaCalmDown(shout) {
  // Your code here
  if (shout.indexOf("!")) return shout.slice(0, shout.indexOf("!"));
  else return shout;
}
console.log(youGottaCalmDown("HI!!!!!!!!!!"));
console.log(youGottaCalmDown("Taylor Schwifting!!!!!!!!!!!"));
console.log(youGottaCalmDown("Hellooooo"));
// const ab = ["a"];
// ab = ["b"];
// console.log(ab);

// ab.forEach(console.log);
