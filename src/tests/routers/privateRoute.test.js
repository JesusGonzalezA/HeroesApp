import React from 'react';
import { mount } from 'enzyme';
import { PrivateRoute } from '../../routers/PrivateRoute';
import { MemoryRouter } from 'react-router-dom';

describe('Testing privateRouter component', () => {
    
    const props = {
        location: {
            pathname: '/'
        }
    }

    Storage.prototype.setItem = jest.fn();

    test('should show the component if the user is authed', () => {
        
        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute 
                    isAuthenticated= { true }
                    component= { () => <span>Hi</span>}
                    { ...props }
                     
                />
            </MemoryRouter>
        );
        
        expect( wrapper.find('span').exists()).toBe(true);      
    })
    
    test('should save localStorage', () => {
        mount(
            <MemoryRouter>
                <PrivateRoute 
                    isAuthenticated= { true }
                    component= { () => <span>Hi</span>}
                    { ...props }
                     
                />
            </MemoryRouter>
        );
        expect( localStorage.setItem ).toHaveBeenCalledWith('lastPath', props.location.pathname);
        
        mount(
            <MemoryRouter>
                <PrivateRoute 
                    isAuthenticated= { false }
                    component= { () => <span>Hi</span>}
                    { ...props }
                     
                />
            </MemoryRouter>
        );

        expect( localStorage.setItem ).toHaveBeenCalledWith('lastPath', props.location.pathname);
        expect( localStorage.setItem ).toHaveBeenCalledTimes(2);
    })

    test('should redirect when the user is not authed', () => {
        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute 
                    isAuthenticated= { false }
                    component= { () => <span>Hi</span>}
                    { ...props }
                     
                />
            </MemoryRouter>
        );
        
        expect( wrapper.find('span').exists()).toBe(false);
        expect( wrapper.html().length ).toBe(0);    
    })
    
    
})
