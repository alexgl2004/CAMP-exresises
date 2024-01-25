
// Write a program that uses the Array reduce() method to calculate the average age of persons.

const persons = [
    { firstName: 'John', lastName: 'Doe', age: 32 },
    { firstName: 'Jane', lastName: 'Doe', age: 23 },
];

const initialValue = 0;

let averageAgeArrSum = persons.reduce((accumulator, currentValue) => {
     return accumulator + currentValue.age    
}, initialValue);

let averageAge = averageAgeArrSum / persons.length;

console.log(averageAge);