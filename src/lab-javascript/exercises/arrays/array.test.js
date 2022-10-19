const chai = require('chai');
const { assert } = chai;
const app = require('./app');

const smallNumberArray = [2, 3, 4]
const numberArray = [21, 55, 69, 420, 18, 42]
const stringArray = ["Emile", "Eleanor", "Becky", "Elliot"];

describe('array exercises', function () {

  describe('forLoop()', function () {
    it('should increase the array values by 1', function () {
      let result = app.forLoop([1, 2, 3], 1)
      assert.typeOf(result, 'array');
      assert.deepEqual(result, smallNumberArray);
    });
  });

  describe('forLoopBreak()', function () {
    it('should increase the array values by 1', function () {
      let result = app.forLoopBreak(numberArray, 1)
      assert.typeOf(result, 'array');
      assert.deepEqual(result, [22, 56, 70, 420, 18, 42]);
    });
  });

  describe('whileLoop()', function () {
    it('should replace the first 3 items with "*"', function () {
      let result = app.whileLoop(numberArray);
      assert.typeOf(result, 'array');
      assert.deepEqual(result, ['*', '*', '*', 420, 18, 42,])
    });
  });

  describe('doWhileLoop()', function () {
    it('should replace the first 3 items with "*"', function () {
      let result = app.doWhileLoop(numberArray);
      assert.typeOf(result, 'array');
      assert.deepEqual(result, ['*', '*', '*', 420, 18, 42,])
    });
  });
});

