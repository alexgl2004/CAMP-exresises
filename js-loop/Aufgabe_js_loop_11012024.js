console.log("\n" + '//1. Write a `for` loop that logs the numbers from `1` to `10` to the console.'+"\n")

for(let i=1; i<=10; i++){
    console.log(i)
}

console.log("\n" + '//2. Write a `for` loop that logs the even numbers from `2` to `10` to the console.'+"\n")

for(let i=2; i<=10; i++){
    if(!(i%2)) console.log(i)
}

console.log("\n" + '//3. Write a `for` loop that logs the numbers from `10` to `1` to the console.'+"\n")

for(let i=10; i>=1; i--){
    console.log(i)
}

console.log("\n" + '//4. Write a `for` loop that logs the numbers from `1` to `100` to the console, but logs'+"\n")

let divide;
for(let i=1; i<=100; i++){

    divide = 0;

    console.log(!(i%5) && !(i%3)?'FizzBuzz':!(i%3)?'Buzz':!(i%5)?'Fizz':i)

/*

    if(!(i%3)) divide = 3;
    if(!(i%5)) divide = 5;
    if(!(i%5) && !(i%3)) divide = 1;
    
    switch(divide){
        case 5:
            console.log('Fizz');
        break;
        case 3:
            console.log('Buzz');
        break;
        case 1:
            console.log('FizzBuzz');
        break;        
        default:
            console.log(i);
            //console.log(i % 3);
        break;                
    }

*/

}

//-   "Fizz" instead of the number if it is divisible by `3`,
//-   "Buzz" instead of the number if it is divisible by `5`, and
//-   "FizzBuzz" instead of the number if it is divisible by both `3` and `5`.

console.log("\n" + '//5. Write a `for` loop that logs the sum of the numbers from `1` to `10` to the console.'+"\n")

let sum = 0;
for(let i=1; i<=10; i++){
    sum += i;
}
console.log(sum)

console.log("\n" + '//6. Write a `for` loop that logs the factorial of a given number `n` to the console. The factorial of `n` is the product of all positive integers from `1` to `n`.'+"\n")

let fak = 1;
let n = 5;
for(let i=1; i<=n; i++){
    fak *= i;
}
console.log(fak)

console.log("\n" + '7. Write a `for` loop that logs the Fibonacci sequence up to a given number `n` to the console. The Fibonacci sequence is a series of numbers in which each number is the sum of the two preceding numbers.'+"\n")

n = 10;
let fibonachi = [0,1];

for(let i=1; i<=n; i++){

    //console.log(fibonachi)
    fibonachi.push(fibonachi[fibonachi.length-1] + fibonachi[fibonachi.length-2]);

}

console.log(fibonachi.join(", "))