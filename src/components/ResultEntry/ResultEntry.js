import React from 'react'
import './ResultEntry.css'

class ResultEntry extends React.Component {
  render() {
    return (
      <div
        key={this.props.result.id}
        className="result-entry"
      >

        <img src={this.props.result.imageUrl}/>
        <div className="result-entry-text">
          <h2>{this.props.result.name}</h2>
          <p>{this.props.result.text}</p>
          <button
            onClick={() => this.props.addCardToList(this.props.result)}
            name={this.props.result.name}
            id={this.props.result.id}
          >
            Add To Deck
          </button>
        </div>
        <div className="result-entry-sets">
        
          <h3>Sets Printed</h3>
          <select className="sets-printed">
            {this.props.result.printings.map(elm => <option>{elm}</option>)}
          </select>

          <ul className="legalities">
            <li><h3>Legal Formats</h3></li>
            {this.props.result.legalities.map(elm => <li>{elm.format}</li>)}
          </ul>

        </div>
      </div>
    )
  }
}

export default ResultEntry
