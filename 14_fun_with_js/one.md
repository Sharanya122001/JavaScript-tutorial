Closure means:
A function remembers variables from its outer function even after the outer function is finished.
Read that again slowly.
Even after outer function is DONE
Inner function still remembers its variables.
That memory is called Closure.


🎁 Simple Example (Magic Box Example)
function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }
  return inner;
}

const counter = outer();
counter();
counter();
counter();

Output:
1
2
3

😲 Wait… How?
Step by step:
outer() runs.
It creates count = 0.
It returns inner function.
outer() is finished ❌
But inner still remembers count.
That memory = Closure.
Even though outer is gone,
count is not destroyed.


🔐 Real Power of Closure (Data Privacy)

function bankAccount() {
  let balance = 1000;

  return {
    deposit(amount) {
      balance += amount;
      console.log("Balance:", balance);
    },
    withdraw(amount) {
      balance -= amount;
      console.log("Balance:", balance);
    }
  };
}

const account = bankAccount();
account.deposit(500);
account.withdraw(200);

Output:
Balance: 1500
Balance: 1300

Can you do this?
console.log(account.balance);
❌ No.
Because balance is private.
Closure protects it.


🧠 Why Closure Exists?
Because of:
Function inside function
Lexical scoping
JavaScript keeps memory of outer variables