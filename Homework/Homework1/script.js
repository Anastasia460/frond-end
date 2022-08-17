// Задание 1
const enterYourName = prompt("Please, enter your name");
alert(nameCustom);

// // Задание 2
const figure1 = +prompt("Please,enter  the first number");
const figure2 = +prompt("Please,enter the second number");
alert(figure1 + figure2);

// Задание 3
const nameCustom = prompt("Please, enter your name");
const age = +prompt("Please, enter your age");
if (age > 17) {
  alert(`Добро пожаловать ${nameCustom} !`);
} else {
  alert(`Простите, ${nameCustom}, доступ закрыт!`);
}

// Задание 4
let block = confirm("Хотите ввести название блока?");
if (block === false) {
  confirm("Класс элементу не присвоен");
} else {
  block = prompt("Введите название блока");
}
let element = confirm("Хотите ввести название элементa?");
if (element === false) {
  alert(`${block}`);
} else {
  element = prompt("Введите название элемента");
  let modifier = confirm("Хотите ввести название модификатора?");
  if (modifier === false) {
    alert(`${block}__${element}`);
  } else {
    modifier = prompt("Введите название модификатора");
    alert(`${block}__${element}_${modifier}`);
  }
}

// Задание 5
let firstNumber = +prompt("Введите первое число");
let secondNumber = +prompt("Введите второе число");
let action = prompt(
  "Выберите нужную арифметическую операцию (div, plus, mult, minus)"
);
if (action === "div") {
  alert(firstNumber / secondNumber);
} else if (action === "plus") {
  alert(firstNumber + secondNumber);
} else if (action === "mult") {
  alert(firstNumber * secondNumber);
} else if (action === "minus") {
  alert(firstNumber - secondNumber);
}
