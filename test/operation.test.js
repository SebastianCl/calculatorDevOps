const sum = require('../controller/lib/operation');

test('Test sum', () => {
    expect(sum(1, 2)).toBe(3);
});
