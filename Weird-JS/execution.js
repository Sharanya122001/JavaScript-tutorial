// function a(){
//     console.log('Function a executed');
//     var b = 10;
// }

// function c(){
//     console.log('Function c executed');
//     a();
// }

// c();
// var b = 20;

function b(){
    var my;
    console.log(my); //undefined
}

function d(){
    var my=2;
    console.log(my); //2
    b();
}

var my=5;
console.log(my); //5
d();