const testFunc = (a, b) => {
    return a + b
}

test('two plus two', () => {
    expect(testFunc(1, 1)).toBe(3);
});