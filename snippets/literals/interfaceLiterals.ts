export {};
/*
? literal interface
- In an object type, TS will infer a general type for its properties. Not the literals
- You can force this with "as" keyword .
Explaination :- In decleration with const, it cannot be changed so this will not assign any type to the variable. While for others like let or var it will assign the default value based on the value which we assign to variable. 
*/

const car = {
  make: "Honda" as "Honda" | "Maruti",
  model: 2009 as 2010 | 2021 | 2021,
};

car.make = "Maruti"