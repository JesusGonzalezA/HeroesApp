import React, { useMemo } from 'react'
import queryString from 'query-string'

import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { HeroCard } from '../heroes/HeroCard';

export const SearchScreen = ({ history }) => {

    const location = useLocation();
    const { q = '' } = queryString.parse( location.search );

    const [ filter, handleFilterChange ] = useForm({
        name: q
    });
    const { name } = filter;

    const heroesFiltered =  useMemo(() => getHeroesByName( q ), [q])
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        history.push(`?q=${name}`);
    }


    return (
        <div>
           <h1>Search a hero</h1>
           <hr/>

           <div className="row mt-5">
                <div className="col-5">
                    <h4>Form</h4>
                    <hr/>

                    <form onSubmit={ handleSubmit }>
                        <input 
                            type="text"
                            placeholder="Find your hero"
                            className="form-control"
                            autoComplete="off"
                            name="name"
                            value={ name }
                            onChange={ handleFilterChange }
                        />
                      
                        <button
                            type="submit"
                            className="btn btn-block mt-1 btn-outline-primary"
                        >
                            Search...
                        </button>
                    </form>

                </div>

                <div className="col-7">

                    <h4>Results</h4>
                    <hr/>

                    {   
                        (q==='')
                            &&
                            <div className="alert alert-info">
                                Search a hero
                            </div>
                    }

                    {
                        (q!=='' && heroesFiltered.length === 0)
                            &&
                            <div className="alert alert-danger">
                                There is no a hero with { q }
                            </div>
                    }

                    <div className="animate__animated animate__fadeInRight">
                    {
                        heroesFiltered.map( hero => (
                            <HeroCard
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }
                    </div>
            
                </div>   
           </div> 
        </div>
    )
}
