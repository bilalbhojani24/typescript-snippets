export {};
/*
? Example 1 - Creating own literal types with unions
 NOTE: The type boolean iitself is actually an alias for the union true | false;
*/

// Lets create our own literal type that can take few strings
let car: "Lamborgini" | "Honda" | "Ford" = "Honda";

// Ok
car = "Ford";

// ! Error = Type '"BMW"' is not assignable to type '"Lamborgini" | "Honda" | "Ford"'.
// car = "BMW"; // uncomment to check error
