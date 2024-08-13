// 1 Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let element = ['table', 'chair', 'monitor', 'keyboard', 'mouse', 'telephone', 'headphones', 'glasses', 'pen', 'notepad'];
console.log(element);
console.log(element.length);
console.log(element[0]);
console.log(element[1]);
console.log(element[2]);
console.log(element[3]);
console.log(element[4]);
console.log(element[5]);
console.log(element[6]);
console.log(element[7]);
console.log(element[8]);
console.log(element[9]);

// 2 Створити 3 об'єкти які описують книги. Поля об'єкту: title, pageCount, genre.

// Ілларіон Павлюк 44 Я бачу, вас цікавить пітьма 664 Детективи
// Джим Лоулесс 57 Іди туди, де страшно. І отримаєш те, про що мрієш 320 Мотивація
// Оксана Мороз 42 Як не стати овочем. Інструкція з виживання в інфопросторі 208 Інструкція

let books1= {
    title: 'Я бачу, вас цікавить пітьма',
    pageCount: 664,
    genre: 'Детективи'
}
let books2= {
    title: 'Іди туди, де страшно. І отримаєш те, про що мрієш',
    pageCount: 320,
    genre: 'Мотивація'
}
let books3= {
    title: 'Як не стати овочем. Інструкція з виживання в інфопросторі',
    pageCount: 208,
    genre: 'Інструкція'
}

// 3 Створити 3 об'єкти які описують книги. Поля об'єкту: title, pageCount, genre, authors.
// Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let books4= {
    title: 'Я бачу, вас цікавить пітьма',
    pageCount: 664,
    genre: 'Детективи',
    authors: [{name : 'Ілларіон Павлюк', age : 44}]
}
let books5= {
    title: 'Іди туди, де страшно. І отримаєш те, про що мрієш',
    pageCount: 320,
    genre: 'Мотивація',
    authors: [{name : 'Джим Лоулесс', age : 57}]
}
let books6= {
    title: 'Як не стати овочем. Інструкція з виживання в інфопросторі',
    pageCount: 208,
    genre: 'Інструкція',
    authors: [{name : 'Оксана Мороз', age : 42}]
}
console.log(books4)
console.log(books5)
console.log(books6)

// 4 Створити масив з 10 об'єктами які описують сутніть "користувач".
// Поля: name, username, password. Вивести в консоль пароль кожного користувача.

let people = [
    {name: ' John Smith', username: 'john_smith', password: 123456,},
    {name: 'Emma Johnson', username: ' emma_j', password: 654321,},
    {name: 'Michael Brown', username: 'mike_brownie', password: 789012,},
    {name: 'Olivia Davis', username: 'liv_davis', password: 345678,},
    {name: 'William Wilson', username: 'willy_wilson', password: 901234,},
    {name: 'Ava Martinez', username: 'ava_m', password: 567890,},
    {name: 'James Anderson', username: 'jim_anderson', password: 234567,},
    {name: 'Sophia Taylor', username: 'sophie_t', password: 890123,},
    {name: 'Benjamin Harris', username: 'ben_harris23', password: 456789,},
    {name: 'Isabella Clark', username: 'bella_clark', password: 678901,}
];
console.log(people[0].password);
console.log(people[1].password);
console.log(people[2].password);
console.log(people[3].password);
console.log(people[4].password);
console.log(people[5].password);
console.log(people[6].password);
console.log(people[7].password);
console.log(people[8].password);
console.log(people[9].password);

// 5 описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів.
// Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2.
// Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу

const temperatures = [
    {day: "Day 1", morning: 15, afternoon: 22, evening: 18},
    {day: "Day 2", morning: 16, afternoon: 24, evening: 19},
    {day: "Day 3", morning: 14, afternoon: 23, evening: 17},
    {day: "Day 4", morning: 15, afternoon: 21, evening: 18},
    {day: "Day 5", morning: 17, afternoon: 25, evening: 20},
    {day: "Day 6", morning: 16, afternoon: 22, evening: 19},
    {day: "Day 7", morning: 15, afternoon: 23, evening: 18}
];
console.log(temperatures[0].morning);

// Логічні розгалуження:

// 6 Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
// Перевірте  скрипт при a, що дорівнює 1, 0, -3











