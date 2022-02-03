export {};
/*
? Special type | "void"
-  In Javascript, a function that doesn't return anything will implicitly return undefined.
- "void" and "undefined" are not same in Typescript
- void means function returns something but it will be void
*/

// undefined if we do not return anything in function - JS
// void if we do not return anything in function - TS
function printCarNameV1(): void {
  console.log("BMW");
}

let result = function printCarNameV2() {
  console.log("BMW V2");
};
