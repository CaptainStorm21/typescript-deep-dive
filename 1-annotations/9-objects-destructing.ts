/** 
 * destructing object
 */

const profile = {
  name: 'alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 23,
  },
  setAge(age: number) : void {
    this.age = age;
  }
}

const { age }: { age: number } = profile;
const { age }: { age: number; name: string } = profile;

const { coords: { lat, lng } }: { coords: { lat: number; lng: number } } = profile;

