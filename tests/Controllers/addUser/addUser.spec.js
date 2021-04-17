let createdUser = null

let addUserService = require("../../../src/Services/addUser")
addUserService.default = jest.fn().mockImplementation(() => createdUser())
let addUser = require("../../../src/Controllers/addUser/addUser")

describe("Testing addUser controller", () => {
    test("Expect status code 422 when user doesn't send name", async () => {
        const req = {
            body: {
                name: ""
            }
        }
        const res = {}
        res.status = jest.fn().mockReturnValue(res)
        res.json = jest.fn().mockReturnThis()

        await addUser.default(req, res)
        expect(res.status).toBeCalledWith(422)
        // expect(res.json()).toBeCalledWith({ message: "Name parameter empty." })
    })
    test("Expect status code 422 when user doesn't send email", async () => {
        const req = {
            body: {
                name: "alfa",
                email: ""
            }
        }
        const res = {}
        res.status = jest.fn().mockReturnValue(res)
        res.json = jest.fn().mockReturnThis()

        await addUser.default(req, res)
        expect(res.status).toBeCalledWith(422)
    })
    test("Expect status code 422 when user doesn't send password", async () => {
        const req = {
            body: {
                name: "alfa",
                email: "andrew@gmail.com",
                password: ""
            }
        }
        const res = {}
        res.status = jest.fn().mockReturnValue(res)
        res.json = jest.fn().mockReturnThis()

        await addUser.default(req, res)
        expect(res.status).toBeCalledWith(422)
    })
    test("Expect status code 400 when user send password out of pattern", async () => {
        const req = {
            body: {
                name: "alfa",
                email: "andrew@gmail.com",
                password: "1234"
            }
        }
        const res = {}
        res.status = jest.fn().mockReturnValue(res)
        res.json = jest.fn().mockReturnThis()

        await addUser.default(req, res)
        expect(res.status).toBeCalledWith(400)
    })
    test("Expect status code 201 when user send body", async () => {
        const req = {
            body: {
                name: "alfa",
                email: "andrew@gmail.com",
                password: "1234abcd"
            }
        }
        const res = {}
        res.status = jest.fn().mockReturnValue(res)
        res.json = jest.fn().mockReturnThis()

        await addUser.default(req, res)
        expect(res.status).toBeCalledWith(201)
    })
    test("Expect status code 400 when user send a allready used email", async () => {
        class FakeError extends Error {
            constructor() {
                super("FAKE ERROR")
                this.code = "23505"
            }
        }
        createdUser = jest.fn().mockImplementation(() => {
            throw new FakeError()
        })
        const req = {
            body: {
                name: "alfa",
                email: "andrew@gmail.com",
                password: "1234abcd"
            }
        }
        const res = {}
        res.status = jest.fn().mockReturnValue(res)
        res.json = jest.fn().mockReturnThis()

        await addUser.default(req, res)
        expect(res.status).toBeCalledWith(400)
    })
    test("Expect status code 500 when DB fail to add", async () => {
        createdUser = jest.fn().mockImplementation(() => {
            throw new Error("Error taunt")
        })
        const req = {
            body: {
                name: "alfa",
                email: "andrew@gmail.com",
                password: "1234abcd"
            }
        }
        const res = {}
        res.status = jest.fn().mockReturnValue(res)
        res.json = jest.fn().mockReturnThis()

        await addUser.default(req, res)
        expect(res.status).toBeCalledWith(500)
    })
})