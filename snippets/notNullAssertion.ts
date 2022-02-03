export {};
/*
?  Not-null Assertion Operator (Postfix ! )
- 
*/

function printCarDetails(model: number | null) {
  // !Object is possibly 'null'.
  console.log(model!.toString()); // NOT SUGGESTED
  if (model) {
    console.log(model!.toString()); // SUGGESTED
  }
}

printCarDetails(null);
