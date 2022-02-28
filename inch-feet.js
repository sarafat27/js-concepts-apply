// var inches = 156;
// var feet = inches / 12;
// console.log(feet);

function inchToFeet(inches) {
    var feet = inches / 12;
    return feet;
}
var myInches = 156;
var feet = inchToFeet(myInches);
console.log('My inches in feet is:', feet)

var hisInches = 168;
var feet = inchToFeet(hisInches);
console.log('his inches in feet is:', feet)

// miles to km
function mileToKm(miles) {
    var km = miles * 1.61;
    return km;
}

var marathon = mileToKm(26.2);
console.log('marathon in km is:', marathon);