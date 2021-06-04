let n = 7;
let coluna = '*';
let linha = '';
let alt = (n + 1) / 2;
let esq =  dir = alt;

for (let iLinha = 1; iLinha <= alt; iLinha += 1) {
  linha = '';
  for (let iCol = 1; iCol <= n; iCol += 1) {
    if (iCol == esq || iCol == dir || iLinha == alt) {
      linha += coluna;
    } else {
      linha += ' ';
    }
  }
  esq -= 1;
  dir += 1;
  console.log(linha);
};
