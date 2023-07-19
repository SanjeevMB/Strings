var extractNumber = function (s) {

    let numsWithoutChar = ``;

    for (let i = 0; i < s.length; i++) {

        if (Number.isInteger(+s[i])) {

            numsWithoutChar += s[i];

        } else {

            numsWithoutChar += `*`;

        }

    }

    let numsArrayWithSpace = numsWithoutChar.split('*');

    let numsArray = [];

    for (let i = 0; i < numsArrayWithSpace.length; i++) {

        if (Number(numsArrayWithSpace[i])) {

            numsArray.push(Number(numsArrayWithSpace[i]));

        }

    }

    return numsArray;

}

let extractNumberResult = extractNumber(`abv345fjjf123tyir45jf6th`);

console.log(extractNumberResult);