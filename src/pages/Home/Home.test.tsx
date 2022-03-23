import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Home from './Home';

window.alert = () => {};

test('Add values in form', () => {
  render(<Home />);

  const local = screen.getByPlaceholderText(
    /Digite o local que deseja conhecer/i
  ) as HTMLInputElement;
  local.value = 'Rio de Janeiro';

  (screen.getByPlaceholderText(/mês\/ano/i) as HTMLInputElement).value =
    '10/2023';

  fireEvent.click(screen.getByText(/Adicionar/i));

  expect(
    (
      screen.getByPlaceholderText(
        /Digite o local que deseja conhecer/i
      ) as HTMLInputElement
    ).value
  ).toEqual('Rio de Janeiro');

  expect(
    (screen.getByPlaceholderText(/mês\/ano/i) as HTMLInputElement).value
  ).toEqual('10/2023');
});
