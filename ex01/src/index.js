let myArr = [];
// Only change code below this line

function* multiplication(x) {
    
  for(var i = 0; i < x; i++){
      x = x * 2;
      myArr.push(x);
      yield x;
     
  }
 
}


 var num = multiplication(3); 

 for(var i = 0; i < 3; i++) {
 console.log(num.next().value);
 }

 console.log(myArr);
//  for(var i = 0; i < 3; i++) {
//      console.log(num.next());
//  }
// Only change code above this line
module.exports = multiplication;