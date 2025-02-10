const removeFromArray = function(arrayIn) {
    var indexes = [], i, j;
    const arrayOut = arrayIn;
    for (j = 0; j < arguments.length - 1; j++) {
        for (i = 0; i < arrayOut.length; i++)
            if (arrayOut[i] === arguments[j + 1])
                indexes.push(i);
    }
    indexes.sort()
    for (i = indexes.length -1; i >= 0; i--)
        arrayOut.splice(indexes[i], 1);
    return arrayOut
};

// Do not edit below this line
module.exports = removeFromArray;
