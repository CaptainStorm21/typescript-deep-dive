/*
Type inference 
variable declaration       Variable initiatlization
const color              =  'red'

if declaration and intializaton are on the same line,
TS wil figure out the type of 'color' that is in use
*/

/*
let apples; 
appleas = 5

let apples is assigned to "any"

*/

/* 

TS annotations
  when to use
      1. when we declare a var on one line then ini it later
      2. when we hwant a var to ahve a type that can't be inferred
      3. when a function returns the 'any' type and we need to specify a value

*/


// when a function returns the 'any' type and we need to specify a value

const json =' { "x": 10, "y": 20 } ';
// const cooordinates = JSON.parse(json);
// console.log(cooordinates);

// fixing 'any type'
const cooordinates: { x: number, y: number } = JSON.parse(json);
console.log(cooordinates);