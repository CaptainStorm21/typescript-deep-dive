/* 
  Type arrays
*/

const carMakers: string[] = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

//Help with inference when extracting values

const car = carMakers[0];
const myCar = carMakers.pop();

// prevent from incomparable value
// carMakers.push(100);
// error

// Help with map
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

