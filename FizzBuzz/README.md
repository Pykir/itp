## FizzBuzz

#### Process:

The requirement was to step through each number between 1 and 100, and check if it was divisible by 3, 5, or both. Each of these conditions has a different output. 

Approach 1:
Define counter variable.
Loop and incremement.
In loop, check if the counter is divisible by 3. If yes, is it divisible by 5? If yes, print FizzBuzz, otherwise print just Fizz. If counter was no divisble by 3, check if divisible by 5. If yes, print Buzz, otherwise just print the counter. 

Approach 2: 
Define counter variable.
Define printString variable.
Loop and increment counter.
In the loop, if counter is divisble by 3, add "Fizz" to the string. If counter is divisible by 5, add "Buzz" to the string. 
If printString is empty, print counter, otherwise print printString. 