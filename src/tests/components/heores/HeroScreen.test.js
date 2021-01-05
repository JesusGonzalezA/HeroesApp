import React from 'react';
import { mount } from 'enzyme'

import { HeroScreen } from '../../../components/heroes/HeroScreen';
import { MemoryRouter, Route } from 'react-router-dom';


describe('Testing HeroScreen component', () => {
    
    const history = {
        length: 10,
        push: jest.fn(),
        goBack: jest.fn()
    }
    
    
    test('should redirect if there arent args in the URL', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero']}>
                <HeroScreen history={ history } />
            </MemoryRouter>
        );
        
        expect( wrapper.find('Redirect').exists() ).toBe(true);
    })
    
    test('should show a hero', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route path="/hero/:heroId">
                    <HeroScreen history={ history } />
                </Route>
            </MemoryRouter>
        );
        
        expect( wrapper.find('Redirect').exists() ).toBe(false);
    })

    test('shouldnt return when the user has entered this as the 1st page', () => {

        const history = {
            length: 1,
            push: jest.fn(),
            goBack: jest.fn()
        }

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route 
                    path="/hero/:heroId"
                    component={ (props) => <HeroScreen history={history}/>}>
                </Route>
            </MemoryRouter>
        );

        wrapper.find('button').at(0).simulate('click');
        expect(history.push).toHaveBeenCalledWith('/');
    })

    test('shouldnt return when the user has entered this as the 1st page', () => {

        const history = {
            length: 10,
            push: jest.fn(),
            goBack: jest.fn()
        }

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route 
                    path="/hero/:heroId"
                    component={ (props) => <HeroScreen history={history}/>}>
                </Route>
            </MemoryRouter>
        );

        wrapper.find('button').at(0).simulate('click');
        expect(history.goBack).toHaveBeenCalledWith();
    })

    test('should redirect if the hero doesnt exist', () => {

        const history = {
            length: 10,
            push: jest.fn(),
            goBack: jest.fn()
        }

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider1231232']}>
                <Route 
                    path="/hero/:heroId"
                    component={ (props) => <HeroScreen history={history}/>}>
                </Route>
            </MemoryRouter>
        );

        expect( wrapper.text() ).toBe('');
    })
    
})
