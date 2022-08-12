//

// типы данн'use strict' - первая строчка в документа, нужна для того чтобы видны были ошибкиых

//number  обычные числа 1,2, + Infinity (+бесконечность), -Infinity(+бесконечность), 0.3 (через точку), NaN(не число not a number)

//string строки  - 'dog', "cat", `cow`
//boolean - true, false
//object -{}(литералы), [](масивы), null(относится к объекту, но не объект)
//undefined - undefined(ничего)

//null =0 (хотим чтобы что-то было, но пока там ничего нет)
//bigInt - 1n
//symbol - {}
//typeof null => 'object'   (typeof typeof null)=> 'string'
// математические операторы +, -, /, *, ** (возвести в степень), %( остаток от деления)б, = (знак присваевания), ==, ===,!== (строгое неравно), != (не строгое неравно) +=, -=, ++, --, &&, ||

// способы объявления переменных var, let(пусть, можно переписать переменные), const(нельзя переписать переменную)
//const num = 1; numFirst - имя, может быть любое(каждое последующее слово с большой буквы)
//const numFirst = 1;
// let numFirst = 1;
// numFirst = "akjhcskjshjk";

// var dog = "Bim";

// dog = 1;

// console.log(dog);
// NaN - не сравнивается ни с чем
// к false относятся (отрицательное значения) - false, 0, undefined, null, ''.

// console.log(1 + '1') - конкатенация , работает только с + , выведит 11, все остальные знаки будут выполнять арифметичекое действие
// console.log(1 - '1') - выведит 0
// console.log(1 == "1");
// console.log(1 === "1");

// console.log(0 == false);
// console.log(1 == true);
// console.log(false + true) будет 1

// перевод строки в число
// let str = "1";
// console.log(+str);
// console.log(Number(str));

//перевод числа в строку
// let str = "1";
// console.log(str + "");
// console.log(str.toString());
// console.log(String(str));

// ФУНКЦИИ
// alert - оповещение
// confirm - дает вариант да или нет
// prompt - дает окно для ввода значения(все то что введено в окно, будет отражено в консоле)

// alert("I like js");

// confirm("Do you like js");
// можно задать в переменной
// let doYouLikeQuestion = confirm("Do you like js");
// console.log(doYouLikeQuestion);

// const enterWords = prompt("enter any");
// console.log(enterWords);

// КОНСТРУКЦИЯ if - else
// if(условие){ результат условия}
// const enterWords = +prompt("enter any");
// console.log(enterWords);
// if (isNaN(enterWords)) {
//   console.log("NaN");
// }
// const enterWords = prompt("enter any");
// if (enterWords === "word") {
//   console.log("Cool");
// }

// const enterWords = prompt("enter any");
// if (enterWords === "word") {
//   console.log("Cool");
// } else {
//   console.log("not cool");
// }

// const enterWords = prompt("enter any");
// if (enterWords === "word") {
//   console.log("Cool");
// } else if (enterWords === "cat") {
//   console.log("animal");
// } else {
//   console.log("not cool");
// }

// const enterWords = +prompt("Введите ваш возраст");
// if (enterWords > 17) {
//   const confirmAge = confirm("are you sure?");
//   if (confirmAge === true) {
//     alert("great");
//   }
//   if (console.log(alert("Добро пожаловать!")));
// } else if (isNaN(enterWords)) {
//   console.log(alert("Это слово"));
// } else {
//   console.log(alert("Вход воспрещен!"));
// }
//  можно уменьшить запись
// const enterWords = +prompt("Введите ваш возраст");
// if (enterWords > 17) {
//   const confirmAge = confirm("are you sure?");
//   //   if (confirmAge === true), чтобы было задоно значение false : if (confirmAge === false) запись будет  if (!confirmAge)
//   if (confirmAge) {
//     alert("great");
//   }
//   if (console.log(alert("Добро пожаловать!")));
// } else if (isNaN(enterWords)) {
//   console.log(alert("Это слово"));
// } else {
//   console.log(alert("Вход воспрещен!"));
// }

//  const cat = 'Barsik';
//  const sayHi = 'Say hi';
//  console.log(`${SayHi} ${cat}`) - встраивание кода в разметку - интерполяция
