import { forwardRef } from 'react';
import SelectUnstyled, {
  selectUnstyledClasses
} from '@mui/base/SelectUnstyled';
import OptionUnstyled, {
  optionUnstyledClasses
} from '@mui/base/OptionUnstyled';
import PopperUnstyled from '@mui/base/PopperUnstyled';
import { styled } from '@mui/system';

function Select({ countries, currentValue, selectCountry }: any) {
  const StyledButton = styled('button')`
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    height: 50px;
    box-sizing: border-box;
    position: relative;
    width: 100%;
    background: #ffffff;
    border: 1px solid #cacaca;
    border-radius: 6px;
    padding: 10px;
    text-align: left;
    line-height: 1.5;
    color: #000000;

    &:hover {
      background: #fcfcfc;
      border-color: #e9e9e9;
    }

    &.${selectUnstyledClasses.expanded} {
      &::after {
        content: '▴';
      }
    }

    &::after {
      content: '▾';
      float: right;
    }
  `;

  const StyledListbox = styled('ul')`
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    box-sizing: border-box;
    padding: 5px;
    margin: 10px 0;
    min-width: 100%;
    max-height: 300px;
    background: #ffffff;
    border: 1px solid #cacaca;
    border-radius: 6px;
    color: '#ffffff';
    overflow: auto;
    outline: 0px;
  `;

  const StyledOption = styled(OptionUnstyled)`
    list-style: none;
    padding: 8px;
    border-radius: 0.45em;
    cursor: pointer;

    &:last-of-type {
      border-bottom: none;
    }

    &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected}&:not(.${optionUnstyledClasses.disabled}) {
      background-color: #d5ebd3;
      color: #006c18;
    }

    &.${optionUnstyledClasses.disabled} {
      background-color: transparent;
      color: #a7a6a6;
    }

    &:hover:not(.${optionUnstyledClasses.disabled}) {
      background-color: #ecffea;
      color: #006c18;
    }
  `;

  const StyledPopper = styled(PopperUnstyled)`
    z-index: 1;
    width: calc(100% - 32px);
  `;

  const CustomSelect = forwardRef(function CustomSelect(props: any, ref: any) {
    const components = {
      Root: StyledButton,
      Listbox: StyledListbox,
      Popper: StyledPopper,
      ...props.components
    };

    return <SelectUnstyled {...props} ref={ref} components={components} />;
  });

  return (
    <CustomSelect
      renderValue={(value: any) => {
        if (!value) return 'Selecione...';
        return value.label;
      }}
      defaultValue={currentValue.name || 'default'}
      onChange={selectCountry}
    >
      <StyledOption disabled value={'default'}>
        Selecione...
      </StyledOption>
      {countries &&
        countries.map((country: any) => (
          <StyledOption
            key={country.translations.br}
            value={country.translations.br}
          >
            <img
              loading='lazy'
              width='23'
              style={{ marginRight: '10px' }}
              src={country.flag}
              alt={`Flag of ${country.translations.br}`}
            />
            {country.translations.br}
          </StyledOption>
        ))}
    </CustomSelect>
  );
}

export default Select;
