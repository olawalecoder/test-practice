const calculator = require('./calculator.js');

describe('calculator adds ', () => {
  let jj;
  beforeEach(() => {
    jj = new calculator();
  });
  test('0 and positive number', () => {
    expect(jj.add(0, 5)).toBe(5);
  });
  test('negative and negative numbers', () => {
    expect(jj.add(-3, -8)).toBe(-11);
  })
  test('negative and positive numbers', () => {
    expect(jj.add(-3, 8)).toBe(5);
  })
})

describe('calculator subtracts ', () => {
  let jj;
  beforeEach(() => {
    jj = new calculator();
  });
  test('0 and positive number', () => {
    expect(jj.subtract(0, 5)).toBe(-5);
  });
  test('negative and negative numbers', () => {
    expect(jj.subtract(-3, -8)).toBe(5);
  })
  test('negative and positive numbers', () => {
    expect(jj.subtract(-3, 8)).toBe(-11);
  })
})

describe('calculator multiplies ', () => {
  let jj;
  beforeEach(() => {
    jj = new calculator();
  });
  test('0 and any number', () => {
    expect(jj.multiply(0, 5)).toBe(0);
  });
  test('negative and negative numbers', () => {
    expect(jj.multiply(-3, -8)).toBe(24);
  })
  test('negative and positive numbers', () => {
    expect(jj.multiply(-3, 8)).toBe(-24);
  })
})

describe('calculator devides ', () => {
  let jj;
  beforeEach(() => {
    jj = new calculator();
  });
  test('0 by any positive number', () => {
    expect(jj.devide(0, 5)).toBe(0);
  });
  test('negative by negative numbers', () => {
    expect(jj.devide(-8, -2)).toBe(4);
  })
  test('negative by positive numbers', () => {
    expect(jj.devide(-8, 2)).toBe(-4);
  })
  test('a number by 0 and returns Infinity', () => {
    expect(jj.devide(8, 0)).toBe(Infinity);
  })
})