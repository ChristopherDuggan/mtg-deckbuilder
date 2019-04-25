import React from 'react'
import './SavedDeckEntry.css'

class SavedDeckEntry extends React.Component {
  render() {

    const makeEntry = this.props.savedDecks.map(deck => {

      const deckName = deck.substring(5)

      const deckArray = JSON.parse(window.localStorage.getItem(deck))

      const renderedDeck = deckArray.map(card => {
        return(

          <li>{card.name} x {card.count} </li>
        )

    })


      return  (


        <ul>
          <h1>{deckName}</h1>
          {renderedDeck}
        </ul>
      )
    })

    return (
      <div className="saved-deck-entry">
        {makeEntry}
      </div>
    )
  }
}

export default SavedDeckEntry
