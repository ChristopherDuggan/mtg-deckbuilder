import React from 'react'

class Results extends React.Component {
  render() {
    const renderResults = this.props.results.map(result => (

      <div key={result.id}>
        <h3>{result.name}</h3>
        <img src={result.imageUrl}/>
        <button
          onClick={() => this.props.addCardToList(result)}
          name={result.name}
          id={result.id}
        >Add To Deck</button>
      </div>))

    return (
      <div>
        <h1>Results View</h1>
        {renderResults}
      </div>

    )
  }
}

export default Results
