export {};
/*
? The Object Types
- 
*/

interface Car {
  make: string;
  model: number;
  average?: number;
}
// consider the following function that takes ibject as an arguement
function printCarDetails(carObj: Car) {
  console.log(`My car was launched in ${carObj.model}`);
  console.log(`My car manufacturer is ${carObj.make}`);
  if (carObj.average) {
    console.log(`My car average is ${carObj.average}`);
  }
}

printCarDetails({ make: "Hyundai", model: 2016, average: 12.6 });
printCarDetails({ make: "Maruti", model: 2015 });
