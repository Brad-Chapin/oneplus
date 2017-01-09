const assert = require('assert');
const main = require ("./main.js");


describe ("onePlus", function(){
  it("should add 1 to each array element, then return their sums", function (){
    assert.equal(main.onePlus([1,2,3,4]), 14);
  });
});
