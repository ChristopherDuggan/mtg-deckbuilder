import React from 'react'
import './Header.css'
import github from '../../images/github.png'

class Header extends React.Component {
  render() {

    const { handleSubmit, handleTextInput } = this.props
    
    return(
      <div className="header">

        <form
          id="Results"
          onSubmit={handleSubmit}>
          <button type="submit">Search</button>
          <input
            placeholder="Search by Name"

            input-type="name"

            id="nameField"

            onChange={handleTextInput}
          />

        </form>
      <h1>Chris' MtG Deckbuilder</h1>
      <a href="https://github.com/christopherduggan">
        <img src={github} alt="Chris' GitHub" className="icon"/>
      </a>
      </div>
    )
  }
}

export default Header
