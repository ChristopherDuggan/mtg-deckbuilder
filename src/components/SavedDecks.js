import React from 'react'

class SavedDecks extends React.Component {
  render() {

    const savedDecks = Object.keys(window.localStorage).filter(item => item.startsWith('deck_'))


    const savedDeckList = savedDecks.map(deck => {

      const deckArray = JSON.parse(window.localStorage.getItem(deck))
      const renderedDeck = deckArray.map(card => {
        return(
          <li>{card.name} x {card.count} </li>
        )
      })
      return  (
        <ul>
          {renderedDeck}
        </ul>
      )
    })

    return (
      <div>
        {savedDeckList}
      </div>
    )
  }
}

export default SavedDecks
