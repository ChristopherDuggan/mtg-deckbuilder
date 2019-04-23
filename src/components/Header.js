import React from 'react'

class Header extends React.Component {
  render() {

    return(
      <div>
        <form
          id="Results"
          onSubmit={this.props.handleSubmit}>
          <input
            placeholder="Search by Name"

            input_type="name"

            id="nameField"

            onChange={this.props.handleTextInput}
          />
          <button type="submit">Submit</button>
        </form>
        <h1>Chris' MtG Deckbuilder</h1>
        <nav>
          <ul>
            <li id="Advanced" onClick={this.props.changeView}>
              Advanced Search
            </li>
            <li id="Results" onClick={this.props.changeView}>
              Search Results
            </li>
            <li id="DeckDetails" onClick={this.props.changeView}>
              Deck Details
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Header
