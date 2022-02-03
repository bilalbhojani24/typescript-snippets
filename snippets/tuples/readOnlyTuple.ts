export {};
/*
?  A readonly tuple
- It means we cannot re-assign any property of index
- approachh 1 :- using "readonly" as a keyword
*/

// * method 1
type RaceCarTuple = readonly [number, string];
const raceCar: RaceCarTuple = [2021, "BMW"];
// raceCar[1] = "Lambo";

// * method 2
let carDetails = [2021, "BMW"] as const;
// carDetails[1] = "Lambo";
