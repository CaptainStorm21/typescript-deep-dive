// when to use type arrays
// any time we need to represent a collection of record with some arbitary sort 

/*
Tuple 

an array-like structure where each element
represents some property of a record
*/

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
}

const pepsi = [
  'brown',
  true,
  40
]

// the order has to be consistent  color = brown .. carbonated = true, sugar = 40
const cocacola: [string, boolean, number] = ['brown', true, 40];

// alias 
type Drink = [
  string, boolean, number
]

const cherrycocacola: Drink = ['chocolate', true, 23];
const tea: Drink = ['light yellow', false, 10]






