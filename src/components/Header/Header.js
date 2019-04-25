import React from 'react'
import './Header.css'

class Header extends React.Component {
  render() {

    return(
      <div className="header">

        <form
          id="Results"
          onSubmit={this.props.handleSubmit}>
          <button type="submit">Search</button>
          <input
            placeholder="Search by Name"

            input-type="name"

            id="nameField"

            onChange={this.props.handleTextInput}
          />

        </form>
      <h1>Chris' MtG Deckbuilder</h1>
      </div>
    )
  }
}

export default Header
