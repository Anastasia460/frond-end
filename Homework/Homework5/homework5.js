// // Задача 1
function lengthString(str) {
  if (str.length > 30) {
    str = str.substring(0, 30) + "...";
  }
  return str;
}
console.log(lengthString("But you have no right to call me a merderer"));
console.log(
  lengthString("Because they could stand that these were not monsters.")
);
console.log(
  lengthString("And I want to remember it. I never want to forget it.")
);

// Задача 2
function changCaseLetters(str) {
  let letter = str.toUpperCase().split("");
  for (let i = 0; i < str.length; i++) {
    if (letter[i] == str[i]) letter[i] = letter[i].toLowerCase();
  }
  return letter.join("");
}
console.log(changCaseLetters("WTF"));
console.log(changCaseLetters("Be my Valentine"));
console.log(changCaseLetters("C&C Red Alert 3"));

// // Задача 3
function textAnalysis(str) {
  let allSymbols = str.length;
  let symbolWithoutSpaces = str.replace(/\s/g, "").length;
  let quantityOFWords = str.split(" ").length;
  let sentenceType = str.slice(-1);
  if (sentenceType === ".") {
    sentenceType = "affirmative";
  } else if (sentenceType === "!") {
    sentenceType = "exclamatory";
  } else if (sentenceType === "?") {
    sentenceType = "question";
  } else {
    sentenceType = null;
  }
  let obj = { allSymbols, symbolWithoutSpaces, quantityOFWords, sentenceType };
  return obj;
}
console.log(textAnalysis("And I want to remember it"));

// // Задача 4
function moderation(str) {
  let sentence = str
    .split(" ")
    .map((s) => (s.toUpperCase().indexOf("RABBIT") > -1 ? "******" : s))
    .join(" ");
  return sentence;
}
console.log(moderation("Call me rAbbIt"));
