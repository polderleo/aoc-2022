export {}; // This file needs to be a module.

const input = await Deno.readTextFile('../input.txt');
// const input = await Deno.readTextFile('../test.txt');
// const input = 'A Y\nB X\nC Z';

const lines = input.split('\n');

const scores = [0];

for (const line of lines) {
  const tmp = line.split(' ');
  const score = playStrat(tmp[0], tmp[1]);
  scores.push(score);
}

function playStrat(a: string, b: string): number {
  switch (a) {
    case 'A': {
      switch (b) {
        case 'X':
          return 0 + 3; //playing Scissor loose
        case 'Y':
          return 3 + 1; //playing Rock
        case 'Z':
          return 6 + 2; //playing Paper wins
        default:
          console.warn('Fehler');
          return 0;
      }
    }
    case 'B': {
      switch (b) {
        case 'X':
          return 0 + 1; //playing Rock loose
        case 'Y':
          return 3 + 2; //playing Paper
        case 'Z':
          return 6 + 3; //playing Scissor wins
        default:
          console.warn('Fehler');
          return 0;
      }
    }
    case 'C':
      switch (b) {
        case 'X':
          return 0 + 2; //playing Paper loose
        case 'Y':
          return 3 + 3; //playing Scissor
        case 'Z':
          return 6 + 1; //playing Rock wins
        default:
          console.warn('Fehler');
          return 0;
      }
    default:
      console.warn('Fehler');
      return 0;
  }
}

console.log(scores.reduce((a, b) => a + b, 0));
