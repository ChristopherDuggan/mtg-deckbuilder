import React from 'react'
import { Route } from 'react-router-dom'
import Advanced from './Advanced'
import Results from './Results'
import DeckDetails from './DeckDetails'

class Main extends React.Component{
  render() {
    return(
      <main>
        <h1>This is the main section</h1>
        <Route path="/results" component={Results} />
        <Route path="/advanced" component={Advanced} />
        <Route path="/deckdetails" component={DeckDetails} />
      </main>
    )
  }
}

export default Main
