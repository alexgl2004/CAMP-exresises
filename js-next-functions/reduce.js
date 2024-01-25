
// Write a program that uses the Array reduce() method to calculate the average age of persons.

const persons = [
    { firstName: 'John', lastName: 'Doe', age: 25 },
    { firstName: 'Jane', lastName: 'Doe', age: 25 },
    { firstName: 'John', lastName: 'Doe', age: 10 },
    { firstName: 'Jane', lastName: 'Doe', age: 25 }
];

const initialValue = 0;

let averageAgeArrSum = persons.reduce((accumulator, currentValue) => {
     return accumulator + currentValue.age
}, initialValue);

let averageAge = averageAgeArrSum / persons.length;

console.log(averageAge);

averageAgeArrSum = persons.reduce((accumulator, currentValue) => {
    return accumulator + (currentValue.age/persons.length)
}, initialValue);

averageAge = averageAgeArrSum
console.log(averageAge);