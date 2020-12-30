import React, {useState} from 'react'
import { heroes } from '../../data/heroes'
import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { HeroCard } from '../heroes/HeroCard';

export const SearchScreen = () => {

    const [heroesFiltered, setHeroesFiltered] = useState(heroes);
    const [ filter, handleFilterChange, resetFilter ] = useForm({
        name: ''
    });
    const { name } = filter;

    const handleSubmit = (e) => {
        e.preventDefault();
        
        setHeroesFiltered( getHeroesByName(name) );

        resetFilter();
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
    )
}
