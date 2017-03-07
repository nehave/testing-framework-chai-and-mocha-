var chai = require('chai');
var mocha =require('mocha');
 var assert = chai.assert;



 describe('Array', function() {
   it('should start empty', function() {
     var arr = [];

     assert.equal(arr.length, 0);//****the parameters need to be in particular format:first the actual value and then the expected value****
   });
 });




describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});

