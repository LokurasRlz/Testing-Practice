const Calculator = require('./task3');
const calc = new Calculator();
describe('Simple Calculator', () => {
  test('Sum', () => {
    expect(calc.add(2, 3)).toBe(5);
    expect(calc.add(7, 8)).toBe(15);
    expect(calc.add(-3, 5)).toBe(2);
  });
  test('Subtract', () => {
    expect(calc.subtract(2, 3)).toBe(-1);
    expect(calc.subtract(7, 8)).toBe(-1);
    expect(calc.subtract(5, 3)).toBe(2);
  });
  test('Multiply', () => {
    expect(calc.multiply(2, 3)).toBe(6);
    expect(calc.multiply(7, 8)).toBe(56);
    expect(calc.multiply(-3, 5)).toBe(-15);
  });
  test('Divide', () => {
    expect(calc.divide(4, 2)).toBe(2);
    expect(calc.divide(1, 2)).toBe(0.5);
    expect(calc.divide(-6, 3)).toBe(-2);
  });
});