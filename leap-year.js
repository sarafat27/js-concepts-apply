/*conditions of leap year:
1.year must be divisible by 4 & must'nt be divisible by 100
2.if divisible by 100,must be divisible by 400
*/

function isLeapYear(year) {
    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
        return true;
    }
    else {
        return false;
    }
}
const myYear = 2100;
const isMyYearLeapYear = isLeapYear(myYear);
console.log('my year is leap year:', isMyYearLeapYear);

const yourYear = 2024;
const isYourYearLeapYear = isLeapYear(yourYear);
console.log('your year is leap year:', isYourYearLeapYear);