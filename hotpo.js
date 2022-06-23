let hotpo = function(n){
  if(n == 0|| n == 1) return 0; //Optional Handler to n = 0
  let sumIteration = 0;
   do{
     if (n % 2 == 0) {
       n = n / 2
     } else {
       n = 3*n + 1
     }
     sumIteration++
  }
  while (n != 1);
  return sumIteration
}
console.log(hotpo(100))
