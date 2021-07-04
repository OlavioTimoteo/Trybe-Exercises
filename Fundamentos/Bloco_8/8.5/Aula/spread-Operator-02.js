const conhecimentosTrybe = {
  softSkills: true,
  hardSkills: true,
  trabalho: true,
}

const pessoa = {
  nome: "Olávio",
  idade: 23,
  cidade: 'Recife',
}

const pessoaTryber = {...pessoa, ...conhecimentosTrybe };
console.log(pessoaTryber);
