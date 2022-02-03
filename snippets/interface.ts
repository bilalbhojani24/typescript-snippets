export {};
/*
? Interfaces
- Interface is another way to name Object types
*/

// type Car = {
//     model: string | number,
//     make: string,
//     sedan : boolean
// }

interface Car {
  model: string | number;
  make: string;
  sedan: boolean;
  accelerate: () => void;
  decelerate(): void;
}

function printCarDetails(myCar: Car) {
  console.log(`My car is ${myCar.make}`);
  console.log(`My car was launched ${myCar.model}`);
  if (myCar.sedan) {
    console.log(`My car is sedan`);
  } else {
    console.log(`My car is not sedan`);
  }
  myCar.accelerate();
  myCar.decelerate();
}

printCarDetails({
  model: 2021,
  make: "Maruti",
  sedan: true,
  accelerate: () => console.log("accelerate"),
  decelerate: () => console.log("decelerate"),
});
