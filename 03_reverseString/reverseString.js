const reverseString = function(stringIn) {
    const arrayStringIn = stringIn.split("");
    const arrayStringOut = [];
    for (let i = 0; i < stringIn.length; i++)  arrayStringOut.push(arrayStringIn.pop());
    return arrayStringOut.join("")
};

// Do not edit below this line
module.exports = reverseString;
