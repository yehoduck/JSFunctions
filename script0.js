function calculate(number1, character, number2) {
    switch (character) {
        case "+":
            return number1 + number2;

        case "-":
            return number1 - number2;

        case "*":
            return number1 * number2;

        case "/":
            if (number2 === 0) {
                return null;
            }
            return number1 / number2;

        default:
            return null;
    }
}
console.group("Calculations")
console.log(calculate(2,"+", 4));
console.log(calculate(6,"-", 1.5));
console.log(calculate(-4,"*", 8));
console.log(calculate(49,"/", -7)); 
console.log(calculate(8,"m", 2)); 
console.log(calculate(4,"/",0));
console.groupEnd()