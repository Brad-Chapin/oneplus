function onePlus (arr) {
  for (let i = 0; i < arr.length; i++){
    arr[i]++;
  }
  let sum = arr.reduce (function (a, b){
    return a+b;
  },0);
  return sum;
}

module.exports = {
  onePlus : onePlus
};
