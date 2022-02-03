export {};
/*
? Special type | "unknown"
-  It is similar to "any" type
- It is "little bit" safer than "any" type
- 
*/

let a: unknown = document.getElementById("my-element");

// You can do whatever you want with "any" type
function getLatestCarModelV1(models: any) {
  return models[0];
}

// You can do whatever you want with "unknown" type
// Hence it is safer
function getLatestCarModelV2(models: unknown) {
  return models[0];
}

getLatestCarModelV1(["2020", "2019", "2018"]);
