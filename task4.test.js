const capitalize = require('./task4');
test('capitalizes string', () => {
    expect(capitalize('mati')).toBe('Mati');
});