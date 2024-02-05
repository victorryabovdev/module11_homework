// Задание 2

function number(n) {
    if (n > 1000) {
        result = "Данные неверны."
    } else if (n === 0) {
        result = "Введённое число является нулём."
    } else if (n === 1) {
        result = "Введённое число является единицей."
    } else if (n >= 2) {
        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                result = "Введённое число не является простым."
                return result
            }
        }
      result = "Введённое число является простым."
    }
    return result
}

let a = number(71)

console.log(a)