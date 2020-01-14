import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';

import { Button } from '.';

describe('Button Component', () => {
  it('renders without crashing', () => {
    render(<Button>Children</Button>);
  });

  it('renders content', () => {
    const { getByText } = render(<Button>Children</Button>);

    expect(() => getByText('Children')).not.toThrow();
  });

  it('calls onClick on click if passed', () => {
    const mockOnClick = jest.fn();
    const { getByText } = render(<Button onClick={mockOnClick}>Children</Button>);
    const button = getByText('Children');

    fireEvent.click(button);

    expect(mockOnClick).toBeCalledTimes(1);
  });
});
