// define and initialize counter and printString
let counter = 1;
let printString = "";

// loop until counter hits 100, incremementing counter by 1 each loop. resets printString each loop as well.
// if counter is divisble by 3, add Fizz to the string
// if counter is divisible by 5, add Buzz to the string.
// check if string is empty, print counter if empty, otherwise print string.

while (counter < 100) {
	if (counter % 3 == 0) {
    	printString = printString + "Fizz";
	}
	if (counter % 5 == 0) {
		printString = printString + "Buzz";
    }
  	if (printString == ""){
		console.log(counter);
    } else {
		console.log(printString);
    }
  	counter += 1;
 	printString = "";
}