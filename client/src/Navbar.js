import React, { Component } from 'react'


class Navbar extends Component {

  render() {
    return (
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        <a
          className="navbar-brand col-sm-3 col-md-2 mr-0"
          href="https://criptoeconomia.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          &nbsp; Creador de Tokens
        </a>
        <div
          className= "address_container"
         target ="_blank"
        >
          {this.props.account}
        </div>

  </nav>
    );
  }
}

export default Navbar;
