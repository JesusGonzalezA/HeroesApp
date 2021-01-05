import React from 'react';
import { mount } from 'enzyme'
import '@testing-library/jest-dom'

import { Navbar } from "../../../components/ui/Navbar"
import { AuthContext } from '../../../auth/AuthContext';
import { MemoryRouter, Router } from 'react-router-dom';
import { types } from '../../../types/types';

describe('Test in Navbar component', () => {

    const historyMock = {
        push: jest.fn(),
        replace: jest.fn(),
        location: {},
        listen: jest.fn(),
        createHref: jest.fn()
    }
    
    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: true,
            name: 'Jesus'
        }
    }
    const wrapper = mount(
        <AuthContext.Provider value={ contextValue } >
            <MemoryRouter>
                <Router history={historyMock}>
                    <Navbar />
                </Router>
            </MemoryRouter>
        </AuthContext.Provider>
    );

    afterEach(() => {
        jest.clearAllMocks();
    })

    test('should match the snapshot', () => {
        expect( wrapper ).toMatchSnapshot();

        const {name} = contextValue.user;
        const greetingText = wrapper.find('.text-info').text().trim();

        expect( greetingText.includes(name)).toBe(true);
    });

    test('should call logout and history', () => {
        
        wrapper.find('button').prop('onClick')();

        expect( contextValue.dispatch ).toHaveBeenCalledWith({
            type: types.logout
        });

        expect( historyMock.replace ).toHaveBeenCalledWith('/login');
    })
    
    
})
