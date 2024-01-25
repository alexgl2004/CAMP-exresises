
console.log("--------1 aufgabe")
const User1 = {
    personal: {
        fname : "Oleksii",
        lastname : "Glavatyi",
        age : 39
    },
    phone : "+222222",
    address: {
        street : "Konstantinstr",
        hausenumber : 155,
        city : "Bonn"
    },
    link_profile : "https://github.com/alexgl2004"
};


console.log("User " + User1.personal.fname + " " + User1.personal.lastname + " is logged in. He is living in " + User1.address.city);
console.log("User " + User1['personal']['fname'] + " " + User1['personal'].lastname + " is logged in. He is living in " + User1.address['city']);

console.log("--------2 aufgabe")

const john = {
  name: "John",
  age: 30,
  job: "developer",
};

const jane = john;
jane.name = "Jane";

console.log("john:");
console.log(john); 
console.log("jane:");
console.log(jane);

/*
- What output do you expect? consist of john and jane objects

- What is `const jane = john;` doing? make copy of john OR make new constant "jane", witch consist data like as object "john"

- What is `jane.name = 'Jane';` doing? change property name of oject jane

- How many properties does the object `john` have? 3

- What is the property name for the value `developer`? job
*/

console.log("--------3 aufgabe")

const golf = {
  color: "red",
  maxSpeed: "180",
};

const opel = {
  color: "blue",
  maxSpeed: "185",
};

console.log("colof of golf - " + golf.color + "\n" + "colof of opel - " + opel.color);

let switch_color;

switch_color = golf.color
opel.color = golf.color
golf.color = switch_color

console.log("----")
console.log("colof of golf - " + golf.color + "\n" + "colof of opel - " + opel.color);

//Print out the colors of these cars, switch the colors of the cars and print out the colors again.