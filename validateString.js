var isValid = function (s) {

    let reverseString = ``;

    for (let i = s.length - 1; i >= 0; i--) {

        reverseString += s[i];

    }

    if (s == reverseString) {

        return true;

    } else {

        return false;

    }

};

let isValidResult = isValid("sharpener");

console.log(isValidResult);