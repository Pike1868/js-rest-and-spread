/* 1
# ****Rest / Spread Operator Exercises****

In this exercise, you’ll refactor some ES5 code into ES2015.

## **Given this function:**


function filterOutOdds() {
  var nums = Array.prototype.slice.call(arguments);
  return nums.filter(function(num) {
    return num % 2 === 0
  });
}
## ****Refactor it to use the rest operator & an arrow function:****


/* Write an ES2015 Version */

function filterOutOdds(...nums) {
  let result = nums.filter((num) => num % 2 === 0);
  return result;
}

/* 2
## **findMin**

Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.

Make sure to do this using the rest and spread operator.
*/

const findMin = (...nums) => {
  return Math.min(...nums);
};

/* 3
## **mergeObjects**

Write a function called ***mergeObjects*** that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.
*/

const mergeObjects = (obj1, obj2) => {
  let newObj = { ...obj1, ...obj2 };
  return newObj;
};

/* 4
## **doubleAndReturnArgs**

Write a function called ***doubleAndReturnArgs*** which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of additional arguments doubled.


doubleAndReturnArgs([1,2,3],4,4) // [1,2,3,8,8]
doubleAndReturnArgs([2],10,4) // [2, 20, 8]
*/

const doubleAndReturnArgs = (arr, ...args) => {
  let doubledArr = args.map((arg) => {
    return arg * 2;
  });
  let result = [...arr, ...doubledArr];
  return result;
};

/*
 ## **Slice and Dice!**

For this section, write the following functions using rest, spread and refactor these functions to be arrow functions!

Make sure that you are always returning a new array or object and not modifying the existing inputs. */

// remove a random element in the items array and return a new array without that item.

const removeRandom = (items) => {
  let i = Math.floor(Math.random() * items.length);
  let newArray = items.toSpliced(i, 1);
  return newArray;
};

//Return a new array with every item in array1 and array2.

const extend = (array1, array2) => {
  return [...array1, ...array2];
};

// Return a new object with all the keys and values from obj and a new key/value pair

let example = { name: "Luis", age: 29 };

const addKeyVal = (obj, key, val) => {
  let newObj = { ...obj };
  newObj[key] = val;
  return newObj;
};

// Return a new object with a key removed.

const removeKey = (obj, key) => {
  let result = { ...obj };
  delete result[key];
  return result;
};

// Combine two objects and return a new object.

const combine = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
};

// Return a new object with a modified key and value.

const update = (obj, key, val) => {
  let result = { ...obj };
  result[key] = val;
  return result;
};
