export {};
/*
?  Tuple with optional parameter
- Tuple can only have one and only one optional parameter. It can be only last one
*/

type PlaneDetailsTuple = [number, string, boolean?];
const myPlan: PlaneDetailsTuple = [2021, "Indian Airlines", true];
const myPlanv2: PlaneDetailsTuple = [2021, "Indian Airlines"];
