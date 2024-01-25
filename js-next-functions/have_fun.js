console.log('Map Exercises-------------------------------------')

console.log('1a. Double each number in the array ---- ---- ----')
const numbers = [1, 2, 3, 4, 5];
let numbers_value = numbers.map((value) => value * 2);
console.log(numbers_value);

console.log('1b. Capitalize the first letter of each string ---- ---- ----')
const strings = ["apple", "banana", "cherry", "date", "elderberry"];
//let strings_value = strings.map((value) => value.substring(0,1).toLocaleUpperCase() + value.substring(1));/*1*/
//let strings_value = strings.map((value) => value.replace(/^[a-z]/g, word => word.toLocaleUpperCase()));/*2*/
let strings_value = strings.map((value) => value[0].toLocaleUpperCase() + value.substring(1));/*3*/
console.log(strings_value);

console.log('1c. Extract names from an array of objects ---- ---- ----')
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 22 },
];
let arr_value = people.map((value) => value.name);
console.log(arr_value);


console.log('Filter Exercises-------------------------------------')

console.log('2a. Filter even numbers')
const numbers2 = [2, 7, 8, 15, 20, 37];
numbers2_value = numbers2.filter((num) => {
    return num % 2 == 0;
});
console.log(numbers2_value);

console.log('2b. Filter strings with more than 5 characters ---- ---- ----')
const strings2 = ["apple", "banana", "kiwi", "date", "fig"];
strings2_value = strings2.filter((num) => {
    return num.length < 5;
});
console.log(strings2_value);


console.log('2c. Filter people older than 18 ---- ---- ----')
const people2 = [
  { name: "David", age: 17 },
  { name: "Emma", age: 25 },
  { name: "Frank", age: 19 },
];
people2_value = people2.filter((people_elem) => {
    return people_elem.age <= 18;
});
console.log(people2_value);


console.log('ForEach Exercises-------------------------------------')
console.log('3a. Log each number to the console ---- ---- ----')
const numbers4 = [5, 10, 15, 20, 25];

numbers4.forEach((value) => {
    console.log(value)
});

console.log('3b. Log the length of each string to the console ---- ---- ----')
const strings4 = ["apple", "banana", "cherry", "date", "elderberry"];
strings4.forEach((value) => {
    console.log(value.length)
});


console.log('3c. Log a message for each person ---- ---- ----')
const people4 = [
  { name: "Jack", age: 23 },
  { name: "Karen", age: 28 },
  { name: "Liam", age: 19 },
];
people4.forEach((value) => {
    console.log(value.name + ' ' + value.age)
});

console.log('3d. Repeat the above exercises with "for" loops and with "for of" loops-------------------')
console.log('3a-for-3d. Log each number to the console ---- ---- ----')

console.log('for')
for(i=0;i<numbers4.length;i++){
    console.log(numbers4[i])
}

console.log('for of')
for(const element of numbers4){
    console.log(element)
}

console.log('3b-for-3d. Log the length of each string to the console ---- ---- ----')

console.log('for')
for(i=0;i<strings4.length;i++){
    console.log(strings4[i].length)
}

console.log('for of')
for(const element of strings4){
    console.log(element.length)
}

console.log('3c-for-3d. Log a message for each person ---- ---- ----')
for(i=0;i<people4.length;i++){
    console.log(people4[i].name + ' ' + people4[i].age)
}
for(const element of people4){
    console.log(element.name + ' ' + element.age)
}

const initialValue = 0

console.log('Find Exercise-------------------------------------')
console.log('4a. Find the first person who is exactly 25 years old ---- ---- ----')
const people5 = [
  { name: "Michael", age: 30 },
  { name: "Natalie", age: 25 },
  { name: "Oliver", age: 25 },
];
let finded_25 = people5.find((element) => element.age == 25)
console.log(finded_25)

// BONUS - please read the reduce documentation and try to solve: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
console.log('Reduce Exercises-------------------------------------')
console.log('5a. Calculate the sum of all numbers ---- ---- ----')
const numbers3 = [10, 20, 30, 40, 50];
let Sum1 = numbers3.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
}, initialValue);
console.log(Sum1)

console.log('5b. Concatenate all strings ---- ---- ----')
const strings3 = ["Hello", " ", "world", "!"];
let Concat1 = strings3.reduce((accumulator, currentValue) => {
    return accumulator + currentValue 
}, '');
console.log(Concat1)

console.log('5c. Calculate the total age of people ---- ---- ----')
const people3 = [
  { name: "Grace", age: 28 },
  { name: "Henry", age: 35 },
  { name: "Isabel", age: 42 },
];
let Sum2 = people3.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.age
}, initialValue);
console.log(Sum2)

console.log('5d. Repeat the above exercises with loops (forEach, for, for of) ---- ---- ----')
/*
for(i=0;i<strings4.length-1;i++){
for(const element of strings4){
people4.forEach((value) => {
*/

console.log('5a-for-5d. Calculate the sum of all numbers ---- ---- ----')

console.log('forEach')
let Sum1_1 = 0
numbers3.forEach((value) => {
    Sum1_1 += value
})
console.log(Sum1_1)

console.log('for of')
Sum1_1 = 0
for(const element of numbers3){
    Sum1_1 += element
}
console.log(Sum1_1)

console.log('for')
Sum1_1 = 0
for(i=0;i<numbers3.length;i++){
    Sum1_1 += numbers3[i]
}
console.log(Sum1_1)

console.log('5b-for-5d. Concatenate all strings ---- ---- ----')

console.log('forEach')
let Concat1_1 = ''
strings3.forEach((value) => {
    Concat1_1 += value
})
console.log(Concat1_1)

console.log('for of')
Concat1_1 = ''
for(const element of strings3){
    Concat1_1 += element
}
console.log(Concat1_1)

console.log('for')
Concat1_1 = ''
for(i=0;i<strings3.length;i++){
    Concat1_1 += strings3[i]
}
console.log(Concat1_1)

console.log('5c-for-5d. Calculate the total age of people ---- ---- ----')

console.log('forEach')
let Sum2_1 = 0
people3.forEach((value) => {
    Sum2_1 += value.age
})
console.log(Sum2_1)

console.log('for of')
Sum2_1 = 0
for(const element of people3){
    Sum2_1 += element.age
}
console.log(Sum2_1)

console.log('for')
Sum2_1 = 0
for(i=0;i<people3.length;i++){
    Sum2_1 += people3[i].age
}
console.log(Sum2_1)


console.log('//-------------ODER------------------//')

function for_of_forEach(array_str){
    
    not_obj = array_str[0].age==undefined?true:false;

    console.log('forEach')
    let out_val = typeof(array_str[0])=='string'?'':0
    array_str.forEach((value) => {
        out_val += not_obj ? value : value.age
    })
    console.log(out_val)
    
    console.log('for of')
    out_val = typeof(array_str[0])=='string'?'':0
    for(const element of array_str){
        out_val += not_obj ? element : element.age
    }
    console.log(out_val)
    
    console.log('for')
    out_val = typeof(array_str[0])=='string'?'':0
    for(i=0;i<array_str.length;i++){
        out_val += not_obj ? array_str[i] : array_str[i].age
    }
    console.log(out_val)

}

for_of_forEach(numbers3)
for_of_forEach(strings3)
for_of_forEach(people3)


/*
let Sum2_1 = people3.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.age
}, initialValue);
console.log(Sum2_1)
*/


// Your code for the exercises goes here