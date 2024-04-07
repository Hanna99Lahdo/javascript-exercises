const sumAll = function(numberA, numberB) {
    if(numberA < 0 || numberB < 0 ) return "ERROR";
    if(!Number.isInteger(numberA) || !Number.isInteger(numberB)) return "ERROR";
    
    let totalSum = 0 ;
    let sumStart = numberA > numberB ? numberB : numberA; 
    let sumEnd = numberA > numberB ? numberA : numberB ;


    for (let i = sumStart; i < sumEnd+1; i++) totalSum += i;
        
    return totalSum;
};

// Do not edit below this line
module.exports = sumAll;
