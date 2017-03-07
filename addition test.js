var chai = require('chai');
chai.should();
var expect = chai.expect;
function add (num1 , num2){
  return num1+num2;
}
describe('other',function(){
	it('add', function(){
    add(3,4).should.be(7);
  })
  it('add',function(){
    expect(add(3,4)).to.not.equal(9);
  })
});





