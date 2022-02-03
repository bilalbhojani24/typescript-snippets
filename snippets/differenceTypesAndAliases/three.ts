export {};
/*
? Interfaces vs Type aliases | "Extensibility"
- We can extend the interface using "extends" keyword.
- We can extend the type aliases using "&" operator 

*/

interface CarInterface {
  make: string;
  model: number;
}
interface MustangInterface extends CarInterface {
  drift: boolean;
}
const myCar1: MustangInterface = {
  make: "Ford",
  model: 2003,
  drift: true,
};

type CarType = {
  make: string;
  model: number;
};

type MustangType = CarType & {
  drift: boolean;
};

const myCar2: MustangType = {
  make: "Ford",
  model: 2003,
  drift: true,
};

console.log(myCar1);
console.log(myCar2);
