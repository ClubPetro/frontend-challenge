import {  render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Header from '.';

describe('Componente de header', () => {
  it('renderiza corretamente', () => {
    render(
      <Header/>
    )
  
    expect(screen.getByAltText('logo')).toBeInTheDocument()
  })
})

