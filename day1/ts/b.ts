export {}; // This file needs to be a module.

const input = await Deno.readTextFile('../input.txt');

const elfBlocks = input.split('\n\n');

let mostCalories = 0;

const caloriesAmount = [];

for (const block of elfBlocks) {
  const calories = block.split('\n').map((item) => parseInt(item, 10));
  const totalCalories = calories.reduce((a, b) => a + b, 0);

  caloriesAmount.push(totalCalories);

  if (totalCalories > mostCalories) {
    mostCalories = totalCalories;
  }
}

console.log(
  'Total Calories of the Top 3 Elves:',
  caloriesAmount
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((a, b) => a + b, 0)
);
