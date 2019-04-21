import React from 'react'

class DeckList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      deckArray: [
        {name: `suq'ata lancer`, count: 1},
        {name :`llanowar elves`, count: 2},
        {name: `niv-mizzet, the firemind`, count: 4}
      ]
    }
    this.incrementCard = this.incrementCard.bind(this)
    this.decrementCard = this.decrementCard.bind(this)
  }
  incrementCard (e) {
    let affectedCard = this.state.deckArray.findIndex((card) =>card.name === e.target.className)
    if(this.state.deckArray[affectedCard].count < 4) {
      this.setState(previousState => this.state.deckArray[affectedCard].count += 1)
    }
  }

  decrementCard (e) {
    console.log('this decreases the card count')

    let affectedCard = this.state.deckArray.findIndex((card) =>card.name === e.target.className)
    if(this.state.deckArray[affectedCard].count > 0) {
      this.setState(previousState => this.state.deckArray[affectedCard].count -= 1)
    }
  }


  // You're going to need spread (...) to add and remove cards from the array

  render() {
    const makeList = this.state.deckArray.map(card => {
      return (
        <li key={card.name}>
          {card.name}
          x{card.count}
          <span className={card.name} onClick={this.incrementCard}>+</span>
          <span className={card.name} onClick={this.decrementCard}>-</span>
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
