import {  fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import ConfirmationModal from '.';

describe('Componente de confirmation modal', () => {
  it('renderiza corretamente', () => {
    render(
      <ConfirmationModal open={true} onClose={() => {return false}} onDelete={() => {return false}}/>
    )
    expect(screen.getByText('Você tem certeza que deseja excluir esse destino?')).toBeInTheDocument()
    expect(screen.getByText('Essa ação não poderá ser desfeita.')).toBeInTheDocument()
    expect(screen.getByRole('button', {name: 'Cancelar'})).toBeInTheDocument()
    expect(screen.getByRole('button', {name: 'Deletar'})).toBeInTheDocument()
  })
  it('chama a função de onDelete', () => {
    const handleDelete = jest.fn();
    render(
      <ConfirmationModal open={true} onClose={() => {return false}} onDelete={() => handleDelete()}/>
    )
    const deleteButton = screen.getByText('Deletar');
    deleteButton.click()
    expect(handleDelete).toBeCalled();
  })
  it('chama a função de onClose', () => {
    const handleClose = jest.fn();
    render(
      <ConfirmationModal open={true} onClose={() => handleClose()} onDelete={() => {return false}}/>
    )
    const closeButton = screen.getByText('Cancelar');
    closeButton.click()
    expect(handleClose).toBeCalled();
  })
  it('chama a função de onClose através do svg', () => {
    const handleClose = jest.fn();
    render(
      <ConfirmationModal open={true} onClose={() => handleClose()} onDelete={() => {return false}}/>
    )
    const closeButton = screen.getByTestId('close-button');
    fireEvent.click(closeButton)
    expect(handleClose).toBeCalled();
  })
})

