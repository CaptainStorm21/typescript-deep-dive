
const oldCivic = {
  name: 'Civic',
  year: 2000,
  broken: true,
  manufactured: new Date(),
  summary(): string {
    return `Name: ${this.name}`;
  }
}

// Inefficient interface
const printVehicle = (vehicle:
  {
    name: string;
    year: number;
    broken: boolean;
  }): void => {
    
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken: ${vehicle.broken}`);
}
printVehicle(oldCivic);
// fixing annotation
// we are creating a new type each time we create a new interface

interface Vehicle {

  name: string;
  year: number;
  broken: boolean;
  manufactured: Date;
  summary(): string;
}

// in order to print this function we need to pass an object 'vehicle' that meets the specifications of the interface Vehicle
const printVehicle1 = (vehicle: Vehicle): void => {
    
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken: ${vehicle.broken}`);
}

printVehicle1(oldCivic);

const printVehicle2 = (vehicle: Vehicle): void => {
  console.log(vehicle.summary());
};


interface FourCar {
  
}

// Function in interfacee TS
const printVehicle3 = (vehicle: Vehicle): void => {
  console.log(vehicle.summary());
};