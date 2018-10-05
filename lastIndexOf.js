function lastIndexOf(array, value) {
  let pos = array.lastIndexOf(value);
  return pos;
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);





// Define a function lastIndexOf, which, given an array and a
// value, returns the index of the last time the value occurs
// in the array. If the value never occurs, the function should
// return -1.


// code                                  output
// lastIndexOf([ 0, 1, 4, 1, 2 ], 1);    3
// lastIndexOf([ 0, 1, 4, 1, 2 ], 2);    4
// lastIndexOf([ 0, 1, 4, 1, 2 ], 3);    -1
// lastIndexOf([ 5, 5, 5 ], 5);          2
// lastIndexOf([], 3);                   -1

// Note: JavaScript has a .indexOf function (which does
// something similar), but you may not use it in this exercise.