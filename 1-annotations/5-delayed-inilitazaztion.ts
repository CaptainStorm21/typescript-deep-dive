// 2 = when we declare a var on one line and initalize it later

let words = [
  'red',
  'green',
  'purple'
];

//   type: any
// let foundWord;
let foundWord: boolean;


for (let i = 0; i < words.length; i++){
  if (words[i] === 'green') {
    foundWord = true;
  }
}