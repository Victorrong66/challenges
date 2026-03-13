function greet(name) {
    console.log('Hello, ' + name + '! Welcome to Javascript!');
}

greet('Victor');

function multiply(a, b) {
    console.log(a * b);
}

multiply(2, 4);

function isEven(num) {
    if(num % 2 === 0) {
        console.log('Even');
    }
    else {
        console.log('Odd');
    }
}

isEven(4);
isEven(5);

function countUp(numCount) {
    for (let i = 1; i <= numCount; i++) {
        console.log(i);
    }
}

countUp(5);
