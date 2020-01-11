import { Greeter } from '.';

describe('Greeter', () => {
  it('greets properly', () => {
    expect(Greeter('World')).toBe('Hello World');
  });
});
