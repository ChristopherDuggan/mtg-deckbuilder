import React, { Component } from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import DeckList from './components/DeckList/DeckList'
import SavedDecks from './components/SavedDecks/SavedDecks'
import axios from 'axios'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentView: 'Home',
      input: {},
      results: [],
      cardToAdd:{},
      deckArray: [],
      saveMode: false,
      loadMode: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleTextInput = this.handleTextInput.bind(this)
    this.changeView = this.changeView.bind(this)
    this.addCardToList = this.addCardToList.bind(this)
    this.incrementCard = this.incrementCard.bind(this)
    this.decrementCard = this.decrementCard.bind(this)
    this.storeDeck = this.storeDeck.bind(this)
    this.toggleSaveMode = this.toggleSaveMode.bind(this)
    this.handleSave = this.handleSave.bind(this)
    this.handleLoad = this.handleLoad.bind(this)
  }

  handleSubmit (e) {
    e.preventDefault()
    this.search(this.state.input)
    this.changeView(e)
  }

  handleTextInput(e) {
    const type = e.target.getAttribute('input-type')
    const value = e.target.value

    this.setState(state => {
      return {input: {[type]: value}}
    })
  }

  changeView(e){
    this.setState({
      currentView: e.target.id
    })
  }

  search(parameters){
    let url = `https://api.magicthegathering.io/v1/cards?`

    Object.entries(parameters)
    .map(entry => url+=`${entry[0]}=${encodeURIComponent(entry[1])}&`)

    axios.get(url)
    .then(response => response.data.cards)
    .then(data => this.setState({results: data}))
  }

  addCardToList (card) {
    let listNames = this.state.deckArray.map(card => card.name)
    if(!listNames.includes(card.name)){
      card.count = 1
      this.setState(prevState => prevState.deckArray.push(card))
    } else {
      let index = this.state.deckArray.indexOf(card)
      if(this.state.deckArray[index].count < 4
      || card.supertypes.includes('Basic')
      || (card.text != null && card.text.toLowerCase().includes('a deck can have any number of cards named'))
      ){
        this.setState(prevState => prevState.deckArray[index].count++)

      }
    }
  }

  incrementCard (card) {
    if(!card.count){
      card.count = 0;

    }
    if(card.count < 4
      || card.supertypes.includes('Basic')
      || card.text.toLowerCase().includes('a deck can have any number of cards named')) {
      card.count++

      const index = this.state.deckArray.findIndex((arrayCard) => arrayCard.name === card.name)

      this.setState(prevState => prevState.deckArray[index].count = card.count
      )

      this.state.deckArray.findIndex((arrayCard) => arrayCard.name === card.name)
    }
  }

  decrementCard (card) {
    card.count--

    const index = this.state.deckArray.findIndex((arrayCard) => arrayCard.name === card.name)

    if(card.count === 0)  {
      this.setState(prevState => prevState.deckArray.splice(index, 1))
    } else {
      this.setState(prevState => prevState.deckArray[index].count = card.count
      )

      this.state.deckArray.findIndex((arrayCard) => arrayCard.name === card.name)

    }
  }

  toggleSaveMode () {
    this.setState(prevState => ({saveMode: !prevState.saveMode}))
  }

  toggleLoadMode () {
    this.setState(prevState => ({loadMode: !prevState.loadMode}))
  }

  storeDeck (name) {
    window.localStorage.setItem(`deck_${name}`, JSON.stringify(this.state.deckArray))
  }

  handleSave (e) {
    e.preventDefault()
    this.storeDeck(this.state.input.deckName)
    this.toggleSaveMode()
  }

  handleLoad (e) {
    e.preventDefault()
    this.toggleLoadMode()
  }

  render() {
    return (
      <div className="app">
        <Header
          handleSubmit = {this.handleSubmit}
          handleTextInput = {this.handleTextInput}
        />
        <div className="content-box">
          <Main
            currentView = {this.state.currentView}
            searchResults = {this.state.results}
            addCardToList = {this.addCardToList}
          />
          <DeckList
            deckArray = {this.state.deckArray}
            incrementCard = {this.incrementCard}
            decrementCard = {this.decrementCard}
            toggleSaveMode = {this.toggleSaveMode}
            toggleLoadMode = {this.toggleLoadMode}
            handleSave = {this.handleSave}
            handleLoad = {this.handleLoad}
            handleTextInput = {this.handleTextInput}
            saveMode = {this.state.saveMode}
            loadMode = {this.state.loadMode}
            changeView = {this.changeView}
          />
        </div>
       </div>
    );
  }
}

export default App;
