import React from 'react'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.handleTextInput = this.handleTextInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.search(e, this.state)
    this.props.changeView(e)
  }

  handleTextInput(e) {
    const type = e.target.getAttribute('input_type')
    const value = e.target.value

    this.setState(state => {
      return {[type]: value}
    })
  }

  render() {

    return(
      <div>
        <form
          id="Results"
          onSubmit={this.handleSubmit}>
          <input
            placeholder="Search by Name"

            input_type="name"

            id="nameField"

            onChange={this.handleTextInput}
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
