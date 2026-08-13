/**
 * Checks if num1 is divisible by num2.
 * @param {number} num1 - First number.
 * @param {number} num2 - Second number.
 * @returns {boolean} True if num1 is divisible by num2.
 */
function checkMultiplicity(num1, num2) {
    if (num1 % num2 !== 0) {
        return false
    } else return true
}
console.log(checkMultiplicity(30, 3))
console.log(checkMultiplicity(-48, 6))
console.log(checkMultiplicity(22, 4))
console.log(checkMultiplicity(-13, 5))