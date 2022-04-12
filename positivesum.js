//sum of postive numbers

const positiveSum = function (numbers) {
  let total = 0;
  for (let i = 0; i<numbers.length; i++){
    if (numbers[i] > 0) {
      total += numbers[i];
    }
  }
  return(total)
}

module.exports = positiveSum
