export {};
/*
?  Tuple with interface
- 
*/

interface CarDetailsTuple {
  length: 4;
  0: number;
  1: string;
  2: boolean;
  3: "India" | "US";
}
const myCar: CarDetailsTuple = [2021, "BMW", true, "India"];
console.log(myCar);
