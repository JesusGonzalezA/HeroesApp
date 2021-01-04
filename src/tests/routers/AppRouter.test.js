import React from 'react';
import { mount } from 'enzyme';
import { AuthContext } from '../../auth/AuthContext';
import { AppRouter } from '../../routers/AppRouter';

describe('Testing AppRouter component', () => {

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: false
        }
    }

    let wrapper;
    beforeEach( () => {
        wrapper = mount( 
            <AuthContext.Provider value={ contextValue }>
                <AppRouter />
            </AuthContext.Provider>
        );
    })

    
    test('should show the login if the user is not authed', () => {
        expect( wrapper ).toMatchSnapshot();
    })

    test('should show the home page if the user is logged', () => {
        const contextValue = {
            dispatch: jest.fn(),
            user: {
                logged: true
            }
        }

        const wrapper = mount( 
            <AuthContext.Provider value={ contextValue }>
                <AppRouter />
            </AuthContext.Provider>
        );

        expect( wrapper.find('.navbar').exists() ).toBe(true);
    })
    
    
})
