function century(year) {
  if (year%100===0){
    return year/100
  }
  return Math.floor((year/100)+1);
}
console.log(century(1799))
