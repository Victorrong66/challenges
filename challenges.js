
/* Write a function called greet that takes a person's name as input
and prints "Hello, [name]! Welcome to JavaScript!" to the console.

Example:
greet("Victor") → "Hello, Victor! Welcome to JavaScript!" */

function greet(name) {
    console.log('Hello, ' + name + '! Welcome to Javascript!');
}

greet('Victor');

/* Write a function called multiply that takes two numbers as inputs
and prints the result of multiplying them together.

Example:
multiply(4, 5)  → 20
multiply(3, 10) → 30 */

function multiply(a, b) {
    console.log(a * b);
}

multiply(2, 4);

/* Write a function called isEven that takes a number as input
and prints "Even" if the number is even, and "Odd" if it is not.

Example:
isEven(4)  → "Even"
isEven(7)  → "Odd"
isEven(10) → "Even" */

function isEven(num) {
    if(num % 2 === 0) {
        console.log('Even');
    }
    else {
        console.log('Odd');
    }
}

/* Write a function called countUp that takes a number as input
and prints every number from 1 up to that number.

Example:
countUp(5) → 1
             2
             3
             4
             5 */

isEven(4);
isEven(5);

function countUp(numCount) {
    for (let i = 1; i <= numCount; i++) {
        console.log(i);
    }
}

countUp(5);

/* Write a function called countDown that takes a number as input
and prints every number from that number DOWN to 1.

Example:
countDown(5) → 5
               4
               3
               2
               1 */

function countDown(numCount2) {
    for (let i = numCount2; i > 0; i--) {
        console.log(i);
    }
}

countDown(6);