import { render, fireEvent } from '@testing-library/react';

import CreateCardData from '.';
import { CountryProvider } from '../../hooks/CountryContext';

const renderComponent = () =>
  render(
    <CountryProvider>
      <CreateCardData />,
    </CountryProvider>,
  );

const handleSubmit = jest.fn();

describe('CreateCardData', () => {
  it('should be able to register a country ', async () => {
    const { getByPlaceholderText, getByText } = renderComponent();

    const countryElement = getByPlaceholderText('Selecione...');
    const localElement = getByPlaceholderText(
      'Digite o local que deseja conhecer',
    );
    const dateElement = getByPlaceholderText('mês/ano');
    const buttonElement = getByText('Adicionar');

    fireEvent.change(countryElement, { target: { value: 'Brasil' } });
    fireEvent.change(localElement, { target: { value: 'São Paulo' } });
    fireEvent.change(dateElement, { target: { value: '052021' } });

    fireEvent.click(buttonElement);

    expect(handleSubmit).toHaveBeenCalled();
  });
});
