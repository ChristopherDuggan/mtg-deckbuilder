import React from 'react'
import SavedDeckEntry from '../SavedDeckEntry/SavedDeckEntry'
import './SavedDecks.css'

class SavedDecks extends React.Component {
  render() {

    const savedDecks = Object.keys(window.localStorage).filter(item => item.startsWith('deck_'))

    const renderDecks = savedDecks.map(deck => {
      return (
        <SavedDeckEntry
          deck = {deck}
          handleLoad = {this.props.handleLoad}
        />
      )
    })

    return(
      <div className="saved-decks">
        {renderDecks}
      </div>
    )
  }
}

export default SavedDecks
