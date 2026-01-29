function calculatecartprice(...num1){
    return num1;
}

console.log(calculatecartprice(100,200,300,400,500)); // [ 100, 200, 300, 400, 500 ]


function calculatecartprice2(discount,...num2){
    return num2;
}
console.log(calculatecartprice2(10,100,200,300,400,500)); // [ 100, 200, 300, 400, 500 ]


const arr=[100,200,300,400,500];
function returnarr(arrray){
    return arrray[0];
}

console.log(returnarr(arr)); //100
console.log(returnarr([...arr])); //100, here we are using spread operator to create a new array
console.log(returnarr([100,200,300,400])); //100, here we are using slice to create a new array