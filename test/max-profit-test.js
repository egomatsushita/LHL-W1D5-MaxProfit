/*
  - An automated test to verify the function maxProfit
*/

var assert = require("chai").assert;
var maxProfit = require("../max-profit.js");

describe("Max Profit", function() {
  it("should return maximum profit = 16", function() {
    var prices = [45, 24, 35, 31, 40, 38, 11];
    var result = 16;
    assert.equal(maxProfit(prices), result);
  });

  it("should return -1 if there is not a profit", function() {
    var prices = [45, 24, 21, 11, 9, 5];
    var result = -1;
    assert.equal(maxProfit(prices), result);
  });

  it("should return -1 if the array is empty", function() {
    var prices = [];
    var result = -1;
    assert.equal(maxProfit(prices), result);
  });

  it("should return -1 if there is only one element in the array", function() {
    var prices = [45];
    var result = -1;
    assert.equal(maxProfit(prices), result);
  });
});

