const sumNumbers = require("./sumNumbers");

test('Testando SumNumbers, soma 5 mais 10', done => {
  sumNumbers(5, 10, (result) => {
    expect(result).toBe(15);
    done();
  });
})