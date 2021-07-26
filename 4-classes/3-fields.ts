import { FormControl } from '@angular/forms';
class Vehicle {
  // color: string = 'red';
  // color: string;
  // constructor(
  //   color: string
  // ) {
  //   this.color = color;
  // }

  constructor(
    protected horsePower: string,
    private rims: number,
    public color: string) {

  }



/*   
So to do so, we could pass in the color as an argument to vehicle right here.
So maybe I'll do something like orange.
If we're going to pass in any arguments to this, we have to define a special function inside of the
class definition called the constructor.
So I'm going to write out constructor like so the constructor function is a very special function defined
inside of a class, any time that we define a constructor, it will be instantly executed, right when
we create a new instance of the class.
So as soon as we call new vehicle right here, the constructor function is going to run and the arguments
that function are going to be whatever we pass in when we create the instance.
So in this case would be a string of orange.
So we would probably want to receive that as an argument into the constructor of something like maybe
color with an annotation of string like so.
And then we'll tke that value and do some initial assignment with it inside the constructor, so we
would say this color is equal to color.
If we use this method of initializing color by defining the constructor, we do not have to initialize
it up here.
So it's usually an either or decision.
Either you are going to initialize a property on the same line that you define it or you're going to
initialize it inside the constructor.
*/


  protected honk(): void {
    console.log('beep beep')
  }
}

const vehicle = new Vehicle();
console.log(vehicle.color);
console.log(vehicle.horsePower);
console.log(vehicle.rims);

const sportsCar = new Vehicle('232', 4, 'green' )
console.log(sportsCar)

class FormulaCar {
 public competition: string = 'Italy Indy'
}

class F1Car extends FormulaCar {
  constructor(
    public competition
  ) {
    super();
  }
}