// Only change code below this line
function* myGenerator() {
    yield* [1, 2, 3, 4, 5];
    yield* "arena";
    yield* arguments;
}

var iterator = myGenerator(6, 7, 8);

var generatorArray = [];

for(var i = 0; i < 13; i++ ){
  
    generatorArray.push(iterator.next().value); 
}

console.log(generatorArray);

// Only change code above this line
module.exports = { generatorArray, myGenerator };