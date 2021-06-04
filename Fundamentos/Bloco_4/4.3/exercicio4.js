let n = 11;
let coluna = '*';
let linha = '';
let alt = (n + 1) / 2;
let esq =  dir = alt;

for (let iLinha = 0; iLinha <= alt; iLinha += 1) {
  for (let iCol = 0; iCol <= n; iCol += 1) {
    if (iCol > esq && iCol < dir) {
      linha += coluna;
    } else {
      linha += ' ';
    }
  }
  console.log(linha);
  linha = '';
  dir += 1;
  esq -= 1
};
