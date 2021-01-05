import React from 'react';
import { mount } from 'enzyme'

import { LoginScreen } from "../../../components/login/LoginScreen"
import { AuthContext } from '../../../auth/AuthContext';
import { types } from '../../../types/types';

describe('Testing Login component', () => {
    
    const history = {
        replace: jest.fn()
    }

    const contextValues = {
        dispatch: jest.fn(),
        user: {
            logged: false
        }
    }

    const wrapper = mount(
        <AuthContext.Provider value={contextValues}>
            <LoginScreen history={ history }/>
        </AuthContext.Provider>
    )

    test('should match the snapshot', () => {
        expect( wrapper ).toMatchSnapshot();
    })

    test('should call dispatch and replace', () => {
        wrapper.find('button').at(0).simulate('click');

        expect( contextValues.dispatch ).toHaveBeenCalledWith({
            type: types.login,
            payload: {
                name: 'Jesus',
                email: 'jesus@mail.com'
            }
        });

        expect( history.replace ).toHaveBeenCalled();
    })

    test('should redirect to the last visited page', () => {
        
        const handleClick = wrapper.find('button').prop('onClick');

        handleClick();
        expect( history.replace ).toHaveBeenCalledWith('/');

        localStorage.setItem('lastPath', '/dc');
        handleClick();
        expect( history.replace ).toHaveBeenCalledWith('/dc');
    })
    
    
    
})
