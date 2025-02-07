const repeatString = function(stringIn, n) {
    let stringOut = ""
    if (n >= 0) {
        for (let i = 0; i < n; i++) {
            stringOut += stringIn;
        }
    } else {
        return 'ERROR'
    }
    return stringOut
};

// Do not edit below this line
module.exports = repeatString;
