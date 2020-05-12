var {isSchool, isValid, isEmpty, isEmail} = require('../util/validators.js');
var expect = require('chai').expect;
var assert = require('chai').assert;

describe ('../util/validators.js', () => {
    describe('isEmpty', () => {
        context('without arguments', function () {
            it('should return false', function () {
                expect(isEmpty('')).to.equal(true)
            })

            context('with integers', function () {
                it('should return false', function () {
                    expect(isEmpty('2, 3, 45')).to.equal(false)
                })

                context('with string', function () {
                    it('should return true', function () {
                        expect(isEmpty("ede4")).to.equal(false)
                    })
                })
            })
        })
    })

    describe('isSchool', () => {
        context('with string only', function () {
            it('should return false', function () {
                expect(isSchool("ertv b")).to.equal(false)
            })
        })

        context('with properly formatted argument', function () {
            it('should return false', function () {
                expect(isSchool("bcit.ca")).to.equal(true)
            })
        })
        context('with integers', function () {
            it('should return false', function () {
                expect(isSchool(12345)).to.equal(false)

            })
        })
    })
})



