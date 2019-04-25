import React from 'react'
import ResultEntry from '../ResultEntry/ResultEntry'
import './Results.css'

class Results extends React.Component {
    render() {
    let displayList = []

    const renderResults = this.props.results.map(result =>{
      if(!displayList.includes(result.name)) {
        displayList.push(result.name)
        return(
          <ResultEntry
            result = {result}
            addCardToList = {this.props.addCardToList}
          />
        )
      }
    })

    return (
      <div className="results">
        {renderResults}
      </div>

    )
  }
}

export default Results
