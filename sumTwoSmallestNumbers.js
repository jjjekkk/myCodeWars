
function sumTwoSmallestNumbers(numbers) {  
    const result = numbers.filter(item => item > 0) .sort((a, b) => a - b);
    return result[0]+result[1];
  }
console.log(sumTwoSmallestNumbers([1,7,55,66,-2,23]))