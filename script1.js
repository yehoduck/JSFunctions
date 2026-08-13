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