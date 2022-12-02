export {}; // This file needs to be a module.

const input = await Deno.readTextFile('../input.txt');
// const input = await Deno.readTextFile('../test.txt');
// const input = 'A Y\nB X\nC Z';

const lines = input.split('\n');

const scores = [];

for (const line of lines) {
  const score = gameScore(line);
  scores.push(score);
}

// console.log(scores);
console.log(scores.reduce((a, b) => a + b, 0));

function gameScore(input: string): number {
  switch (input) {
    case 'A X':
      return 3 + 1;
    case 'A Y':
      return 6 + 2;
    case 'A Z':
      return 0 + 3;

    case 'B X':
      return 0 + 1;
    case 'B Y':
      return 3 + 2;
    case 'B Z':
      return 6 + 3;

    case 'C X':
      return 6 + 1;
    case 'C Y':
      return 0 + 2;
    case 'C Z':
      return 3 + 3;

    default:
      console.error('default case used');
      return 0;
  }
}
