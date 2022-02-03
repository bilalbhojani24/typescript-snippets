export {};
/*
? Type aliases
- Aliases are names given to common types
- Used for reusing common types

*/

//* Primitice type alias
type ModelNumber = number;

function printCarModel(model: ModelNumber) {
  console.log(model);
}
printCarModel(2021);

//* union type alias
type Model = number | string;

// * Object type alias
type Car = {
  make: string;
  model: number;
  sedan: boolean;
};
function printCarDetails(myCar: Car) {
  console.log(`My car is ${myCar.make}`);
  console.log(`My car was launched ${myCar.model}`);
  if (myCar.sedan) {
    console.log(`My car is sedan`);
  } else {
    console.log(`My car is not sedan`);
  }
}

printCarDetails({ model: 2021, make: "Maruti", sedan: true });
