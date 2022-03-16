import React, { createContext, useCallback } from 'react';

export interface ISelectedLocales {
  selectedCountry: {};
  locale: string;
  date: string;
}

export interface ISelectedLocalesState {
  selecteds: ISelectedLocales[];
  setSelecteds: (locale: ISelectedLocales[]) => void;
}

const INITIAL_STATE: ISelectedLocalesState = {
  selecteds: [],
  setSelecteds: (locale) => {},
};

const SelectedLocalesContext = createContext(INITIAL_STATE);

export function SelectedLocalesProvider({
  children,
}: {
  children: JSX.Element;
}) {
  const [selecteds, setSelecteds] = React.useState<ISelectedLocales[]>([]);

  const setItems = useCallback(
    (locale: ISelectedLocales[]) => {
      setSelecteds(locale);
    },
    [selecteds]
  );

  return (
    <SelectedLocalesContext.Provider
      value={{ selecteds, setSelecteds: setItems }}
    >
      {children}
    </SelectedLocalesContext.Provider>
  );
}

export default SelectedLocalesContext;
