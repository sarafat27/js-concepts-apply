function isMoonUp(time) {
    if (time >= 19 || time <= 5) {
        return true;
    }
    return false;
}
var moonStatus = isMoonUp(23);
console.log(moonStatus)
