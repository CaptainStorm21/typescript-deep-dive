/*  

public - this method can be called any where any time

private - this method can be only called by other methods in this class

protected - this method can be called by other methods in "this" class or by other methods in child classes

*/

class Vehicle {

  public drive(): void {
    console.log(' chugga chuga');
  }

  public honk(): void {
    console.log('beep beep');
  }

  private testDrive(): void {
    console.log('Test drive me!')
  }

    //will not work 
  public color(): void {
    console.log('This car is only available in red');
  }

    wheels(): void {
      console.log('This car is only has 4 wheels ')
  }

  // will not work with a child use
  // private engine(): void {
  //   console.log('This car has a weak engine')
  // }

    protected engine(): void {
    console.log('This car has a weak engine')
  }
}


class Car extends Vehicle {

  public drive(): void {
    console.log('vroom vroom')
  }

  private speed(): void {
    console.log('This car has 400 horse power')
  }
  testDrivingThis(): void {
    this.speed();
  }

  //will not work 
  private color(): void {
    console.log('This car is only available in black')

  }
  
  private wheels(): void {
    console.log('this car has 2 wheels')
  }

  private totalCar(): void {
    this.color();
    this.testDrivingThis();
    this.engine();
  }


}

const car = new Car();
car.drive();
car.honk();
car.testDrivingThis();
car.color();
car.wheels();
car.totalCar();


