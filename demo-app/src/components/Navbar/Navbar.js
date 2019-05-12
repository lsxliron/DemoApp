import React from 'react'

class Navbar extends React.Component {

  render() {
    return (
      <nav className="light-blue accent-4">
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">Demo App</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar