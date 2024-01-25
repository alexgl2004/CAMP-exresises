/*
Exercises: Functions
Create the functions described below and run them with test calls.
You can either use separate files per function or write all functions in one file.
When testing the functions, make sure you comment out the previous function calls to not get confused.
Example:
*/
function firstFunction() {
    // do something
  }
  function secondFunction() {
    // do something
  }
  
  // Test call(s) firstFunction
  
  // const result=firstFunction();
  // console.log(result)
  
  // Test call(s) secondFunction
  
  const result = secondFunction();
  console.log(result);
  
  console.log('//1. Create a function printWelcomeMessage that logs out "Welcome at Taktsoft Campus Talents"')
  
  function printWelcomeMessage(){
  
      const result = "Welcome at Taktsoft Campus Talents";
      console.log(result);
  
      return result;
  
  }
  
  console.log('//2. Create a function createWelcomeMessage that returns the above welcome message. What do you need to do to see the message?')
  
  function createWelcomeMessage(){
      
      const result = printWelcomeMessage();
      console.log(result);
  
  }
  
  console.log('//3. Create a function createPersonalMessage that accepts a name as parameter and returns a welcome message in the following format:'+
  '//Hello John, welcome at Taktsoft Campus Talents')
  
  function createWelcomeMessage(name){
      
      return 'Hello ' + name + ', welcome at Taktsoft Campus Talents';
  
  }
  
  const result_3 = createWelcomeMessage('John');
  console.log(result_3);
  
  
  console.log('//4. Create a functions that accepts a name as parameter that returns "Hello teacher" when called with "Ralf", "Staicy", "Ulrich" or "Sascha". When called with any other name it should return "Hello student".')
  
  
  function create_4_Message(name){
  
      let profession = '';
  
      switch(name){
          case 'Ralf':
          case 'Staicy':
          case 'Ulrich':
          case 'Sascha':
              profession = 'teacher';
          break;
          default:
              profession = 'student';
          break;
      }
      
      return 'Hello ' + profession;
  
  }

  const result_4 = create_4_Message('Ralf');
  console.log(result_4);

  console.log('//version 2');

  function create_4_2_Message(name){
  
    const name_check = ['Ralf','Staicy','Ulrich','Sascha'];

    let profession = name_check.indexOf(name)!=-1?'teacher':'student';

    return 'Hello ' + profession;

  } 
  
  const result_4_2 = create_4_2_Message('Ralf');
  console.log(result_4_2);
  
  
  console.log('//5. Extend the above function: When called with no parameter, it should return "Hello stranger"')
  
  function create_5_Message(name='stranger'){
  
      let profession = '';
  
      switch(name){
          case 'Ralf':
          case 'Staicy':
          case 'Ulrich':
          case 'Sascha':
              profession = 'teacher';
          break;
          case 'stranger':
              profession = 'stranger';
          break;
          default:
              profession = 'student';
          break;
      }
      
      return 'Hello ' + profession;
  
  }
  
  const result_5 = create_5_Message('Ralf');
  console.log(result_5);

  console.log('//version 2');

  function create_5_2_Message(name){
  
    const name_check = ['Ralf','Staicy','Ulrich','Sascha'];

    let profession = name_check.indexOf(name)!=-1?'teacher':name=='stranger'?'stranger':'student';

    return 'Hello ' + profession;

  } 
  
  const result_5_2 = create_5_2_Message('stranger');
  console.log(result_5_2);

  
  console.log('//6. Create a function createAgeAwareMessage that accepts an object in the following form as parameter:'+
  '//If the person passed to the function is younger than 18, return "Hi John!", otherwise return "Welcome, Mr./Mrs. Doe"')
  
   const age_object = {
       firstName:"John",
       lastName:"Doe",
       age: 24
   }
  
  function createAgeAwareMessage(age_object_f){
  
      if(age_object_f.age < 18){
          return "Hi "+age_object_f.firstName+"!";
      }else{
          return "Welcome, Mr./Mrs. "+age_object_f.lastName;
      }
  
  }
  
  const result_6 = createAgeAwareMessage(age_object);
  console.log(result_6);
  
  console.log('//7. Extend the above function: Add a parameter gender to the expected parameter object. Return "Welcome Mrs. Doe" or "Welcome Mr. Doe" depending on the person`s gender.')
  
  const age_object_2 = {
      firstName:"John",
      lastName:"Doe",
      age: 24,
      gender: 'male'
  }
  
  function createAgeAware_2_Message(age_object_f){
  
      let personal_gender = age_object_f.gender=='male'?'Mr':'Mrs';
  
      if(age_object_f.age < 18){
         return "Hi "+age_object_f.firstName+"!";
      }else{
         return "Welcome, "+personal_gender + ". " + age_object_f.lastName;
      }
  
  }
  
  const result_7 = createAgeAware_2_Message(age_object_2);
  console.log(result_7);
  
  console.log('//8. Create a function calculateSum that accepts two parameters. Return the sum of both parameters.')
  
  function calculateSum(a, b){
  
      let sum = 0;
      sum = a + b;
  
      return sum;
  
  }
  
  const result_8 = calculateSum(2, 3);
  console.log(result_8);
  
  console.log('//9. Create a function calculateCircumference that accepts the radius of a circle. Calculate the circumference of the circle and return it.')
  
  function calculateCircumference(radius){
  
      let circumference = 0;
      circumference = 2 * Math.PI * radius;
      return circumference;
  
  }
  
  const result_9 = calculateCircumference(5);
  console.log(result_9);
  
  console.log('//10. You will need loops for the following exercises'+
  '//Create a function calculateTotalPrice that accepts an array in the following format as parameter:'+
  '//Calculate and return the sum of all prices.')
  
  const prices_of_goods = [
      {
          productName: 'iPhone',
          price: 600,
      },
      {
          productName: 'Refrigerator',
          price: 400,
      }
  ];
  
  function calculateTotalPrice(prices_of_goods_f){
  
      let total_sum = 0;
  
      for(let i=0;i < prices_of_goods_f.length;i++){
          total_sum += prices_of_goods_f[i].price;
      }
  
      return total_sum;
  
  }
  
  const result_10 = calculateTotalPrice(prices_of_goods);
  console.log(result_10);
  
  console.log('//11. Extend the above function: Add a property availableItems that holds the number of items in stock. When calculating the sum, multiply the price of each product with the corresponding availability.')
  
  const prices_of_goods2 = [
      {
          productName: 'iPhone',
          price: 600,
          availableItems: 2
      },
      {
          productName: 'Refrigerator',
          price: 400,
          availableItems: 3
      }
  ];
  
  function calculateTotal_2_Price(prices_of_goods_f){
  
      let total_sum = 0;
  
      for(let i=0;i < prices_of_goods_f.length;i++){
          total_sum += prices_of_goods_f[i].price * prices_of_goods_f[i].availableItems;
      }
  
      return total_sum;
  
  }
  
  const result_11 = calculateTotal_2_Price(prices_of_goods2);
  console.log(result_11);
  
  
  console.log('//12. Extend the above function again: Instead of returning a number, return an object in the following form:');
  
  const prices_of_goods3 = [
      {
          productName: 'iPhone',
          price: 600,
          availableItems: 2
      },
      {
          productName: 'Refrigerator',
          price: 400,
          availableItems: 3
      }
  ];
  
  function calculateTotal_3_Price(prices_of_goods_f){
  
      let total_out = {
          numProducts: rices_of_goods_f.length, // Number of different products in the array
          numItems: 0, // Number of all available items in stock
          totalPrice: 0 // Total price of all available items
  
    }
      
      total_sum = 0;
  
      for(let i=0;i < prices_of_goods_f.length;i++){
  
  //        total_out.numProducts += 1;
          total_out.numItems += prices_of_goods_f[i].availableItems;
          total_out.totalPrice += prices_of_goods_f[i].price * prices_of_goods_f[i].availableItems;
  
      }
  
      return total_out;
  
  }
  
  const result_12 = calculateTotal_3_Price(prices_of_goods3);
  console.log(result_12);
  