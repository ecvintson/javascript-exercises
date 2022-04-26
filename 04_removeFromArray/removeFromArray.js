const removeFromArray = function(inputArray) {
    let args = Array.from(arguments);
    inputArray = args[0];

    for (let i = 1; i < args.length; i++){

            inputArray = inputArray.filter(newArray => {return newArray !== (args[i])});
    }

    return(inputArray);
};

// Do not edit below this line
module.exports = removeFromArray;
