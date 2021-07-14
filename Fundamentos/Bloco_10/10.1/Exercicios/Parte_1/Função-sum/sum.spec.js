const sum = require('./sum');

describe('Função sum', () => {
  it('A função soma A e B e retorna 9', () => {
    expect(9).toEqual(sum(4, 5));
  });
  it('O retorno da soma de A e B é 0', () => {
    expect(0).toEqual(sum(0, 0))
  });
  it('O retorno é a mensagem: throws an error when a string is passed', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow();
  });
  it('error message is "parameters must be numbers', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow(/parameters must be numbers/);
  })
});