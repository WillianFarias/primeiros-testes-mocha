//assert, módulo nativo do node
const assert = require('assert');
const Math = require('../src/math.js');

describe('Math class', function () {
  //it descreve um comportamento esperado da classe
  it('Sum two numbers', function () {
    const math = new Math();
    try {
      assert.equal(math.sum(5, 5), 10);
    } catch (err) {
      console.log(err);
    }
  })
});