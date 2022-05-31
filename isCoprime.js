
    function isCoprime(x,y) {
      while(y) {
    let t = y;
    y = x % y;
    x = t;
  }
  if(x===1){
      return true
    } else {
      return false
    }
    }
    console.log(isCoprime(21,27))
