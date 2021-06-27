const fatoral = number => {
  let result = 1;

  for (let index = 2; index <= number; index += 1) {
    result *= index;
  }
  return result
}

console.log(fatoral(5));


// Recursivo

const fatoral = number => number > 1 ? number * fatoral(number - 1) : 1;
console.log(fatoral(5));


// Longestword com sort em uma linha
const longestWord = text => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];
console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"));
