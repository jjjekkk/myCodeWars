function oddOrEven(array) {
    let sum = array.reduce((a,v)=>a+v, 0);
    if (sum%2===0){
      return 'even'
    } else {
      return 'odd'
    }
  }