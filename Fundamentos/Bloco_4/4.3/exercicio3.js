let n = 5;
let coluna = "*";
let linha = '';
let esp = " ";

for(index = 0; index < n; index += 1){
  linha = '';
  for ( i = 0; i < n; i += 1){
    if( i < (n-(index+1))){
      linha += esp;
    }else{
      linha += coluna;
    };
  };
  console.log(linha);
};
