import React from 'react'
import DeckSaver from '../DeckSaver/DeckSaver'
import './DeckList.css'

class DeckList extends React.Component {

  render() {

    const {
      deckArray,
      incrementCard,
      decrementCard,
      toggleSaveMode,
      handleSave,
      handleTextInput,
      saveMode,
      changeView
    } = this.props

    const makeList = deckArray.map(card => {
      return (
        <li key={card.name}>
          <span
            className="plus-minus"
            onClick={() => incrementCard(card)}
          >
            +&ensp;
          </span>
          <span
           className="plus-minus"
           onClick={() => decrementCard(card)}
           >
           -&ensp;
          </span>
          {card.name}&emsp;x{card.count}
        </li>
      )
    })
    return (
      <div className="deck-list">
        <ul>
          <li>
            <DeckSaver
              toggleSaveMode = {toggleSaveMode}
              handleSave = {handleSave}
              handleTextInput = {handleTextInput}
              saveMode = {saveMode}
            />
          </li>
          <li><button id="DeckLoader" onClick={changeView}>View Saved Decks</button></li>
          {makeList}
        </ul>
      </div>
    )
  }
}

export default DeckList
