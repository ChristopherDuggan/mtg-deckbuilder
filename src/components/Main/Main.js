import React from 'react'
import Home from '../Home/Home'
import Advanced from '../Advanced/Advanced'
import Results from '../Results/Results'
import DeckLoader from '../DeckLoader/DeckLoader'
import './Main.css'

class Main extends React.Component{
  renderSwitch(currentView){
    switch(currentView){
      case 'Advanced':
      return <Advanced/>
      case 'DeckLoader':
      return <DeckLoader/>
      case 'Results':
      return(
        <Results
          results={this.props.searchResults}
          addCardToList={this.props.addCardToList}
        />
      )
      default:
      return <Home/>
    }
  }
  render() {

    const { currentView } = this.props
    return(
      <main className="main">
        {this.renderSwitch(currentView)}
      </main>
    )

  }
}

export default Main
