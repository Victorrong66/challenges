
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

/* Write a function called addNumbers that takes a number as input
and adds up every number from 1 to that number, then prints the total.

Example:
addNumbers(3) → 6  (because 1 + 2 + 3 = 6)
addNumbers(5) → 15 (because 1 + 2 + 3 + 4 + 5 = 15) */

function addNumbers(numAdd) {
    let total = 0;

    for (let i = 1; i <= numAdd; i++) {
        total = total + i;
    }
    console.log(total);
}

addNumbers(6);

/* Write a function called addEvenNumbers that takes a number as input
and adds up only the EVEN numbers from 1 to that number, then prints the total.

Example:
addEvenNumbers(6)  → 12 (because 2 + 4 + 6 = 12)
addEvenNumbers(10) → 30 (because 2 + 4 + 6 + 8 + 10 = 30) */

function addEvenNumbers(numEvenNum) {
    let total = 0;

    for (let i = 1; i <=numEvenNum; i++) {
        if (i % 2 === 0) {
            total = total + i;
        }
    }
    console.log(total);
}

addEvenNumbers(6);

/* Write a function called addOddNumbers that takes a number as input
and adds up only the ODD numbers from 1 to that number, then prints the total.

Example:
addOddNumbers(6)  → 9  (because 1 + 3 + 5 = 9)
addOddNumbers(10) → 25 (because 1 + 3 + 5 + 7 + 9 = 25) */

function addOddNum(oddNum) {
    let total = 0;

    for (let i = 1; i <= oddNum; i++) {
        if (i % 2 !== 0) {
            total = total + i;
        }
    }
    console.log(total);
}

addOddNum(6);

/* Self test */
function addEvenNum(evenNum2) {
    let total = 0;

    for (let i = 1; i <= evenNum2; i++) {
        if (i % 2 === 0) {
            total = total + i;
        }
    }
    console.log(total);
}

addEvenNum(6);

/* Write a function called reverseGreeting that takes a name as input
and prints the name backwards followed by "is your name!"

Example:
reverseGreeting("Victor") → "rotciV is your name!"
reverseGreeting("John")   → "nhoJ is your name!" */

function reverseGreeting(name) {
    let string = '';

    console.log('What is your name?');
    string = name.split('').reverse().join('');

    console.log(string + ' is your name!');
}

reverseGreeting("Victor");

/* Write a function called greetUser that asks the user for their name
using prompt() and then prints a personalized greeting.

Example:
→ User types "Victor"
→ Console prints "Hello Victor! Nice to meet you!" */

function greetUser() {
    let name = prompt('What is your name?');
    
    console.log('Hello ' + name + '! Nice to meet you!')
}

greetUser();