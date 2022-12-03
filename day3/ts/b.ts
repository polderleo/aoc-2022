export {}; // This file needs to be a module.

const input = await Deno.readTextFile('../input.txt');
// const input = await Deno.readTextFile('../test.txt');

const lines = input.split('\n');

const backpackGroupSum: number[] = [];

for (let i = 0; i < lines.length; i += 3) {
    const matchingChar = findMatchingChar(lines[i], lines[i + 1], lines[i + 2]);
    if (!matchingChar) {
        console.log('No matching char found');
        break;
    }
    if ('A' <= matchingChar && matchingChar <= 'Z') {
        backpackGroupSum.push(matchingChar?.charCodeAt(0) - 38);
    } else {
        backpackGroupSum.push(matchingChar?.charCodeAt(0) - 96);
    }
}

function findMatchingChar(strA: string, strB: string, strC: string) {
    for (let i = 0; i < strA.length; i++) {
        for (let j = 0; j < strB.length; j++) {
            for (let k = 0; k < strC.length; k++) {
                if (strA[i] === strB[j] && strB[j] === strC[k]) {
                    return strA[i];
                }
            }
        }
    }
}

console.log(
    'Backpack group sum:',
    backpackGroupSum.reduce((a, b) => a + b, 0)
);
