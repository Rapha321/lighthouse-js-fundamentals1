

function merge(array1, array2) {
  let newArray = array1.concat(array2);
  newArray.sort();
  return newArray;
}



console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);



// Define a function merge, which, given two sorted arrays containing numbers,
// returns a sorted array of the numbers from both lists.

// code                                output
// merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]); [ 1, 2, 3, 4, 4, 5, 6 ]
// merge([ 4 ], [ 2, 5, 8 ]);          [ 2, 4, 5, 8 ]
// merge([ 1, 2, 6 ], []);             [ 1, 2, 6 ]