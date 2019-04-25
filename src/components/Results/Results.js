import React from 'react'
import ResultEntry from '../ResultEntry/ResultEntry'
import './Results.css'

class Results extends React.Component {
  render() {

    const { results, addCardToList} = this.props

    let displayList = []

    const renderResults = results.map(result =>{
      if(!displayList.includes(result.name)) {
        displayList.push(result.name)
        return(
          <ResultEntry
            result = {result}
            addCardToList = {addCardToList}
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
