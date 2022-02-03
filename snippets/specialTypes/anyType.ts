export {};
/*
? Special type | "any"
- any can take any value 
- any can be assigned with any value
*/

// example 1
let car: any = "Maruti";
car = "Honda";
car = 291;
let drift: boolean = true;
car = drift;
console.log(car);

// example 2
let bike: any = {
  make: "Honda",
  model: 2009,
  sedan: false,
};

// you can modify
bike.accelerate = () => console.log("accelerate...");

// you can assign different type
bike = "BMW";

// Even assigning it to wrong type will not cause error
const myBike: number = bike;
console.log(myBike);
