/* eslint-disable testing-library/no-unnecessary-act */
import {  act, fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import EditModal from '.';

describe('Componente de edit modal', () => {
  it('renderiza corretamente', () => {
    render(
      <EditModal countryId={1} open={true} onClose={() => {return false}} onUpdate={() => {return false}}/>
    )
    expect(screen.getByAltText('flag')).toBeInTheDocument();
    expect(screen.getByRole('heading', {level: 1})).toBeInTheDocument();
    expect(screen.getByRole('small')).toBeInTheDocument();
    expect(screen.getByText('Local')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Digite o local que deseja conhecer')).toBeInTheDocument();
    expect(screen.getByText('Meta')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('mês/ano')).toBeInTheDocument();
    expect(screen.getByRole('button', {name: 'Salvar'})).toBeInTheDocument();
  })
  it('preenche os campos do formulário', () => {
    render(
      <EditModal countryId={1} open={true} onClose={() => {return false}} onUpdate={() => {return false}}/>
    )
    const inputs = (screen.getAllByRole('textbox')) as HTMLInputElement[];
    act(() => {
      fireEvent.change(inputs[0], {target: {value: 'Paraíba'}})
      fireEvent.change(inputs[1], {target: {value: '12/2023'}})
      expect(inputs[0].value).toBe('Paraíba')
      expect(inputs[1].value).toBe('12/2023')
    });
    
  })
  it('chama a função de onClose', () => {
    const handleClose = jest.fn();
    render(
      <EditModal countryId={1} open={true} onClose={() => handleClose()} onUpdate={() => {return false}}/>
    )
    const closeButton = screen.getByTestId('close-button');
    act(() => {
      fireEvent.click(closeButton)
    });
    
    expect(handleClose).toHaveBeenCalled();
  })
})

