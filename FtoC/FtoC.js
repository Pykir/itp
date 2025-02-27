// set variables f for Fahrenheit and c for Celcius
let f = 99;
let c;

// ask user for fahrenheit input
f = parseFloat(prompt("What is the temperature in Fahrenheit?"));

// perform calculation with provided equation
c = (5*(f - 32))/9;

//print result
console.log(c);