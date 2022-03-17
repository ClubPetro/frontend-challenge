/* eslint-disable testing-library/no-unnecessary-act */
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Card from '.';

describe('Componente de card', () => {
  it('renderiza corretamente', () => {
    render(
      <Card countryId={1} onUpdate={() => {return false}}/>
    )

    expect(screen.getByTestId("container-content")).toBeInTheDocument();
    expect(screen.getByAltText("flag")).toBeInTheDocument();
    expect(screen.getByText('Local:')).toBeInTheDocument();
    expect(screen.getByText('Meta:')).toBeInTheDocument();
    expect(screen.getByTestId('edit-button')).toBeInTheDocument();
    expect(screen.getByTestId('close-button')).toBeInTheDocument();
  })
})

