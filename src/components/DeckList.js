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

    return (
      <ul>
        {makeList}
      </ul>
    )
  }
}

export default DeckList
