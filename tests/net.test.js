const { getPost, hello } = require('../src/net');

describe("getPost", () => {
    let MockFetch;

    beforeEach(
        () => {MockFetch = jest.fn()
    })

    test("getPost (sendObj)", async () => {
        const fake = { id: 1, title: 'foo', body: 'bar' };

        MockFetch.mockResolvedValueOnce({
            ok: true,
            status: 200,
            json: async () => fake
        })

        const data = await getPost(1, MockFetch)
        expect(MockFetch).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/posts/1')
        expect(data).toEqual(fake)
    })

})

describe("hello", () => {
    test("hello function", async () => {
        let text = await hello("Iryna")
        expect(text).toBe("Hello, Iryna")
    })
   })