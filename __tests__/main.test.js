const { add } = require('../src/main');

describe('add', () => {
  it('should add two nums', () => {
    expect(add(1, 2)).toBe(3);
  });
  it('should handle zero', () => {
    expect(add(1, 0)).toBe(1);
  });
  it('should handle negative', () => {
    expect(add(1, -4)).toBe(-3);
  });
  it('should handle decimal', () => {
    expect(add(1, 1.5)).toBe(2.5);
  });
});
