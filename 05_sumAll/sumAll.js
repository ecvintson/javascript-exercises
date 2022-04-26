const sumAll = function(numOne, numTwo) {
    let sum = 0;
    
    if(numOne > numTwo){
        [numOne, numTwo] = [numTwo, numOne];
    }

    if(numOne < 0 || numTwo < 0){
        return("ERROR");
    }
    else if (typeof numOne !== 'number' || typeof numTwo !== 'number'){
        return("ERROR");
    }
    else{
      for (i = numOne; i <= numTwo; i++){
           sum = sum + i;
        }  
    return sum;
        }
};

// Do not edit below this line
module.exports = sumAll;
