export {};
/*
?  specifying rest parameter
-
*/

type CarTuple = [number, string, ...number[]];
const myCar: CarTuple = [2021, "BMW", 123, 234, 345];

function printCarDetails(myCar: CarTuple) {
  console.log(myCar[3]);
}

printCarDetails(myCar);
