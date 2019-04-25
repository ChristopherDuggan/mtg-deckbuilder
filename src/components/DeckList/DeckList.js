import React from 'react'
import DeckSaver from '../DeckSaver/DeckSaver'
import './DeckList.css'

class DeckList extends React.Component {

  render() {
    const makeList = this.props.deckArray.map(card => {
      return (
        <li key={card.name}>
          <span
            className="plus-minus"
            onClick={() => this.props.incrementCard(card)}
          >
            +&ensp;
          </span>
          <span
           className="plus-minus"
           onClick={() => this.props.decrementCard(card)}
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
              toggleSaveMode = {this.props.toggleSaveMode}
              handleSave = {this.props.handleSave}
              handleTextInput = {this.props.handleTextInput}
              saveMode = {this.props.saveMode}
            />
          </li>
          {makeList}
        </ul>
        <button id="DeckLoader" onClick={this.props.changeView}>View Saved Decks</button>
      </div>
    )
  }
}

export default DeckList
