import React from 'react'

class Results extends React.Component {
  render() {
    console.log(this.props.results)
    const renderResults = this.props.results.map(result => (
      <div>
        <h3>{result.name}</h3>
        <img src={result.imageUrl}/>
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
