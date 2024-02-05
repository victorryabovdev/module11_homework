// Задание 3

function number1(a) {
    return function(b) {
        return a + b
    }
}

let number2 = number1(5)

sum = number2(7)

console.log(sum)