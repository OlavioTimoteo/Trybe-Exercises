function sum(a, b) {
  if (typeof
     a !== 'number' || typeof b !== 'number') {
       throw new Error('parameters must be numbers');
     }
     return a + b;
};
//console.log(sum(1, 4));

module.exports = sum;