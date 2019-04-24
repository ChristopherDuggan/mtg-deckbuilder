import React from 'react'

class DeckList extends React.Component {

  render() {
    const makeList = this.props.deckArray.map(card => {
      return (
        <li key={card.name}>
          {card.name}
          x {card.count}
          <span onClick={() => this.props.incrementCard(card)}> + </span>
          <span onClick={() => this.props.decrementCard(card)}> - </span>
        </li>
      )
    })
    if(this.props.saveMode === false){
      return (
        <ul>
          <li><button onClick={this.props.toggleSaveMode}>Save Deck</button></li>
          {makeList}
        </ul>
      )
    } else {
      return (
        <ul>
          <li>
            <form
            onSubmit={this.props.handleSave}
            >
              <button type="submit">Save</button>
              <input
                placeholder="Enter Deck Name"
                input_type="deckName"
                onChange={this.props.handleTextInput}
              />
            </form>
          </li>
          {makeList}
        </ul>
      )
    }
  }
}

export default DeckList
