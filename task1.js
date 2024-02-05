// Задание 1

const arr = [0, null, 1, true, 2, false, 3, "string", 4, undefined, 5, 0.5]

const numbersArr = arr.filter(el => typeof el === 'number')

function getIntСharacters() {

    odd = 0
    even = 0
    zeros = 0
    float = 0
    
    for (let i = 0; i < numbersArr.length; i++) {
        if (numbersArr[i] == 0) {
            console.log("Элемент является нулём.")
            zeros += 1
        } else if (numbersArr[i] % 2 == 0) {
            console.log("Число "+ numbersArr[i] + " чётное.")
            even += 1
        } else if (numbersArr[i] % 2 == 1) {
            console.log("Число "+ numbersArr[i] + " нечётное.")
            odd += 1
        } else {
            console.log("Число "+ numbersArr[i] + " не является целым.")
            float += 1
        }
    }
    
    console.log("Количество нулей в массиве: " + zeros)
    console.log("Количество чётных чисел в массиве: " + even)
    console.log("Количество нечётных чисел в массиве: " + odd)
    console.log("Количество чисел с плавающей точкой в массиве: " + float)

}

getIntСharacters()