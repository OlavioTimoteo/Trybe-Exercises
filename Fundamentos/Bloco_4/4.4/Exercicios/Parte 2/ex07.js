function verificaFimPalavra(word1, word2){
  let size = word2.length;
  let cortado = word1.slice((word1.length - size));
  if (cortado === word2){
    return true;
  } else {
    return false;
  };
};

console.log(verificaFimPalavra('trybe', 'be'));

