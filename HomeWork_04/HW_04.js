// #I2XsG6f
// 1 створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function square (a, b) {
    let square = a * b;
    return square;
}
let result = square (10, 20);
console.log (result);

// 2 створити функцію яка обчислює та повертає площу кола з радіусом r
function roundSquare (radius) {
    return Math.PI * radius * radius;
}

// #Mbiz5K4yFe7
// 3 створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function squareCilinder (radius, height) {
    return 2 * Math.PI * radius * height
}
console.log(squareCilinder (5, 10));

// #SIdMd0hQ
// 4 створити функцію яка приймає масив та виводить кожен його елемент

function printArrayElements(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
let myArray = ['яблуко', 'банан', 'апельсин', 'груша'];
printArrayElements(myArray);

// #59g0IsA
// 5 створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент
// #hOL6126
// 6 створити функцію яка створює ul з трьома елементами li та виводить його через document.write.
// Текст li задати через аргумент всім однаковий
// #0Kxco1edSN
// 7 створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write
// #gEFoxMMO
// 8 створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write
// #bovDJDTIjt
// 9 створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

//     #pghbnSB
// 10 створити функцію яка повертає найменьше число з масиву
    function MinValue(numbers) {
        let min = numbers[0];
        for (let i = 1; i < numbers.length; i++) {
            let num = numbers[i]
            if (num < min) {
                min = num;
            }
        }
        return min;
    }
    // let numbers= [];
    console.log(MinValue([5, 33, 9, 1, 64]));

// #EKRNVPM
// 11 створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// #kpsbSQCt2Lf
// 12 створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// #mkGDenYnNjn
// 13 Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400