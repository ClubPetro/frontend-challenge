import { render, screen } from '@testing-library/react';
import Tooltip from '.';

describe('Tooltip', () => {
  it('renders', () => {
    const message = 'Something wrong happened';
    render(<Tooltip errorMessage={message} />);

    expect(screen.getByText(message));
  });
});
