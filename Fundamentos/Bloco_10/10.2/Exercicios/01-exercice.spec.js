const uppercase = (str, callback) => {
  callback(str.toUpperCase());
}

describe('Testa se a função uppercase transforma letras', () => {
  it(`uppercase 'test' to equal 'TEST'`, (done) => {
  uppercase('test', (str) => {
    expect(str).toBe('TEST');
    done();
  })
  });
});