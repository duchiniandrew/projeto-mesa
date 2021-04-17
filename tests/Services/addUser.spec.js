const container = require("typedi")
container.Container = jest.fn().mockImplementation(() => {})
const addUserService = require("../../src/Services/addUser")

describe("Testing addUser service", () => {
    test("Expect service to throw an error when saving register", async () => {
        
        const result = await addUserService.default("andrew", "andrew@gmail.com", "1234abcde")
        expect(result).toThrowError()
    })
})