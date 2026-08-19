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

function mult(n, m) { // замість paperwork стоїть mult, бо писав у вскоді не орієнтуючись на вихідний код з codewars
    if (n < 0 || m < 0) {
        return 0
    } else return n * m
}
console.group("Multiplications")
console.log(mult(4, 7))
console.log(mult(-5, 10))
console.log(mult(6, -3))
console.groupEnd