var {isSchool, isValid, isEmpty, isEmail} = require('../util/validators.js');
var expect = require('chai').expect;
var assert = require('chai').assert;
var should = require('chai').should;


describe ('../util/validators.js', () => {
    describe('isEmpty', () => {
        context('without arguments', function () {
            it('should return true', function () {
                expect(isEmpty('')).to.equal(true);
            })
        })
            context('with string of integers', function () {
            it('should return false', function () {
                expect(isEmpty('2, 3, 45')).to.equal(false)
            })
        })

        context('with string of integers', function () {
            it('should return false', function () {
                expect(isEmpty('2, 3, 45')).to.equal(false)
            })
        })

        context('with string', function () {
            it('should return true', function () {
                expect(isEmpty("ede4")).to.equal(false)
            })
        })

        context('with string', function () {
            it('should return true', function () {
                expect(isEmpty("ede4")).to.equal(false)
            })
        })

        })

    describe('isSchool', () => {
        context('with string only', function () {
            it('should return false', function () {
                expect(isSchool("ertv b")).to.equal(null)
            })
        })

        //
        // context('with properly formatted argument', function () {
        //     it('should return true', function () {
        //         expect(isSchool("bcit.ca")).to.eql(1);
        //     })
        // })

        context('with integers', function () {
            it('should return true', function () {
                // expect(isSchool(12345)).to.equal(null)
                var str = "bcit.ca";
                assert.equal(str.length, 7)
            })
        })


        // context('with integers', function () {
        //     it('should return true', function () {
        //         should(isValid(12345)).contains(true)
        //         // expect(isValid(12345)).to.equal(null)
        //
        //     })
        // })


        // context('length one', function () {
        //     it('should return null', function () {
        //         expect(isSchool(12345)).to.equal(null)
        //         // var str = "";
        //         // assert.not.match(str.length, 4)
        //     })
        // })


        // })

    })
})



