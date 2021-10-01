// Only change code below this line
let shoppingList = new Map([
    ["Banana", 3],
    ["Pineapple", 5],
    ["Pear", 2],
    ["Carrot", 10],
    ["Apple", 1.5],
]);


var arrKey = [];

for (let key of shoppingList.entries()) {
    arrKey.push(`groceries: ${key[0]}`);
    
}
console.log(arrKey);

var arrValue = [];

for (let value of shoppingList.entries()) {
    arrValue.push(`amount: ${value[1]}`);   
}
console.log(arrValue);

for (let [key, value] of shoppingList.entries()) {
    console.log(`[ ${key}, ${value} ]`);    
}



// Only change code above this line

module.exports = { shoppingList, arrKey, arrValue};