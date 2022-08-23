// Задание 1
const enterYourName = prompt("Ведите ваше имя");
const enterYourSurname = prompt("Введите вашу фамилию");
const enterYorNickname = prompt("Введите ваш никнейм");
if (enterYourName && enterYourSurname && enterYorNickname) {
  alert(`Добро пожаловать ${enterYourName} ${enterYourSurname}`);
} else if (enterYourName && enterYourSurname) {
  alert(`Добро пожаловать ${enterYourName} ${enterYourSurname}`);
} else if (enterYourSurname && enterYorNickname) {
  alert(`Добро пожаловать ${enterYorNickname}`);
} else if (enterYourName && enterYorNickname) {
  alert(`Добро пожаловать ${enterYourName}`);
} else alert("Добро пожаловать Noname!");

// Задание 2
let number1 = "";
let number2 = "";
let number3 = "";
let number4 = "";
let enterNumber = +prompt("Введите число");
if (enterNumber > 100) {
  number1 = "больше 100";
} else {
  number1 = "меньше 100";
}
if (enterNumber % 2 === 0) {
  number2 = "чётное";
} else {
  number2 = "нечётное";
}
if (enterNumber > 0) {
  number3 = "положительное";
} else {
  number3 = "отрицательное";
}
if (enterNumber % 1 === 0) {
  number4 = "недробное";
} else {
  number4 = "дробное";
}
alert(`Введенное вами число ${number1}, ${number2}, ${number3}, ${number4}`);

// Задание 3
const nameCustom = prompt("Please, enter your name");
const age = +prompt("Please, enter your age");
age > 17
  ? alert(`Добро пожаловать ${nameCustom} !`)
  : alert(`Простите, ${nameCustom}, доступ закрыт!`);

// Задание 4
let enterNumber0_9 = +prompt("Введите число");
if (
  isNaN(enterNumber0_9) == false &&
  enterNumber0_9 >= 0 &&
  enterNumber0_9 < 10
) {
  switch (enterNumber0_9) {
    case 0:
      alert("Ноль");
      break;
    case 1:
      alert("Один");
      break;
    case 2:
      alert("Два");
      break;
    case 3:
      alert("Три");
      break;
    case 4:
      alert("Четыре");
      break;
    case 5:
      alert("Пять");
      break;
    case 6:
      alert("Шесть");
      break;
    case 7:
      alert("Семь");
      break;
    case 8:
      alert("Восемь");
      break;
    case 9:
      alert("Девять");
      break;
  }
} else if (
  isNaN(enterNumber0_9) == false &&
  (enterNumber0_9 < 0 || enterNumber0_9 >= 10)
) {
  alert("Введено неверное число");
} else {
  alert("Введено не число");
}
