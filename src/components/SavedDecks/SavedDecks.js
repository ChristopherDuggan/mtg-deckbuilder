import React from 'react'
import SavedDeckEntry from '../SavedDeckEntry/SavedDeckEntry'
import './SavedDecks.css'

class SavedDecks extends React.Component {
  render() {

    const savedDecks = Object.keys(window.localStorage).filter(item => item.startsWith('deck_'))


    return (
      <div className="results">
        <SavedDeckEntry
          savedDecks = {savedDecks}
        />
      </div>
    )
  }
}

export default SavedDecks
