export {}; // This file needs to be a module.

const input = await Deno.readTextFile('../input.txt');
// const input = await Deno.readTextFile('../test.txt');
const lines = input.split('\n');

function splitAt(str: string, index: number) {
    const result = [str.slice(0, index), str.slice(index)];
    return result;
}

function findMatchingChar(strA: string, strB: string) {
    for (let i = 0; i < strA.length; i++) {
        for (let j = 0; j < strB.length; j++) {
            if (strA[i] === strB[j]) {
                return strA[i];
            }
        }
    }
}

const backpackSum: number[] = [];

lines.forEach((line) => {
    const [a, b] = splitAt(line, line.length / 2);
    const matchingChar = findMatchingChar(a, b);
    if (!matchingChar) {
        console.log('No matching char found');
        return;
    }
    if ('A' <= matchingChar && matchingChar <= 'Z') {
        backpackSum.push(matchingChar?.charCodeAt(0) - 38);
    } else {
        backpackSum.push(matchingChar?.charCodeAt(0) - 96);
    }
});

console.log(
    'Backpack sum:',
    backpackSum.reduce((a, b) => a + b, 0)
);
