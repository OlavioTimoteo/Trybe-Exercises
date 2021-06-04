function verificaPalindrome(termo){
  let fracionado = [];
  
  for (let letra of termo){
    fracionado.push(letra);
  };

  for (let i = 0; i < fracionado.length; i += 1){
    if (fracionado[i] === fracionado[fracionado.length - (i+1)]){
      return true;
    }else{
      return false;
    };
  };
};

console.log(verificaPalindrome('desenvolvimento'));
