// Write a program that uses the Array map() method to transform all objects to a new Array personsWithFullName.

// input data
const persons = [
  { firstName: "John", lastName: "Doe", age: 32 },
  { firstName: "Jane", lastName: "Doe", age: 23 },
];

// add your implementation
//const personsWithFullName = [];

const personsWithFullName = persons.map((person) => {
  return {
    firstName: person.firstName,
    lastName: person.lastName,
    age: person.age,
    fullName: person.firstName + " " + person.lastName,
  };
});

console.log(personsWithFullName);
// output data should look like:
// [
//     { firstName: 'John', lastName: 'Doe', age: 32, fullName: 'John Doe' },
//     { firstName: 'Jane', lastName: 'Doe', age: 23, fullName: 'Jane Doe' },
// ];
