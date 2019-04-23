import React, { Component } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import DeckList from './components/DeckList'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentView: 'Home',
      results: []
    }
    this.changeView = this.changeView.bind(this)
    this.search = this.search.bind(this)

  }
  changeView(e){
    this.setState({
      currentView: e.target.id
    })
  }

  search(e, parameters){
    let url = `https://api.magicthegathering.io/v1/cards?`

    Object.entries(parameters)
    .map(entry => url+=`${entry[0]}=${encodeURIComponent(entry[1])}&`)

    axios.get(url)
    .then(response => response.data.cards)
    .then(data => this.setState({results: data})
  )
  }

  render() {
    return (
      <div>

        <Header
          search = {this.search}
          changeView = {this.changeView}
        />
        <Main
          currentView = {this.state.currentView}
          searchResults = {this.state.results}
        />
        <DeckList />
      </div>
    );
  }
}

export default App;
