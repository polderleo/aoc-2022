export {}; // This file needs to be a module.

// const input = await Deno.readTextFile('../input.txt');
const input = await Deno.readTextFile('../test.txt');

console.log(input);

const lines = input.split('\n');

console.log(lines);

let fullOverleapSum = 0;

lines.forEach((line) => {
    const [elf1_low, elf1_high] = line
        .split(',')[0]
        .split('-')
        .map((x) => parseInt(x));

    const [elf2_low, elf2_high] = line
        .split(',')[1]
        .split('-')
        .map((x) => parseInt(x, 10));

    if (
        (elf1_low <= elf2_low && elf1_high >= elf2_high) ||
        (elf2_low <= elf1_low && elf2_high >= elf1_high)
    ) {
        // console.log('overlap', line, elf1_low, elf1_high, elf2_low, elf2_high);
        fullOverleapSum++;
    }
});

console.log('Overleap sum: ', fullOverleapSum);
