export {};
/*
? Interfaces vs Type aliases | "Renaming primitives"
- Type alias used to rename primitives but interface cannot

! interface StringInterface = string; // error

*/

// Type alias is able to rename
type StringPrimitive = string;


// uncomment to see error
// Cannot rename primitive using interface
// interface StringInterface = string;
