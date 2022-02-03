export {};
/*
?  Tuple types
- Just like array type
- tuples know how many items it contains
- tuples know which types are at which positions
- Tuples dont have representation in runtime

* USECASE
- Some APIs return arrays and the items could have their own meaning. We can use tuples.
*/

type CarDetailsTuple = [number, string, boolean];
const myCar: CarDetailsTuple = [2021, "BMW", true];

// example
function printCarDetails(myCar: CarDetailsTuple) {
  let [model, make, sedan] = myCar;
  // !Tuple type 'CarDetailsTuple' of length '3' has no element at index '3'.ts(2493)
  //   let cost = myCar[3];
}
printCarDetails(myCar);
