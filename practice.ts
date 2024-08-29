// Write a code to check whether the number is odd or even
const a:number = 25;
if (a % 2 == 0) {
    console.log("The Number is even")
}
else{
    console.log("The Number is Odd");
}


// Write a code to check whether the number is prime number or not
let prime;
let n:number = 6;
    // Check if the number is equal to 1, which is not a prime number
    if (n === 1) {
        prime = `${n} is not a prime number`;
        console.log(prime);
    }
    // Check if the number is equal to 2, which is a prime number
    else if (n === 2) {
        prime = `${n} is a prime number`;
        console.log(prime);
    } 
    else if (n > 2){
      // Iterate from 2 to n-1 to check for factors of n
      for (var x = 2; x < n; x++) {
        // If n is divisible by x without a remainder, it is not a prime number
        if (n % x === 0) {
            prime = `${n} is not a prime number`;
            break;
        }
        else{
            prime = `${n} is a prime number`;
        }
      }
      console.log(prime);
    }

// Write a code to find the sum of the numbers 1 to N
let result = 0;
let s :number = 5;
for(let i=0; i <= s; i++){
    result += i;
    console.log(result);
}
console.log(result);

// Write a code to find factorial of a number
let ult = 1;
let f :number = 6;
for(let i=1; i <= f; i++){
    ult *= i;
    console.log(ult);
}
console.log(ult);


// Write a code to print the first N fibonacci numbers

// Define first and second index of array
let arr = [0,1];

let num :number = 15;
// Push the element of Fibbonacci numbers from index 
for(let i = 2; i <= num; i++){
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    // console.log(arr);
}

// Pick the last element of array
const last = arr[arr.length - 1];

console.log(last);