import { render, screen, fireEvent } from '@testing-library/react';

import Card from '.';
import { CountryProvider } from '../../hooks/CountryContext';

const renderComponent = (data = {}, onDelete = jest.fn()) => {
  const defaultData = {
    id: 'countryID',
    flag: 'Brazil',
    name: 'Brazil',
    local: 'São Paulo',
    date: '05/2021',
  };

  const finalData = { ...defaultData, ...data };

  render(
    <CountryProvider>
      <Card data={finalData} onDelete={onDelete} />
    </CountryProvider>,
  );
};

describe('Card', () => {
  describe('when renders', () => {
    beforeEach(renderComponent);

    it('displays the country name', () => {
      expect(screen.getByText('Brazil')).toBeInTheDocument();
    });

    it('displays the local name', () => {
      expect(screen.getByText(/São Paulo/i)).toBeInTheDocument();
    });

    it('displays the date', () => {
      expect(screen.getByText(/05\/2021/)).toBeInTheDocument();
    });
  });

  describe('when the user clicks on delete button', () => {
    it('calls the onDelete function', () => {
      const mockHandleDelete = jest.fn();

      renderComponent({}, mockHandleDelete);

      const deleteButton = screen.getByRole('button', { name: 'excluir' });

      expect(deleteButton).toBeInTheDocument();

      fireEvent.click(deleteButton);

      expect(mockHandleDelete).toHaveBeenCalled();
    });
  });
});
