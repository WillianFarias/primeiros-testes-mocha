//assert, módulo nativo do node
const assert = require('assert');
const Math = require('../src/math.js');

describe('Math class', function () {
  //it descreve um comportamento esperado da classe
  //done é necessario quando se trata de metodos assincronos
  it('Sum two numbers', function (done) /*done => nao recomendado*/{
    const math = new Math();

    //necessario pois por padrao no mocha um teste deve retorna em no maximo 2000ms
    //é possivel alterar o timeout 
    this.timeout(3000);

    math.sum(5, 5, value => {
      assert.equal(value, 10);
      //o done aguarda o done ser invocado para só depois finalizar o teste
      done();
    });
  });
  //possivel criar testes sobre funcoes que ainda nao existem
  //only define que apenas o teste especifico deve ser executado
  it.only('Multiply two numbers', function() {
    const math = new Math();

    assert.equal(math.multiply(5, 5), 25);
  });
});