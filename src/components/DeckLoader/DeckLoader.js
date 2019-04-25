import React from 'react'
import SavedDecks from '../SavedDecks/SavedDecks'

class DeckLoader extends React.Component {
  render() {

    return (
      <div>
        <SavedDecks
          handleLoad = {this.props.handleLoad}
        />
      </div>
    )
  }
}

export default DeckLoader
