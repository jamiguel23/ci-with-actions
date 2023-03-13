
//load node.js assertion library
const chai = require("chai");
const expect = chai.expect;
const asserttype = require('chai-asserttype');
chai.use(asserttype);



//load calculator code
var Calculator = require("../Calculator");
var calc = new Calculator();


describe("Calculator Tests add",function(){
 
  it("Adds 1 and 2",function(){
	expect(calc.add(1,2)).to.be.equal(3);
  });

  it("Add Allows no parameters",function(){
   expect(calc.add()).to.be.equal(0);
 });

  it("Add Allows one parameter",function(){
   expect(calc.add(1)).to.be.equal(1);
 });

  it("Add turns strings to zeros",function(){
   expect(calc.add("frog","toad")).to.be.number();
 });

  it('subtracts 3 and 1', () =>{
    	expect(calc.subtract(3,1)).to.be.equal(2);
  })

  it("subtract Allows no parameters",function(){
   expect(calc.subtract()).to.be.equal(0);
 });

   it("subtract Allows one parameter",function(){
   expect(calc.add(1)).to.be.equal(1);
 });

  it("subtract turns strings to zeros",function(){
   expect(calc.add("frog","toad")).to.be.number();
 });

  it('should multiply 2 and 2', () => {
    expect(calc.multiply(2,2)).to.be.equal(4);
  });

  it("multipy Allows no parameters",function(){
   expect(calc.multiply()).to.be.equal(0);
 });

  it('should divide 4 and 2', () => {
    expect(calc.divide(4,2)).to.be.equal(2);

  })
});

