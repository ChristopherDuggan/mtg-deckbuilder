import React from 'react'
import './ResultEntry.css'

class ResultEntry extends React.Component {
  render() {

    const { result, addCardToList } = this.props

    const {
      id, imageUrl, name, text, printings,legalities
    } = this.props.result

    return (
      <div
        key={id}
        className="result-entry"
      >

        <img src={imageUrl}/>
        <div className="result-entry-text">
          <h2>{name}</h2>
          <p>{text}</p>
          <button
            onClick={() => addCardToList(result)}
            name={name}
            id={id}
          >
            Add To Deck
          </button>
        </div>
        <div className="result-entry-sets">

          <h3>Sets Printed</h3>
          <select className="sets-printed">
            {printings.map(elm => <option>{elm}</option>)}
          </select>

          <ul className="legalities">
            <li><h3>Legal Formats</h3></li>
            {legalities.map(elm => <li>{elm.format}</li>)}
          </ul>

        </div>
      </div>
    )
  }
}

export default ResultEntry
