import React, { Component } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import DeckList from './components/DeckList'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <DeckList />
      </div>
    );
  }
}

export default App;
