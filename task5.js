// Задание 5

const square = (x, n) => {
    let result = x;
    for (i=1; i<n; i++) {
        result *= x;
    }
    return result;
}

answer = square(5, 3)

console.log(answer)