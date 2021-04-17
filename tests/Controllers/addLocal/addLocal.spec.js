let createdLocal = null

let addLocalService = require("../../../src/Services/addLocal")
addLocalService.default = jest.fn().mockImplementation(() => createdLocal())
let addLocal = require("../../../src/Controllers/addLocal")

describe("Testing createLocal controller", () => {
    test("Expect status code 422 when user doesn't send name", async () => {
        const req = {
            body: {
                name: ""
            }
        }
        const res = {}
        res.status = jest.fn().mockReturnValue(res)
        res.json = jest.fn().mockReturnThis()

        await addLocal.default(req, res)
        expect(res.status).toBeCalledWith(422)
    })
    test("Expect status code 422 when user doesn't send description", async () => {
        const req = {
            body: {
                name: "alfa",
                description: ""
            }
        }
        const res = {}
        res.status = jest.fn().mockReturnValue(res)
        res.json = jest.fn().mockReturnThis()

        await addLocal.default(req, res)
        expect(res.status).toBeCalledWith(422)
    })
    test("Expect status code 422 when user doesn't send password", async () => {
        const req = {
            body: {
                name: "alfa",
                description: "lugar bacana",
                lat: ""
            }
        }
        const res = {}
        res.status = jest.fn().mockReturnValue(res)
        res.json = jest.fn().mockReturnThis()

        await addLocal.default(req, res)
        expect(res.status).toBeCalledWith(422)
    })
    test("Expect status code 422 when user doesn't send lng", async () => {
        const req = {
            body: {
                name: "alfa",
                description: "lugar bacana",
                lat: -19.91540438607873,
                lng: ""
            }
        }
        const res = {}
        res.status = jest.fn().mockReturnValue(res)
        res.json = jest.fn().mockReturnThis()

        await addLocal.default(req, res)
        expect(res.status).toBeCalledWith(422)
    })
    test("Expect status code 201 when user send body", async () => {
        const req = {
            body: {
                name: "Bombons Lalka",
                description: "Doceria de bonbos",
                lat: -19.91540438607873,
                lng: -43.927371843889745
            }
        }
        const res = {}
        res.status = jest.fn().mockReturnValue(res)
        res.json = jest.fn().mockReturnThis()

        await addLocal.default(req, res)
        expect(res.status).toBeCalledWith(201)
    })
    test("Expect status code 400 when user send a allready local name", async () => {
        class FakeError extends Error {
            constructor() {
                super("FAKE ERROR")
                this.code = "23505"
            }
        }
        createdLocal = jest.fn().mockImplementation(() => {
            throw new FakeError()
        })
        const req = {
            body: {
                name: "Bombons Lalka",
                description: "Doceria de bonbos",
                lat: -19.91540438607873,
                lng: -43.927371843889745
            }
        }
        const res = {}
        res.status = jest.fn().mockReturnValue(res)
        res.json = jest.fn().mockReturnThis()

        await addLocal.default(req, res)
        expect(res.status).toBeCalledWith(400)
    })
    test("Expect status code 500 when DB fail to add", async () => {
        createdLocal = jest.fn().mockImplementation(() => {
            throw new Error("Error taunt")
        })
        const req = {
            body: {
                name: "Bombons Lalka",
                description: "Doceria de bonbos",
                lat: -19.91540438607873,
                lng: -43.927371843889745
            }
        }
        const res = {}
        res.status = jest.fn().mockReturnValue(res)
        res.json = jest.fn().mockReturnThis()

        await addLocal.default(req, res)
        expect(res.status).toBeCalledWith(500)
    })
})