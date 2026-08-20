/**
 * Checks whether a person is of working age.
 * @param {number} age - Person's age.
 * @returns {boolean} True if the age is between 16 and 64.
 */
function isWorkingAgePerson(age) {
    return !(age < 16 || age > 64)
}
console.log(isWorkingAgePerson(64))
console.log(isWorkingAgePerson(17))
console.log(isWorkingAgePerson(-32))
console.log(isWorkingAgePerson(13))
console.log(isWorkingAgePerson(78))