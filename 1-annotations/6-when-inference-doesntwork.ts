// When we want a var to have a type that can't be inferred

let numbers = [-10, -11, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++){
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}

