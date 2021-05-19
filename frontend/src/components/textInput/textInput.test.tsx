/* eslint-disable @typescript-eslint/no-empty-function */

import { render, screen } from '@testing-library/react';
import TextInput from '.';

describe('textInput test suite', () => {
    render(
        <TextInput
            onChange={() => {}}
            inputSize="large"
            value=""
            textLabel="Label Title"
            id="teste"
            placeholder="digite algo..."
        />,
    );
    it('should render textLabel', () => {
        const labelTitle = screen.getByText('Label Title');
        expect(labelTitle).toBeInTheDocument();
    });
});
