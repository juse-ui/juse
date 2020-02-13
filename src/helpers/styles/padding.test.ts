import { getPaddingHorizontal, getPaddingVertical } from './padding';

describe('Padding helpers', () => {
  it('works for horizontal padding', () => {
    expect(getPaddingHorizontal('2rem')).toMatchObject({ paddingLeft: '2rem', paddingRight: '2rem' });
  });

  it('works for vertical padding', () => {
    expect(getPaddingVertical('2rem')).toMatchObject({ paddingTop: '2rem', paddingBottom: '2rem' });
  });
});
