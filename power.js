let result = 1;
let counter = 0;

while (counter < 10) {
  result = result * 2;
  counter = counter + 1;
}

console.log(result);


//ABOVE CAN ALSO BE WRITTEN USING FOR LOOP:
let result = 1;

for (let counter = 0; counter < 10; counter +=1) {
  result = result * 2;
}

console.log(result);
