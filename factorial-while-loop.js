// function getFactorial(number) {
//     let factorial = 1;
//     let i = 1;
//     while (i <= number) {
//         factorial = factorial * i;
//         i++;
//     }
//     return factorial;
// }

// let myNumber = 3;
// let firstFactorial = getFactorial(myNumber);
// console.log('factorial of my number is:', firstFactorial);

// while loop reverse
// function getFactorial(number) {
//     let factorial = number;
//     let i = number - 1;
//     while (i >= 1) {
//         factorial = factorial * i;
//         i--;
//     }
//     return factorial;
// }

// let myNumber = 5;
// let firstFactorial = getFactorial(myNumber);
// console.log('factorial of my number is:', firstFactorial);

// for loop reverse
/* let factorial=1;
for(let i=5;i>=1;i--){
    factorial=factorial*i;
}
console.log(factorial); */
// or,

function getFactorial(number) {
    let factorial = number;
    for (i = number - 1; i >= 1; i--) {
        factorial = factorial * i;
    }
    return factorial;
}
let myNumber = 5;
let firstFactorial = getFactorial(myNumber);
console.log('factorial of my number is:', firstFactorial);