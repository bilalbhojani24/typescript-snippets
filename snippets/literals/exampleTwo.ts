export {};
/*
? Example 2 - Creating own literal types with non-literals
 NOTE: The type boolean iitself is actually an alias for the union true | false;
*/

interface Car {
  make: string;
}

let myCar: Car | "Honda" | number | 2008 | boolean = {
  make: "Honda",
};

// OK
myCar = true;
myCar = "Honda";

// !Error => Type '"BMW"' is not assignable to type 'Car | "Honda"'
// myCar = "BMW"; // uncomment to see the error
