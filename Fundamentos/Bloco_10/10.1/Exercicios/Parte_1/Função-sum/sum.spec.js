const sum = require('./sum');

describe('Requisito 1', () => {
  it('A função soma A e B e retorna 9', () => {
    expect(9).toEqual(sum(4, 5));
  });
  it('O retorno da soma de A e B é 0', () => {
    expect(0).toEqual(sum(0, 0))
  });
});