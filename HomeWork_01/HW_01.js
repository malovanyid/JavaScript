// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// Вивести кожну змінну за допомогою: console.log
let text1= 'hello';
console.log(text1);
let text2= 'owu';
console.log(text2);
let text3= 'com';
console.log(text3);
let text4= 'ua';
console.log(text4);

let numb1= 1;
console.log(numb1);
let numb2= 10;
console.log(numb2);
let numb3= -999;
console.log(numb3);
let numb4= 123;
console.log(numb4);
let numb5= 3.14;
console.log(numb5);
let numb6 = 2.7;
console.log(numb6);
let numb7= 16;
console.log(numb7);

let bool1= true;
console.log(bool1);

let bool2= false;
console.log(bool2);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

const firstName= 'Denys';
const middleName= 'Eduardovich';
const lastName= 'Malovanyi';
const person= `${firstName} ${middleName} ${lastName}`;
console.log(person);

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.

let a= 100;
let b= '100';
let c= true;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);