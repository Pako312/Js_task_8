// 1) Создать объект myBrowser со свойствами name (значение “Chrome”) и version (значение «9.2») - двумя способами

// const object={
//         name: 'Chrome',
//         version: '9.2',
// }

// const obj = {
// }
// obj.name = 'Chrome'
// obj.version = '9.2'

// console.log(obj.name);

// 2) Создать объект cinema со свойствами soldTickets (хранит в себе число, которое отображает кол-во проданных билетов) и 
// ticketCost (цена билета) и задайте значения. Напишите функцию которая высчитывает сколько денег заработал кинотеатр за один сеанс.
// const object = {
//     name: 'cinema',
//     soldTickets: '100',
//     ticketCost: '80',
   
// }
// let profit = function(a,b){
//     return a*b 
// }
// console.log(profit(object.soldTickets, object.ticketCost));

// 3) Напишите функцию, которая принимает в качестве аргумента объект и возвращает вложенный массив вида [[key, value], [key, value]].
//  То есть, если я вызову функцию objectToArr({ a: 1, b: 2 }), то результатом выполнения должен быть массив - [['a', 1], ['b', 2]].
//   Для решения этой задачи вам нужны будут следующие методы: Object.keys() или Object.entries()
// const obj = {
//     a: 1,
//     b: 2
// }
// function objToArr (obj) {
//     return Object.entries(obj);
// }
//  console.log(objToArr(obj));


// 4) Дан объект. Нужно извлечь число 123 одной строкой

// const myCrazyObject = {
// someArray: [7,9,{purpose:"путаница", number:123},3.3],}
// console.log(myCrazyObject.someArray[2].number);

// 5) Напишите функцию, которая проверяет, является ли элемент именно простым объектом, 
// а не массивом, null и т.п. Тут вам пригодится метод Array.isArray()

// const object = [{
//     name: 'vvv'
// }]
// function isObject(obj) {
//     if (obj === null) {
//         return console.log('it is not object')
//     } else if (Array.isArray(obj) === true) {
//         return console.log('it is array')
//     } else if (Array.isArray(obj) === false) {
//         return console.log('it is not object')
//     } else {
//     return console.log('it is not object')
//     }
// }
// isObject(object)

// 6) Дан массив из имен например ['john', 'jane', 'kate', 'peter']. 
// Вывести новый массив в котором каждая первая буква элемента будет с большой буквы

// const names = ['john', 'jane', 'kate', 'peter'];
// let upperRegisterNames = [];
// function upperCase (arr) {
//     upperRegisterNames = arr.map((letter) => {
//         const firstLetter = letter.charAt(0).toUpperCase();
//         const otherLetters = letter.slice(1).toLowerCase();
//         return firstLetter + otherLetters
//     })
//     return upperRegisterNames
// }
// console.log(upperCase(names));