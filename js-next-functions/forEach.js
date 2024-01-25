
// Write a program that uses the Array forEach() method to find the maximum value in an array of numbers. You can use the callback function to compare each element to the current maximum value and then update the maximum value if necessary.

// Write a program that uses the Array forEach() method to log every second element to the console.

// Write a program that uses the Array forEach() method to log every firstName and lastName of persons.

const persons = [
    { firstName: 'John', lastName: 'Doe', age: 32 },
    { firstName: 'Jane', lastName: 'Doe1', age: 23 },
    { firstName: 'John1', lastName: 'Doe2', age: 34 },
    { firstName: 'Jane1', lastName: 'Doe3', age: 25 },
    { firstName: 'John2', lastName: 'Doe4', age: 36 },
    { firstName: 'Jane2', lastName: 'Doe5', age: 27 }   
];

const arr2 = [9, 8, 7, 1, 2, 325, 4, 5, 62];

console.log('--- 1 ------------------- ');
let maximum = arr2[0];
arr2.forEach((value, index) => {
    maximum = value>maximum ? value : maximum;
});
console.log('maximum: ' + maximum);

console.log('--- 2 ------------------- ');
arr2.forEach((value, index) => {
    if(index % 2 == 0)
        console.log(value + ' ('+index+')');
});

console.log('--- 3 ------------------- ');
persons.forEach((person, index) => {
    console.log(person.firstName + ' ' + person.lastName + ' ('+index+')');
});






//References
// https://en.wikipedia.org/wiki/Modulo_operation
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator