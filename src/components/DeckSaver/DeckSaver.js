import React from 'react'

class DeckSaver extends React.Component {
  render() {

    const { saveMode,toggleSaveMode, handleSave, handleTextInput } = this.props

    if(saveMode === false) {
      return (
        <button onClick={toggleSaveMode}>Save Deck</button>
      )
    } else {
      return (
        <form
        onSubmit={handleSave}
        >
          <button type="submit">Save</button>
          <input
            placeholder="Deck Name"
            input-type="deckName"
            onChange={handleTextInput}
          />
        </form>
      )
    }
  }
}

export default DeckSaver
