export {}; // This file needs to be a module.

const input = await Deno.readTextFile('../input.txt');
// const input = await Deno.readTextFile('../test.txt');

const lines = input.split('\n');

let overleapSum = 0;

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
        (elf2_low <= elf1_high && elf1_high <= elf2_high) ||
        (elf1_low <= elf2_high && elf2_high <= elf1_high)
    ) {
        // console.log('line: ', line);
        overleapSum++;
    }
});

console.log('Overleap sum: ', overleapSum);
