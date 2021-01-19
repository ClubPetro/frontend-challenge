import React from 'react'
import { TextField } from '@material-ui/core'
import { Autocomplete, AutocompleteProps } from '@material-ui/lab'
import { FixedSizeList, ListChildComponentProps } from 'react-window'

import * as S from './styles'

function renderRow(props: ListChildComponentProps) {
  const { data, index, style } = props

  if (data[index]) {
    return React.cloneElement(data[index], {
      style: {
        ...style,
      },
    })
  }

  return <></>
}

const OuterElementContext = React.createContext({})

const OuterElementType = React.forwardRef<HTMLDivElement>((props, ref) => {
  const outerProps = React.useContext(OuterElementContext)
  return <div ref={ref} {...props} {...outerProps} />
})

OuterElementType.displayName = 'OuterElementType'

const ListboxComponent = React.forwardRef<HTMLDivElement>(
  function ListboxComponent(props, ref) {
    const { children, ...other } = props
    const itemData = React.Children.toArray(children)

    return (
      <div ref={ref}>
        <OuterElementContext.Provider value={other}>
          <FixedSizeList
            height={400}
            outerElementType={OuterElementType}
            width="100%"
            itemData={itemData}
            itemSize={46}
            itemCount={200}
          >
            {renderRow}
          </FixedSizeList>
        </OuterElementContext.Provider>
      </div>
    )
  }
)

export type SelectProps = Omit<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  AutocompleteProps<any, false, false, false>,
  'renderInput'
> & {
  error?: boolean
}

const Select = ({ error, ...props }: SelectProps) => {
  return (
    <S.Wrapper error={error}>
      <Autocomplete
        {...props}
        style={{ width: '100%' }}
        ListboxComponent={
          ListboxComponent as React.ComponentType<
            React.HTMLAttributes<HTMLElement>
          >
        }
        renderInput={(params) => <TextField {...params} />}
      />
    </S.Wrapper>
  )
}

export default Select
