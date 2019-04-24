import React, { Component } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import DeckList from './components/DeckList'
import SavedDecks from './components/SavedDecks'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentView: 'Home',
      input: {},
      results: [],
      cardToAdd:{},
      deckArray: [{
      "name": "Niv-Mizzet, the Firemind",
      "manaCost": "{2}{U}{U}{R}{R}",
      "cmc": 6.0,
      "colors": [
        "Red",
        "Blue"
      ],
      "colorIdentity": [
        "R",
        "U"
      ],
      "count": 1,
      "type": "Legendary Creature — Dragon Wizard",
      "supertypes": [
        "Legendary"
      ],
      "types": [
        "Creature"
      ],
      "subtypes": [
        "Dragon",
        "Wizard"
      ],
      "rarity": "Rare",
      "set": "A25",
      "setName": "Masters 25",
      "text": "Flying\nWhenever you draw a card, Niv-Mizzet, the Firemind deals 1 damage to any target.\n{T}: Draw a card.",
      "flavor": "\"(Z–>)90º – (E–N²W)90ºt = 1\"",
      "artist": "Todd Lockwood",
      "number": "210",
      "power": "4",
      "toughness": "4",
      "layout": "normal",
      "multiverseid": 442199,
      "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=442199&type=card",
      "watermark": "set",
      "rulings": [
        {
          "date": "2018-03-16",
          "text": "If a spell or ability causes you to draw multiple cards, Niv-Mizzet’s ability triggers that many times."
        },
        {
          "date": "2018-03-16",
          "text": "If dealing 1 damage to a permanent or player causes you to draw a card, perhaps because Niv-Mizzet is enchanted by Curiosity, you’ll continue this loop until the loop is interrupted, perhaps by a player losing the game."
        }
      ],
      "foreignNames": [
        {
          "name": "火想者ニヴ＝ミゼット",
          "text": "飛行\nあなたがカードを１枚引くたび、クリーチャー１体かプレイヤー１人を対象とする。火想者ニヴ＝ミゼットはそれに１点のダメージを与える。\n{T}：カードを１枚引く。",
          "flavor": "「(Z–>)90º – (E–N²W)90ºt = 1」",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=442448&type=card",
          "language": "Japanese",
          "multiverseid": 442448
        },
        {
          "name": "炎灵尼米捷",
          "text": "飞行\n每当你抓一张牌时，炎灵尼米捷对目标生物或牌手造成1点伤害。\n{T}：抓一张牌。",
          "flavor": "「(Z–>)90º – (E–N²W)90ºt = 1」",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=442697&type=card",
          "language": "Chinese Simplified",
          "multiverseid": 442697
        }
      ],
      "printings": [
        "A25",
        "C17",
        "DDJ",
        "DRB",
        "GK1",
        "GPT",
        "MM2",
        "PCMP",
        "PRM"
      ],
      "originalText": "Flying\nWhenever you draw a card, Niv-Mizzet, the Firemind deals 1 damage to target creature or player.\n{T}: Draw a card.",
      "originalType": "Legendary Creature — Dragon Wizard",
      "legalities": [
        {
          "format": "1v1",
          "legality": "Legal"
        },
        {
          "format": "Commander",
          "legality": "Legal"
        },
        {
          "format": "Duel",
          "legality": "Legal"
        },
        {
          "format": "Legacy",
          "legality": "Legal"
        },
        {
          "format": "Modern",
          "legality": "Legal"
        },
        {
          "format": "Penny",
          "legality": "Legal"
        },
        {
          "format": "Vintage",
          "legality": "Legal"
        }
      ],
      "id": "b0b85155-481b-5fc0-961c-db73df1cf3da"
    },],
      saveMode: false

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
  }

  handleSubmit (e) {
    e.preventDefault()
    this.search(this.state.input)
    this.changeView(e)
  }

  handleTextInput(e) {
    const type = e.target.getAttribute('input_type')
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
    console.log(listNames)
    if(!listNames.includes(card.name)){
      card.count = 1
      this.setState(prevState => prevState.deckArray.push(card))
    } else {
      let index = this.state.deckArray.indexOf(card)
      if(this.state.deckArray[index].count < 4
      || card.supertypes.includes('Basic')
      || card.text.toLowerCase().includes('a deck can have any number of cards named')
      ){
        this.setState(prevState => prevState.deckArray[index].count++)

        if (card.supertypes.includes('Basic')) {
          console.log('hits basic');
        }
        if (card.text.toLowerCase().includes('a deck can have any number of cards named')){
          console.log('hits relentless rat logic');
        }
      }
    }
  }

  incrementCard (card) {
    if(!card.count){
      card.count = 0;
      console.log(card.count)
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

  storeDeck (name) {
    window.localStorage.setItem(`deck_${name}`, JSON.stringify(this.state.deckArray))
  }

  handleSave (e) {
    e.preventDefault()
    this.storeDeck(this.state.input.deckName)
    this.toggleSaveMode()
  }

  render() {
    return (
      <div>

        <Header
          handleSubmit = {this.handleSubmit}
          handleTextInput = {this.handleTextInput}
        />
        <SavedDecks />
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
          handleSave = {this.handleSave}
          handleTextInput = {this.handleTextInput}
          saveMode = {this.state.saveMode}
        />
      </div>
    );
  }
}

export default App;
