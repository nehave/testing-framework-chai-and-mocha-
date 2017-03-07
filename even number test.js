var chai = require('chai');
chai.should();
var expect = chai.expect;
describe('other', function(){
  function isEven(num){
    return num%2 == 0 ;
  }
  describe('isEven' , function(){
    it('should return true ', function(){
	    isEven(8).should.be.true
    })
 
    it('should return false ', function()
    {
	    expect(isEven(9)).should.be.false
    })
 
  }) 

})
