 //heck number positive and negative and zero
// let num =Number(prompt("Enter a number"));
// if (num > 0){
//     console.log("number is postive");
// }else if(num < 0){
//     console.log("number is negative");
// }else{
//     console.log("number is zero");
// }
    
// // Even or odd
// let num1 =Number(prompt("Enter a number"));
// if (num1 % 2 === 0){
//     console.log("number is Even");

// }else{
//     console.log("number is  Odd");
// }

// //divisible by 5
// let num = Number(prompt("Enter a number")) ;
// console.log(num);
// if (num % 5 === 0){
//     console.log("number is  Divislible by 5");
// }else{
//     console.log("number is not divisible by 5");
// }
    
// // divisible by 5 , 3
// let n = 15;
// if (n % 3 === 0 && n % 5 === 0){
//     console.log("number is  Divislible by 5 and 3");
// }else{
// //     console.log("number is not divisible by 5 and 3");
// }
//Leap year
//  let year = Number(prompt("Enter a year"));
//  if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)){
//        console.log("this is a leap year");
// }else{
//    console.log("this is not a leap year");
//  }
//Large of two number
// let a = 10;
// let b = 20;
// if (a > b){
//     console.log("a is large");
// } else if (a < b){
//     console.log("b is large");
// } else{ 
//     console.log("both are equal");
// }

// //largest of three number
// let num = 10;
// let num1= 20;
// let num3 = 30;

// if (num >= num1 && num >= num3){
//     console.log("num is largest");
// } else if (num1 >= num && num1 >= num3){
//     console.log("num1 is largest");
// } else{
//     console.log("num3 is largest");
// }
    
// let table =  [
      
//     {
//         id : 1,
//         Name: "Gaurav",
//         Age: 20,
//         Gender: "Male",
//     },
     
//     {
//         id : 2,
//         Name: "Atul",
//         Age: 20,
//         Gender: "Male",
//     },
     
//     {
//         id : 3,
//         Name: "Rohit",
//         Age: 20,
//         Gender: "Male",
//     },
// ]
// console.table(table);

//  let Name = "Gaurav";
//  let Age = 20;
 
//  console.log(`My name is ${Name} and my age is ${Age} year old`);


// function greet() {
//     console.log("Hello World");
// }
// greet();
// // //without function
//  console.log("Hello World");
//  console.log("Hello Gaurav");

//  function welcome(name){
//     console.log(`Hello ${name}`);
//  }  

//  welcome("Gaurav ");
//  welcome("Atul ");

//  function calculation() {
//       let a = 20;
//       let b = 10;
//       console.log(a+b);
//  }
//  calculation();
//  //temperature  cold, warm, hot
//  let temp = 20;
//  if (temp < 20) {                           
//     console.log("Temperature is cold");
//  } else if (temp >= 20 && temp < 30) {
//     console.log("Temperature is warm");
//  } else {
//     console.log("Temperature is hot");
//  }      

//  //Vowel or consonant
//  let char = prompt("Enter a character");        
//  if  ("aeiou" .includes(char))      //(char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {  
//     console.log("The character is a vowel");
//   else 
//     console.log("The character is a consonant");

// prite  number from 1 to 10 using for loop    
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
//print all even number from 1 to 100 using for loop
// for (let i = 2; i <= 100; i += 2) {
//     console.log(i);
// }

// //print all odd number from 1 to 100 using for loop
// for (let i = 1; i <= 100; i += 2) {
//     console.log(i);
// }
// //print all number from 1 to 100 using while loop
// // let i = 1; 
// // while (i <= 100) {
// //     console.log(i);
// //     i++;
// // }
// for (let i = 1; i <= 100; i ++) {
//     console.log(i);
// }      

//print number from 10 down 1
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

//print the multiplication table of a given number
let num = 5;    
for (let i = 1; i <= 10; i++) { 
    console.log(`${num} x ${i} = ${num * i}`);
}

//print the first n natural numbers
let n = 10;
for (let i = 1; i <= n; i++) {
    console.log(i);
}   

//print the sum of  first n natural numbers
let num1 = 10;
let sum = 0;                    
for (let i = 1; i <= num1; i++) {
    sum += i;
}
console.log("sum: " +  sum);   

//print the sum of all even numbers up to n
let n1 = 10;
let sum1 = 0;   
for (let i = 2; i <= n1; i += 2) {
    sum1 += i;
}
console.log("sum of even numbers: " + sum1);    

//print the sum of all odd numbers up to n
let n2 = 10;
let sum2 = 0;
for (let i = 1; i <= n2; i += 2) {
    sum2 += i;
}
console.log("sum of odd numbers: " + sum2);    

//print the factorial of a number
let num2 = 5;
let factorial = 1;
for (let i = 1; i <= num2; i++) {
    factorial *= i;
}
console.log("factorial: " + factorial);    

//print the product of digitsn of a number
let num3 = 234;
let product = 1;        
while (num3 > 0) {
    let digit = num3 % 10;
    product *= digit;
    num3 = Math.floor(num3 / 10);
}   
console.log("product of digits: " + product);    