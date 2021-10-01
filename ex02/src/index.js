// only change code below this line
function* myGenerator() {
    function* insideGenerator1() {
        for(var i = 1; i <= 5; i++){  
            x = i + "#";  
            yield x;
        }  
     }
     yield* insideGenerator1();

     function* insideGenerator2() {
        for(var i = 10; i <= 15; i++){   
            x = i + "#";
            yield x;
        }  
     }
     yield* insideGenerator2();

     function* insideGenerator3() {
        for(var i = 6; i <= 9; i++){ 
            x = i + "#";
            yield x;
        }  
     }
     yield* insideGenerator3();
     
}


var iterator = myGenerator();

var fifteenArray = [];


//var length = iterator.length;
for(var i = 0; i < 15; i++ ){
  
    fifteenArray.push((iterator.next().value)); 

}

fifteenArray.push((iterator.next().value)+ "!");

console.log(fifteenArray);


// Only change code above this line
module.exports = { fifteenArray, myGenerator};

