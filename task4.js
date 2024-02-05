// Задание 4

let a = 5;
let b = 15;

let number = a;

const numbers = function() {
    console.log(number)
    number++;
}

const intervalId = setInterval(numbers, 1000)

setTimeout (function() {
    clearInterval(intervalId)
}, ((b - a + 2) * 1000))