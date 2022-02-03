export {};
/*
? Interfaces vs Type aliases | "Field addition"
- Field addition (extensibility) is possible with interface but cannot with type

! Duplicate identifier 'BikeType'
*/

// uncomment to see error

// type BikeType = {
//   make: string;
// };
// type BikeType = {
//   model: number;
// };

interface BikeInterface {
  make: string;
}

interface BikeInterface {
  model: number;
}
