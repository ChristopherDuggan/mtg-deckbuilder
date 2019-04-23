import React from 'react'
import Home from './Home'
import Advanced from './Advanced'
import Results from './Results'
import DeckDetails from './DeckDetails'

class Main extends React.Component{
  renderSwitch(currentView){
    switch(currentView){
      case 'DeckDetails':
      return <DeckDetails/>;
      case 'Advanced':
      return <Advanced/>
      case 'Results':
      return <Results results={this.props.searchResults}/>
      default:
      return <Home/>
    }
  }
  render() {

    console.log(this.props.searchResults)

    const { currentView } = this.props
    return(
      <main>
        {this.renderSwitch(currentView)}
      </main>
    )

  }
}

export default Main
