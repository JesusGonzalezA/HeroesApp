import React from 'react';
import { mount } from 'enzyme'
import { MemoryRouter, Route } from 'react-router-dom';
import { SearchScreen } from '../../../components/search/SearchScreen';

describe('Testing searchScreen component', () => {
    
    const wrapper = mount(
        <MemoryRouter initialEntries={['/search']}>
            <Route path="/search" component={ SearchScreen } />
        </MemoryRouter>
    )

    test('should show the default values correctly', () => {
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('.alert-info').text().trim() ).toBe('Search a hero')
    })

    test('should show batman and the input is the queryString', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <Route path="/search" component={ SearchScreen } />
            </MemoryRouter>
        )

        expect( wrapper.find('input').prop('value') ).toBe('batman')
        expect( wrapper ).toMatchSnapshot();
    })

    test('should show an error if the hero doesnt exist', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=testestestest']}>
                <Route path="/search" component={ SearchScreen } />
            </MemoryRouter>
        )

        expect( wrapper.find('.alert-danger').exists() ).toBe(true);
        expect( wrapper ).toMatchSnapshot();
    })
    
    test('should call push from history', () => {

        const history = {
            push: jest.fn()
        }

        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=testestestest']}>
                <Route 
                    path="/search" 
                    component={ () => <SearchScreen history={history} />} 
                />
            </MemoryRouter>
        )

        wrapper.find('input').simulate('change', {
            target: {
                name: 'name',
                value: 'batman'
            }
        });

        wrapper.find('form').prop('onSubmit')({
            preventDefault(){}
        })

        expect( history.push ).toHaveBeenCalledWith(`?q=batman`);
    })
    
    
})
