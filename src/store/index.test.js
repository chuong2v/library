const rewire = require("rewire")
const index = rewire("./index")
const configureStore = index.__get__("configureStore")
// @ponicode
describe("configureStore", () => {
    test("0", () => {
        let callFunction = () => {
            configureStore(32)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            configureStore(80)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            configureStore(4)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            configureStore(16)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            configureStore(1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            configureStore(Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})
