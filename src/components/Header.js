import React from 'react'
import { Link } from 'react-router-dom'

class Header extends React.Component {
  render() {
    return(
      <div>
        <form>
          <input placeholder="Card Search"></input>
          <Link to="/results">Search</Link>
        </form>
        <h1>Chris' MtG Deckbuilder</h1>
        <nav>
          <Link to="/advanced">Advanced Search</Link>
          <Link to="/results">Search Results</Link>
          <Link to="/deckdetails">Deck Details</Link>
        </nav>
      </div>
    )
  }
}

export default Header
