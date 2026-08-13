/**
 * Checks whether a person is of working age.
 * @param {number} age - Person's age.
 * @returns {boolean} True if the age is between 16 and 64.
 */
function isWorkingAgePerson(age) {
    if (!(age < 16 || age > 64)) {
        return true
    } else return false
}
console.log(isWorkingAgePerson(64))
console.log(isWorkingAgePerson(17))
console.log(isWorkingAgePerson(-32))
console.log(isWorkingAgePerson(13))
console.log(isWorkingAgePerson(78))