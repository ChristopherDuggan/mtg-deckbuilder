import React from 'react'

class Results extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      displayList: []
    }
  }
  render() {
    let displayList = []

    const renderResults = this.props.results.map(result =>{
      if(!displayList.includes(result.name)) {
        displayList.push(result.name)
        return(
          <div key={result.id}>
            <h3>{result.name}</h3>
            <img src={result.imageUrl}/>
            <button
              onClick={() => this.props.addCardToList(result)}
              name={result.name}
              id={result.id}
            >Add To Deck</button>
          </div>
        )
      }
    })

    return (
      <div>
        <h1>Results View</h1>
        {renderResults}
      </div>

    )
  }
}

export default Results
