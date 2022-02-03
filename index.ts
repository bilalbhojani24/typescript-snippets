export {};
/*
?  Impossible coercions
- TS only allows type assertions wjich convert to a more specific or less specific version of a type
- This rule prevents "impossible" coercions.
*/

// !Conversion of type 'string' to type 'number' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.
const car1 = ("Ford" as any) as number;
const car2 = ("Ford" as unknown) as number;
