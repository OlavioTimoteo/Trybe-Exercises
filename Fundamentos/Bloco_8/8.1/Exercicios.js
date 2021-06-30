// Exercício 1

const employeeGenerator = (fullName) => {
  const email = fullName.toLowerCase().split(' ').join('_');
  return { fullName, email: `${email}@trybe.com` };
};

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drumond'),
    id3: callback('Carla Paiva'),
  };
  return employees;
};

console.log(newEmployees(employeeGenerator));


// Exercício 2

const numberChecker = (myNumber, number) => myNumber === number;
const lotteryResult = (myNumber, callback) => {
  const number = Math.floor((Math.random() * 5) + 1);
  return callback(myNumber, number) ? 'Luck day, you won!' : 'Try again';
};

console.log(lotteryResult(1, numberChecker));

// Exercício 3

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'N.A', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const repeat = (rightAnswers, studentAnswers, action) => {
  let contador = 0;
  for (let index = 0; index < rightAnswers.length; index += 1) {
    const actionReturn = action(rightAnswers[index], studentAnswers[index]);
    contador += actionReturn;
  }
  return `Resultado final: ${contador} corretas`;
};

console.log(repeat(RIGHT_ANSWERS, STUDENT_ANSWERS, (rAnswer, uAnswer) => {
  if (rAnswer === uAnswer) {
    return 1;
  }
  if (uAnswer === 'N.A') {
    return 0;
  }
  return -0.5;
}));

// Bônus 1

const dragonAttack = (dragon) => {
  const minDmg = 15;
  const { strength } = dragon;
  const dragonDmg = Math.floor((Math.random() * (strength - minDmg) + minDmg));
  return dragonDmg;
};

// Bônus 2

const warriorAttack = (warrior) => {
  const { weaponDmg } = warrior;
  const minDmg = warrior.strength;
  const maxDmg = minDmg * weaponDmg;
  const warriorDamage = Math.floor((Math.random() * (maxDmg - minDmg)) + minDmg);
  return warriorDamage;
};

// Bônus 3

const mageAttack = (mage) => {
  const mageMana = mage.mana;
  const minDmg = mage.intelligence;
  const maxDmg = minDmg * 2;
  const turnStats = {
    manaSpent: 0,
    damageDealt: 'Not enough mana...',
  };

  if (mageMana > 15) {
    const mageDamage = Math.floor((Math.random() * (maxDmg - minDmg)) + minDmg);
    turnStats.manaSpent = 15;
    turnStats.damageDealt = mageDamage;
    return turnStats;
  }
  return turnStats;
};
