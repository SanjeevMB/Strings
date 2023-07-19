var mostWordsFound = function (sentences) {

    let maximum = -Infinity;

    for (let i = 0; i < sentences.length; i++) {

        let string = sentences[i];
        
        let words = string.split(` `);

        let wordsCount = words.length;

        if (wordsCount > maximum) {

            maximum = wordsCount;

        }

    }

    return maximum;

};

let mostWordsFoundResult = mostWordsFound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"]);

console.log(mostWordsFoundResult);