const { hello, double, average, joinWords, repeatWord } = require('../src/simpleAsync');

describe("hello", () => {
    test("hello function", async () => {
        const text = await hello("Iryna");
        expect(text).toBe("Hello, Iryna");
    });

    test("hello function with empty string", async () => {
        await expect(hello(" ")).resolves.toBe("Hello,");
    });
});

describe("double", () => {
    test("double function", async () => {
        await expect(double(4)).resolves.toBe(8);
    });

    test("double with negative", async () => {
        await expect(double(-3)).resolves.toBe(-6);
    });
});

describe("average", () => {
    test("average of numbers", async () => {
        await expect(average([2, 4, 6])).resolves.toBe(4);
    });

    test("average with one element", async () => {
        await expect(average([10])).resolves.toBe(10);
    });
});

describe("joinWords", () => {
    test("joins with space", async () => {
        await expect(joinWords(["hello", "world"])).resolves.toBe("hello world");
    });

    test("single word", async () => {
        await expect(joinWords(["Iryna"])).resolves.toBe("Iryna");
    });
});

describe("repeatWord", () => {
    test("repeats word N times", async () => {
        await expect(repeatWord("ha", 3)).resolves.toBe("hahaha");
    });

    test("zero times gives empty string", async () => {
        await expect(repeatWord("x", 0)).resolves.toBe("");
    });
});
