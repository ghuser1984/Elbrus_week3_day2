//my tests below

const { TestWatcher } = require("jest");
const { positivesum } = require("../positivesum.js");
const { opposite } = require ("../opposite.js");
const { removechar } = require ("../removechar.js");
const { stringsum } = require("../stringsum.js");

//testing the positive numbers sum function
const positiveSum = require("../positivesum.js");
describe('1.Sum of positive numbers', function() {
  test('Sums should equal to 10, 11 and 6', function() {
    expect(positiveSum([1,2,3,4])).toEqual(10);
    expect(positiveSum([1,-2,2,-10,8])).toEqual(11);
    expect(positiveSum([1,-99,3,-100,-45,2])).toEqual(6);
  });
});

//test for oppNumber function
const oppNumber = require("../opposite.js")
describe('2.Given a number return it with opposite sign', function(){
  test('Outputs should be -10, 99, and 1', function(){
    expect(oppNumber(10)).toEqual(-10);
    expect(oppNumber(-99)).toEqual(99);
    expect(oppNumber(-1)).toEqual(1);
  });
});

//test of removeChar function
const removeChar = require("../removechar.js");
describe('3.Given a string slice first and last of it chars', function(){
  test('Should be okay', function(){
    expect(removeChar('String')).toBe('trin');
    expect(removeChar('Apple')).toBe('ppl');
    expect(removeChar('YO')).toBe('');
  });
});

//test of stringsum function
const repeatStr = require("../stringsum.js");
describe("4.Given and integer and a string return integer times string", function(){
  test('Let it multiply again and again', function(){
    expect(repeatStr(3,'*')).toBe('***');
    expect(repeatStr(5,"yo")).toBe('yoyoyoyoyo');
    expect(repeatStr(3,"Hello")).toBe('HelloHelloHello');
  });
});

