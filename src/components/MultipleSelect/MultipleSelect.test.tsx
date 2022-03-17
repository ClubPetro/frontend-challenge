import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import MultipleSelect from '.';

const countries = [
  {
    name:{
      common: 'Uruguay',
      official: 'República Oriental del Uruguay',
    },
    flags:{
      png: 'https://flagcdn.com/w320/uy.png',
      svg: 'https://flagcdn.com/uy.svg',
    },
    translations:{
      por:{
        official: 'República Oriental do Uruguai',
        common: 'Uruguai',
      }
    }
  },
  {
    name:{
      common: 'Paraguay',
      official: 'Republic of Paraguay',
    },
    flags:{
      png: 'https://flagcdn.com/w320/py.png',
      svg: 'https://flagcdn.com/py.svg',
    },
    translations:{
      por:{
        official: 'República do Paraguai',
        common: 'Paraguai',
      }
    }
  }
]

describe('Componente de select', () => {
  it('renderiza corretamente', () => {
    render(
      <MultipleSelect countries={countries} onSelect={() => {return false}} value=""/>
    )
    expect(screen.getByText('País')).toBeInTheDocument();
    expect(screen.getByTestId('select-input')).toBeInTheDocument();
  })

  it('seleciona uma opção',() => {
    render(
      <MultipleSelect countries={countries} onSelect={() => {return false}} value=""/>
    )
    fireEvent.mouseDown(screen.getByRole('button'));
    expect(screen.getByRole("listbox")).not.toEqual(null);
    const option = screen.getByRole("option", {name: 'Uruguai'});
    option.click();
    expect(screen.getByText('Uruguai')).toBeInTheDocument();
  })

})
