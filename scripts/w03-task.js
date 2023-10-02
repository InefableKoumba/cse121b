/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2){
    return number1 + number2;
}

function addNumbers(){
    const value1 = Number(document.getElementById("add1").value);
    const value2 = Number(document.getElementById("add2").value);
    const sum = add(value1, value2);
    document.getElementById("sum").value = sum;
}

document.getElementById("addNumbers").addEventListener("click", addNumbers);
/* Function Expression - Subtract Numbers */
const subtract = function(number1, number2){
    return number1 - number2;
}

const  subtractNumbers = function(){
    const value1 = Number(document.getElementById("subtract1").value);
    const value2 = Number(document.getElementById("subtract2").value);
    const difference = subtract(value1, value2);
    document.getElementById("difference").value = difference;
}

document.getElementById("subtractNumbers").addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = function(number1, number2){
    return number1 * number2;
}

const  multiplyNumbers = function(){
    const factor1 = Number(document.getElementById("factor1").value);
    const factor2 = Number(document.getElementById("factor2").value);
    const product = multiply(factor1, factor2);
    document.getElementById("product").value = product;
}

document.getElementById("multiplyNumbers").addEventListener("click", multiplyNumbers);


/* Open Function Use - Divide Numbers */
function divide(number1, number2){
    return number1 / number2;
}

const  divideNumbers = function(){
    const dividend = Number(document.getElementById("dividend").value);
    const divisor = Number(document.getElementById("divisor").value);
    const quotient = divide(dividend, divisor);
    document.getElementById("quotient").value = quotient;
}

document.getElementById("divideNumbers").addEventListener("click", divideNumbers);


/* Decision Structure */
const currentDate = new Date();
let currentYear;
currentYear = currentDate.getFullYear();

document.getElementById("year").value = currentYear;

/* ARRAY METHODS - Functional Programming */

/* Output Source Array */
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13];
document.getElementById("array").innerHTML = numbersArray;


/* Output Odds Only Array */
const oddNumbersArray = numbersArray.filter(function(number){
    if(number % 2 !== 0) return number;
});
document.getElementById("odds").innerHTML = oddNumbersArray;

/* Output Evens Only Array */
const evenNumbersArray = numbersArray.filter(function(number){
    if(number % 2 === 0) return number;
});
document.getElementById("evens").innerHTML = evenNumbersArray;

/* Output Sum of Org. Array */
const sumOfArray = numbersArray.reduce(function(sum, currentValue){
    return sum + currentValue;
});
document.getElementById("sumOfArray").innerHTML = sumOfArray;
/* Output Multiplied by 2 Array */
document.getElementById("multiplied").innerHTML = numbersArray.map((number) => number * 2)
/* Output Sum of Multiplied by 2 Array */
const arrayMultipliedByTwo = numbersArray.map((number) => number * 2)
document.getElementById("sumOfMultiplied").innerHTML = arrayMultipliedByTwo.reduce((sum, number) => sum + number)
