function b(){
    console.log(my); //5
}

function a(){
    var my=10;
    console.log(my); //10
    b();
}

var my=5;
a();

// Output:
// 10
// 5

/*
Explanation:
    In this code, we have two functions: `a` and `b`. 
    The variable `my` is declared in three different scopes: global, within function `a`, 
    and within function `b`.The function `b` accesses the `my` variable from its own scope, 
    which is the global scope in this case, because there is no local declaration of `my` within `b`.
    When we call function `a`, it first logs the value of `my` from its own scope (10),
    and then calls function `b`, which logs the value of `my` from the global scope (5).
    This demonstrates how JavaScript uses lexical scoping to determine variable access based on where functions are defined.
*/


function a1(){
    function b1(){
        console.log(my); //10
    }
    var my=10;
    b1();
}

var my=5;
a1();
// Output:
// 10
/*Explanation:
    In this code, we have a nested function `b1` inside function `a1`. 
    The variable `my` is declared in two different scopes: global and within function `a1`.
    When we call function `a1`, it first declares its own `my` variable with the value 10.
    Then, when `b1` is called, it looks for the `my` variable in its own scope first.
    Since `b1` does not have a local declaration of `my`, it looks up to the enclosing scope, which is `a1`,
    and finds the `my` variable with the value 10. Therefore, it logs 10 to the console.
    This example illustrates how nested functions can access variables from their parent function's scope.
*/