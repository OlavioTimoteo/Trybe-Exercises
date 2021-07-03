let listaDeAprovados = [
  'ada.lovelace@example.com',
  'marie.curie@example.com',
  'margaret.hamilton@example.com',
  'alan.turing@example.com',
];

const enviarEmail = (email) => {
  console.log(`Email para ${email} foi enviado com sucesso!`);
};

listaDeAprovados.forEach((item) => {
  enviarEmail(item);
});

// o forEach recebe até três parametros, sendo eles: item, posição e Array. 
// Exemplo: listaDeAprovados.forEach((item, posicao, array) => {
// enviarEmail(item);
// });
