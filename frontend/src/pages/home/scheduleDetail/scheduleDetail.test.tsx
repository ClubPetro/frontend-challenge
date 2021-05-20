/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-props-no-spreading */

import { render, screen } from '@testing-library/react';
import ScheduleDetail from '.';
import MockedScheduleProvider from '../../../context/scheduleContext/mockedScheduleProvider';

describe('ScheduleDetail test suite', () => {
    it('should render component form', () => {
        const routeComponentPropsMock = {
            history: {} as any,
            location: {} as any,
            match: {
                params: { id: '12' },
                isExact: false,
                path: '',
                url: '',
            },
        };
        const testList: Schedule[] = [
            {
                country: 'Brasil',
                date: '01/2121',
                flag: 'flag',
                id: '12',
                location: 'Salvador',
            },
        ];

        render(
            <MockedScheduleProvider scheduleList={testList}>
                <ScheduleDetail {...routeComponentPropsMock} />
            </MockedScheduleProvider>,
        );
        // screen.logTestingPlaygroundURL();
        const countryTitle = screen.getByText('País');
        expect(countryTitle).toBeInTheDocument();

        const locationTitle = screen.getByText('Local');
        expect(locationTitle).toBeInTheDocument();

        const dateTitle = screen.getByText('Meta');
        expect(dateTitle).toBeInTheDocument();

        const confirmButton = screen.getByRole('button', {
            name: /confirmar/i,
        });
        expect(confirmButton).toBeInTheDocument();

        const cancelButton = screen.getByRole('button', {
            name: /cancelar/i,
        });
        expect(cancelButton).toBeInTheDocument();
    });
});
