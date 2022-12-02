export {}; // This file needs to be a module.

const input = await Deno.readTextFile('../input.txt');

const elfBlocks = input.split('\n\n');

let mostCalories = 0;
let blockPosition = 0;

for (const block of elfBlocks) {
  const calories = block.split('\n').map((item) => parseInt(item, 10));
  const totalCalories = calories.reduce((a, b) => a + b, 0);

  if (totalCalories > mostCalories) {
    mostCalories = totalCalories;
    blockPosition = elfBlocks.indexOf(block);
  }
}

console.log(`Elf ${blockPosition + 1} has the most calories:`, mostCalories);
