/* eslint-disable @typescript-eslint/no-empty-function */

import { render, screen } from '@testing-library/react';
import InputMaskComponent from '.';

describe('InputMaskElement test suite', () => {
    render(
        <InputMaskComponent
            onChange={() => {}}
            inputSize="large"
            value=""
            textLabel="Label Title"
            id="teste"
            placeholder="mês/ano"
        />,
    );
    it('should render textLabel', () => {
        const labelTitle = screen.getByText('Label Title');
        expect(labelTitle).toBeInTheDocument();
    });
});
