export {};
/*
? literal types
- You can create a very specific type that can take only allowed values.
- You can create a mix and match of literal type and non literal types.
Explaination :- In decleration with const, it cannot be changed so this will not assign any type to the variable. While for others like let or var it will assign the default value based on the value which we assign to variable. 

Illustration:-
1. Hover on name = there will be no type assigned to variable
2. Hover on carModel = there will be number as type 
*/

type Bike = "BMW" | "Honda" | 2022;
const bike: Bike = "Honda";
const name = "Bilal";
let carModel = 2021;
