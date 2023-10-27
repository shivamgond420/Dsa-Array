Arr = [1, 2, 34, 0, 0, 0, 6, 3, 5, 0];
let PushNum = [];        
function RemoveZero(n) {              
  for (let i = 0; i < n.length; i++) { 
    if (n[i] > 0) {          
      y = PushNum.push(n[i]); 
      // console.log(y); 
    }  
  }                                      
  for (let i = 0; i < n.length; i++) {
    if (n[i] < 0) { 
      
      z = PushNum.push(n[i]);
      // console.log(z)
    }
  }
  return y;
}
console.log(RemoveZero(Arr));