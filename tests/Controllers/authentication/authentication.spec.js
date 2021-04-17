let authenticate = null

let authenticateService = require("../../../src/Services/authenticate")
authenticateService.default = jest.fn().mockImplementation(() => authenticate())
let authentication = require("../../../src/Controllers/authentication")

describe("Testing authenticate controller", () => {
    test("Expect status code 422 when user doesn't send email", async () => {
        const req = {
            body: {
                email: ""
            }
        }
        const res = {}
        res.status = jest.fn().mockReturnValue(res)
        res.json = jest.fn().mockReturnThis()

        await authentication.default(req, res)
        expect(res.status).toBeCalledWith(422)
    })
    test("Expect status code 422 when user doesn't send password", async () => {
        const req = {
            body: {
                email: "email@email.com",
                password: ""
            }
        }
        const res = {}
        res.status = jest.fn().mockReturnValue(res)
        res.json = jest.fn().mockReturnThis()

        await authentication.default(req, res)
        expect(res.status).toBeCalledWith(422)
    })
    test("Expect status code 200 when logs", async () => {
        const req = {
            body: {
                email: "email@email.com",
                password: "456789abcd"
            }
        }
        const res = {}
        res.status = jest.fn().mockReturnValue(res)
        authenticate = jest.fn().mockReturnThis
        res.json = jest.fn().mockReturnThis()

        await authentication.default(req, res)
        expect(res.status).toBeCalledWith(200)
    })
})