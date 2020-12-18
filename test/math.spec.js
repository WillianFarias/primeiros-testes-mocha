//assert, módulo nativo do node
const assert = require('assert');
const Math = require('../src/math.js');

describe('Math class', function () {
  //it descreve um comportamento esperado da classe
  //done é necessario quando se trata de metodos assincronos
  it('Sum two numbers', function (done) {
    const math = new Math();

    math.sum(5, 5, value => {
      assert.equal(value, 10);
      //o done aguarda o done ser invocado para só depois finalizar o teste
      done();
    });
  });
});