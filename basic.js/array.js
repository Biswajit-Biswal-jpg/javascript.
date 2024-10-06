// let marks = [67,89,89,65,32,98]

// console.log(marks);
// console.log(marks[0])
// console.log(marks[1])
// console.log(marks.length)

// let heros = ["iron man", "hulk", "super man", "spyder man", "chota vim"]

// for(let i = 0; i < heros.length; i++){
//     console.log(heros[i])
// }
// for-of 
// for(let i of heros){
//     console.log(i.toUpperCase())
// }

// 1. for a given array with marks of students -> [86,78,45,32,67]. find the average marks of the entire class.

// let marks = [86,78,45,32,67]
// let sum = 0;
// for (let val of marks){
//     sum = sum + val;
// }
// let avg = sum / marks.length;
// console.log(`avg of marks of the class = ${avg}`);

// 2. for a given array with prices of 5 items -> [567,973,390,321,689].
// all items have an offer of 10% off of them. change the array to store final price after applying offer. 

// let items = [567,973,390,321,689]
// let i = 0;
// for (let val of items){
//     console.log(`value at index ${i} = ${val}`);
//     let offer = val/10;
//     items[i] = items[i] - offer;
//     console.log(`value after offer = ${items[i]}`);
//     i++;
// }

// let foodItem = ["burger", "pizza", "sandwich", "momos", "gupchup"]
// console.log(foodItem)
// foodItem.push("dahibara", "masala-dosa")
// console.log(foodItem)
// foodItem.pop()
// console.log(foodItem)
// foodItem.pop()
// console.log(foodItem)

// let marks = [67,98,43,23,89]
// console.log(marks)
// let mark = marks.toString();
// console.log(mark)

let marvelHeros = ["thon", "ironman","superman"]
let odiaHeros = ["anubhab", "babushan"]

let heros = marvelHeros.concat(odiaHeros)
console.log(heros)