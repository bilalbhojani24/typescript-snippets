export {};
/*
? Function Type
- The global type is denoted by function in Javascript
- It describes properties like bind, call, apply and other methods.
*/

function printCarDetails(callback: Function) {
  callback(2021, "BMW");
}

printCarDetails((model: number, make: string) => {
  console.log("Car model is " + model);
  console.log("Car company is " + make);
});
