import React from 'react';
import { render } from '@testing-library/react';
import { CountryContext } from './countryContext';

const renderWithCountryContextMocked = (
    countryList: CountryApiData[],
    UIComponent: React.ReactElement,
) => {
    const Wrapper = () => {
        return (
            <CountryContext.Provider value={{ countryList }}>
                {UIComponent}
            </CountryContext.Provider>
        );
    };
    return render(<Wrapper />);
};

export default renderWithCountryContextMocked;
