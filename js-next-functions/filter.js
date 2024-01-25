// Write a program that uses the Array filter() method to log every firstName and lastName of persons with age less than 30.

const persons = [
    { firstName: 'John', lastName: 'Doe', age: 32 },
    { firstName: 'Jane', lastName: 'Doe', age: 23 },
];

evenPersons = persons.filter((person) => {
  return person.age < 30;
});

evenPersons.forEach((person) => console.log('(' + person.age + ') ' + person.firstName + ' ' + person.lastName));