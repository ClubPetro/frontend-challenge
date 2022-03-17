import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import Listing from '.';

describe('Componente de listagem', () => {
  it('renderiza corretamente', () => {
    render(
      <Listing/>
    )
    expect(screen.getByTestId('select-input')).toBeInTheDocument();
    expect(screen.getByText('Local')).toBeInTheDocument();
    expect(screen.getByTestId('local-input')).toBeInTheDocument();
    expect(screen.getByText('Meta')).toBeInTheDocument();
    expect(screen.getByTestId('meta-input')).toBeInTheDocument();
    expect(screen.getByRole('button', {name: 'Adicionar'})).toBeInTheDocument();
  })
  it('preenche os inputs e pressiona o botão de adicionar', () => {
    render(
      <Listing/>
    )
    const inputs = (screen.getAllByRole('textbox')) as HTMLInputElement[];
    fireEvent.change(inputs[0], {target: {value: 'Paraíba'}})
    fireEvent.change(inputs[1], {target: {value: '12/2023'}})
    expect(inputs[0].value).toBe('Paraíba')
    expect(inputs[1].value).toBe('12/2023')
    const addButton = screen.getByRole('button', {name: 'Adicionar'})
    addButton.click();
  })
})
