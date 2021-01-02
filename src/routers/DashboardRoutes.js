import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { HeroScreen } from '../components/heroes/HeroScreen'
import { DcScreen } from '../components/dc/DcScreen'
import { Navbar } from '../components/ui/Navbar'
import { SearchScreen } from '../components/search/SearchScreen'

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />

            <div className="container mt-5 text-center">
                <Switch>
                    <Route exact path="/marvel" component={MarvelScreen} />
                    <Route exact path="/dc" component={DcScreen} />
                    <Route exact path="/hero/:heroId" component={HeroScreen} />
                    <Route exact path="/search" component={SearchScreen} />

                    <Redirect to='/marvel' />
                </Switch>
            </div>
        </>
    )
}