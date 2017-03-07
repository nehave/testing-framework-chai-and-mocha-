var chai = require('chai');
var expect = chai.expect;
var foo = 'bar';
describe('other',function(){
  it('should return value', function(){
	  expect(foo).to.be.a('string');
	  expect(foo).to.be.equal('bar');
	  expect(foo).to.not.equal('bar');    
  })
})