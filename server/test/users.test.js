const signup = require('../api/users.js');
const expect = require(expect);
const assert  = require('assert');
const chai = require('chai')
const chaiAsPromised = require('chai-as-promised');
// const expect = chai.expect
chai.use(chaiAsPromised)


describe('signup()', () => {
    it('should catch an error', async () => {
        return expect(signup(async (req, res))).to.be.rejected
    })
})

describe('signup()', () => {
    it('2 + 2 is 4', async () => {
        const p = await signup(2, 2)
        expect(p).to.equal(4);
    })
})

// describe ('../api/users.js', () => {
//     describe('signup', () => {
//         context('without arguments', async function () {
//             it("Using signup to simulate asynchronous code!", async function(done){
//                 await signup(async function() {
//                     expect(await signup()).to.equal(500, "Successful")
//                     done('');
//                 }, 200);
//             });
//             //
//             // it('should return true', function () {
//             //     expect(signup('', '')).to.equal(null);
//             // })
//         })
//     })
// })

