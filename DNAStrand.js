
  function DNAStrand(dna){
    let pairArr = [];
let searchPair = function (char){
  switch (char){
case 'A':
pairArr.push(["T"]);
break;
case 'T':
pairArr.push(["A"]);
break;
case 'G':
pairArr.push(["C"]);
break;
case 'C':
pairArr.push(["G"]);
break;
}
}
for (let i = 0; i<dna.length; i++) {
   searchPair(dna[i])
}
return pairArr.join("")
}


console.log(DNAStrand("AAAA"))
