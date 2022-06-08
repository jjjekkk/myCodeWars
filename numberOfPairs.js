 function numberOfPairs(gloves){
    let sortGloves = gloves.slice(0);
  const countItems = sortGloves.reduce((acc, item) => {
  acc[item] = acc[item] ? acc[item] + 1 : 1; 
  return acc;
}, {});

const result = Object.keys(countItems).filter((item) => Math.floor(countItems[item]/2)>0);
return result.length; 
}

console.log(numberOfPairs(['gray','gray','red']))
