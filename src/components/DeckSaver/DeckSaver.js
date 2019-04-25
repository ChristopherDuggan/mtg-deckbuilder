import React from 'react'

class DeckSaver extends React.Component {
  render() {
    if(this.props.saveMode === false) {
      return (
        <button onClick={this.props.toggleSaveMode}>Save Deck</button>
      )
    } else {
      return (
        <form
        onSubmit={this.props.handleSave}
        >
          <button type="submit">Save</button>
          <input
            placeholder="Deck Name"
            input-type="deckName"
            onChange={this.props.handleTextInput}
          />
        </form>
      )
    }
  }
}

export default DeckSaver
