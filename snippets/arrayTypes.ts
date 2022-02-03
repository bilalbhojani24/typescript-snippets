//? Array type

//* Can be declared by adding brackets[] to type names.

const cars: string[] = ["Hyundai", "suzuki", "BMW"];
const numbers: number[] = [1, 2, 3];
const answers: boolean[] = [true, false];

function printCarModels(models: number[]): number {
  models.forEach((element) => {
    console.log(element);
  });
  let upcomingModel = models[0] + 1;
  return upcomingModel;
}

let upcomingModel = printCarModels([2021, 2022, 2023]);
console.log(upcomingModel);
