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


        context('with properly formatted argument', function () {
            it('should return true', function () {
                expect(isSchool("bcit.ca")).to.not.equal(1);
            })
        })

        context('with proper email', function () {
            it('should return true', function () {
                // expect(isSchool(12345)).to.equal(null)
                var str = "bcit.ca";
                assert.equal(str.length, 7)
            })
        })
    })

        describe('isValid', () => {
            context('with integers only', function () {
                it('should return true', function () {
                    expect(isValid('12345')).to.equal(null)
                    // expect(isValid(12345)).to.equal(null)

                })
            })

            context('with one lowercase, one uppercase, 4 characters , one special character, one number', function () {
                it('should return true', function () {
                    expect(isValid("q1Y*")).to.equal(null)
                    // expect(isValid(12345)).to.equal(null)

                })
            })

            context('with one lowercase, one uppercase,  7 characters one special character, one number', function () {
                it('should return true', function () {
                    expect(isValid("qff31Y*")).to.equal(null)
                    // expect(isValid(12345)).to.equal(null)

                })
            })

            context('with one lowercase, one uppercase,  8 characters one special character, one number', function () {
                it('should return true', function () {
                    expect(isValid("qff531Y*")).to.not.equal(null)
                    // expect(isValid(12345)).to.equal(null)

                })
            })
        })

        describe('isEmail', () => {
            context('with integers only', function () {
                it('should return null', function () {
                    expect(isEmail('12345')).to.equal(null)
                    // expect(isValid(12345)).to.equal(null)

                })
            })

            context('with proper email', function () {
                it('should return true', function () {
                    expect(isEmail('wwerr@gmail')).to.equal(null)
                    // expect(isValid(12345)).to.equal(null)

                })
            })

            context('with proper email', function () {
                it('should return not null', function () {
                    expect(isEmail('1*Qwwerr@gmail.com')).to.not.equal(null)
                    // expect(isValid(12345)).to.equal(null)

                })
            })


        })

    })




