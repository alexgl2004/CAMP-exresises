
// Write a program that uses the Array sort() method to find the maximum value in an array of numbers.

// Write a program that uses the Array sort() method to log every firstName and lastName of persons ordered by age.

const persons = [
    { firstName: 'John', lastName: 'Doe', age: 32 },
    { firstName: 'Jane1', lastName: 'Doe', age: 21 },
    { firstName: 'Jane2', lastName: 'Doe1', age: 32 },
    { firstName: 'Jane3', lastName: 'Doe1', age: 13 },
    { firstName: 'Jane4', lastName: 'Doe', age: 44 },
    { firstName: 'Jane5', lastName: 'Doe2', age: 25 },
    { firstName: 'Jane6', lastName: 'Doe2', age: 66 },
];

const arr2 = [9, 8, 7, 1, 2, 3, 4, 5, 6];

arr2.sort((a, b) => b - a);
let maximum = arr2[0];
console.log('maximum: ' + maximum);

persons.sort((a, b) => a.age - b.age);
persons.forEach((person) => console.log('('+person.age+') ' + person.firstName + ' ' + person.lastName ));
