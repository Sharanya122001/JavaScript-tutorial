let a=10;
var b=9;
const r=5;


//{}// this is called scope
// what we  are declaring in the global can go inside the scoe,
// but what we are declaring in the scope should not go out of the scope
console.log(a);
console.log(b);
console.log(r);


// scope part 2
//nested function

function one(){
    const username="sharanya"
    function two(){
        const output="website"
        console.log(username);
    }
    //console.log(output) // this is taking from the inside function,scope limits here
    two()
}
one()
//when there is a nested function child can access only the parent variables not vicevera

//hosting means moving the declaration to the top during execution

//console.log(s(4,5));
function s(a,b){
    return a+b;
}

const sum=function(a1,b1)
{
    return a1+b1;
}
console.log(sum(2,3))

