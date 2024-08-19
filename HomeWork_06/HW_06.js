// #dFeorS3m7u
// 1 - Знайти та вивести довижину наступних стрінгових значень:
// 'hello world', 'lorem ipsum', 'javascript is cool'
let string1 = 'hello world'
console.log(string1.length)
let string2 = 'lorem ipsum'
console.log(string2.length)
let string3 = 'javascript is cool'
console.log(string3.length)

// #8lld9HMxXWB
// 2 Перевести до великого регістру наступні стрінгові значення:
// 'hello world', 'lorem ipsum', 'javascript is cool'
let stringBig1 = 'hello world'
console.log(stringBig1.toUpperCase());
let stringBig2 = 'lorem ipsum'
console.log(stringBig2.toUpperCase());
let stringBig3 = 'javascript is cool'
console.log(stringBig3.toUpperCase());

// #ClDsAm7xba7
// 3 Перевести до нижнього регістру наступні стрінгові значення:
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let stringLittle1 = 'HELLO WORLD'
console.log(stringLittle1.toUpperCase());
let stringLittle2 = 'LOREM IPSUM'
console.log(stringLittle2.toUpperCase());
let stringLittle3 = 'JAVASCRIPT IS COOL'
console.log(stringLittle3.toUpperCase());


// #0b89BkYZwu
// 4 Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   ';
const dirty= str.trim();
console.log(dirty);

// #bfoJuse4ZzP
// 5 - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//      let str = 'Ревуть воли як ясла повні';
//      let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']






// #Rbr5kEQ
// 6 - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map перетворити всі об'єкти в масиві на стрінгові.




// #5hqyKTfmc
// 7 - створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//      let nums = [11,21,3];
//      sortNums(nums,'ascending') // [3,11,21]
//      sortNums(nums,'descending') // [21,11,3]




// ==========================

// #yo06d74c1C
// 8 - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

// =========================

// #bolvdlhP
// 9 - описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }

// =========================

// #EP5I1UUzAX
// 10 - Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

// =========================

// #4LJn7zBx
// взяти з arrays.js масив coursesArray
// --написати пошук всіх об'єктів, в яких в modules є sass
// --написати пошук всіх об'єктів, в яких в modules є docker