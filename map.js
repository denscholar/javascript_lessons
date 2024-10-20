const ages = [10, 13, 15, 55, 89, 50, 45];

ages.forEach((age) => {
  if (age > 18) {
    console.log(age);
  }
});

// const newage = ages.filter((age) => {

// });

// console.log(newage);

const words = [
  "limit",
  "elite",
  "spray",
  "exuberant",
  "destruction",
  "present",
];

function wordsGreaterthanSix(word) {
  newWord = word.length >= 6;
  return newWord;
}

const newWordsss = words.filter(wordsGreaterthanSix);


console.log(newWordsss);



