// classes

class Vehicle {

  drive(): void {
    console.log(' chugga chugga')
  }

  honk(): void {
    return console.log('honk honk')
  }
}


class Car  extends Vehicle {
  
  drive(): void {
    console.log('Gone in 60 seconds')
  }

}

// const vehicle = new Vehicle();

// vehicle.drive();
// vehicle.honk();

const car = new Car();

car.drive();
car.honk();
