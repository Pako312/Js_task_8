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