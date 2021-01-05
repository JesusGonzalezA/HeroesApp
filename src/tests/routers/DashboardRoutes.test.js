import React from 'react';
import { mount } from "enzyme"
import { DashboardRoutes } from "../../routers/DashboardRoutes"
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';

describe('Testing DashBoardRoutes component', () => {
    
    test('should match the snapshot', () => {
        const contextValue = {
            dispatch: jest.fn(),
            user: {
                logged: true,
                name: 'Jesus'
            }
        }

        const wrapper = mount(
            <MemoryRouter>
                <AuthContext.Provider value={ contextValue }>
                    <DashboardRoutes />
                </AuthContext.Provider>
            </MemoryRouter>
        );

        expect( wrapper ).toMatchSnapshot();

        const greetingText = wrapper.find('.text-info').text().trim();
        expect( greetingText.includes(contextValue.user.name) ).toBe( true );
    })
    
})
