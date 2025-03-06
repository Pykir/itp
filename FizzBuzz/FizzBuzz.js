// define initial counter
let counter = 1;

// while loop with conditionals checking if the number is divisible by 3, 5 or both.
// increments by 1 at the end of the loop, loop ends when counter reaches 100. 

while (counter < 100) {
	if (counter % 3 == 0) {
		if (counter % 5 == 0){
			console.log("FizzBuzz");
		} else {
			console.log("Fizz");
		}
	} else {
		if (counter % 5 == 0) {
			console.log("Buzz");
		} else {
			console.log(counter);
		}
	}
  counter += 1;
}