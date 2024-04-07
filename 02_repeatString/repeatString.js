const repeatString = function(string = '', num = 0) {
    if (num < 0) return "ERROR";
    
    return string.repeat(num);
};
// Do not edit below this line
module.exports = repeatString;
