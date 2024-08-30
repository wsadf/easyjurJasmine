const isValidISBN10 = require('../src/isValidISBN10');
describe('isValidISBN10', () => {

  it('deve retornar true para um ISBN-10 válido sem hífens', () => {
      const isbn = "0306406152";
      expect(isValidISBN10(isbn)).toBe(true);
  });

  it('deve retornar true para um ISBN-10 válido com hífens', () => {
      const isbn = "0-306-40615-2";
      expect(isValidISBN10(isbn)).toBe(true);
  });

  it('deve retornar false para um ISBN-10 inválido', () => {
      const isbn = "0306406153";
      expect(isValidISBN10(isbn)).toBe(false);
  });

  it('deve retornar false se o ISBN contiver caracteres inválidos', () => {
      const isbn = "03064A6152";
      expect(isValidISBN10(isbn)).toBe(false);
  });

  it('deve retornar true para um ISBN-10 válido que termina com "X"', () => {
      const isbn = "012000030X";
      expect(isValidISBN10(isbn)).toBe(true);
  });

  it('deve retornar false para um ISBN-10 com comprimento incorreto', () => {
      const isbn = "030640615";
      expect(isValidISBN10(isbn)).toBe(false);
  });

});
