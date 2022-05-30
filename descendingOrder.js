
    function descendingOrder(n){
  let num = 0;
  let arr = String(n).split("");
  function sortEggsInNest(a, b) {
if (a < b) {
return 1;
} else if (b < a) {
return -1;
} else {
return 0;
}
}
  return Number(arr.sort(sortEggsInNest).join(''));
}
  console.log(descendingOrder(79706))
