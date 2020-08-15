import React, { lazy } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const Main = lazy(() => import('pages/Main'))
const Pokemons = lazy(() => import('pages/Pokemons'))

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Main />
      </Route>
      <Route path="/pokemons">
        <Pokemons />
      </Route>
    </Switch>
  </Router>
)

export default Routes
