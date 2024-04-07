const removeFromArray = function(arr, ...removeValues) {
   return arr.filter((value)=> !removeValues.includes(value) )
};

// Do not edit below this line
module.exports = removeFromArray;
