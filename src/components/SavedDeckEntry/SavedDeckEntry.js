import React from 'react'
import './SavedDeckEntry.css'

class SavedDeckEntry extends React.Component {
  render() {

    const { deck, handleLoad } = this.props


    const deckArray = JSON.parse(window.localStorage.getItem(deck))
    const deckName = deck.substring(5)

    const renderedDeck = deckArray.map(card => {
      return(

        <li>{card.name} x {card.count} </li>

      )

    })
    return (
      <div
        key={deckName}
        className="saved-deck-entry"
      >
        <h1>{deckName}</h1>
        <ul>
          {renderedDeck}
        </ul>
        <button
          id={deckName}
          onClick={handleLoad}
          className="load-mode-button"
        >
          Load Deck
        </button>
      </div>
    )
  }
}
export default SavedDeckEntry
