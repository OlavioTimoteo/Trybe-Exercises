function nomeLongo(array){
  let cont = 0;
  let maior = array[0];

  for (i = 0; i < array.length; i +=1){
    if( array[i].length >= cont){
      cont = array[i].length;
      maior = array[i];
    };
  };
  return maior;
};

let teste = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

console.log(nomeLongo(teste));