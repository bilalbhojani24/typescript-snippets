export {};
/*
? Union types
* A union type is a type formed from two or more other types, representing values that may be any of those types. We refer to each of these types as union's members.
* Use the  |(pipe) operator to combine types
*/

// Example
function printCarModal(model: number | string) {
  console.log("My car is " + model);
}
printCarModal(2021);
printCarModal("2021");

// Example 2 :- When member don't support the common operator
function printCarModal2(model: string | number) {
  // !Property 'toUpperCase' does not exist on type 'string | number'.
  // ! As toUpperCase does not exist on number dataType and the solution is narrow down using if else
  if (typeof model === "string") {
    console.log("My car model is " + model.toUpperCase());
  } else {
    console.log("My car model is " + model++);
  }
}
printCarModal2(2022);
printCarModal2("2023");

// Example 3 :- When member supports common operation
function sliceTheInput(x: string[] | string) {
  //* No error bcoz slice methpd exist on both array and string
  console.log(x.slice(0, 1));
}
sliceTheInput(["Bilal", "Bhojani", "Typescript"]);
