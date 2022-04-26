const ftoc = function(fInput) {
  var c;
  c = (fInput - 32)*(5/9);
  if((c.toFixed(1) - c.toFixed()) === 0){
    return(parseFloat(c.toFixed()));
  }
  else{
    return(parseFloat(c.toFixed(1)));
  }
};

const ctof = function(cInput) {
  var f;
  f = ((cInput*(9/5))+32);
  if((f.toFixed(1) - f.toFixed()) === 0){
    return(parseFloat(f.toFixed()));
  }
  else{
    return(parseFloat(f.toFixed(1)));
  }
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
