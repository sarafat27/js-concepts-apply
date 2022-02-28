// const number = 4;
// const remainder = number % 2;
// console.log(remainder == 0);
/*
check even
function isEven(number) {
    if (number % 2 == 0) {
        return true;
    }
    return false;
}

const myNumber = 0;
const isMyNumberEven = isEven(myNumber);
console.log('is my number even:', isMyNumberEven);
*/

// check odd
function isOdd(number) {
    if (number % 2 != 0) {
        return true;
    }
    return false;
}

const myNumber = 34;
const isMyNumberOdd = isOdd(myNumber);
console.log('is my number odd:', isMyNumberOdd);