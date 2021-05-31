import React, { Component } from 'react'


class Token extends Component {

  render() {
    return (
        <div className="token viewer">
          &nbsp; Tu nuevo token:
        <div
          className= "token_container"
         target ="_blank"
        >
          {this.props.token}
        </div>
        <div>
            <br/>
            1. Abre Metamask <br/>
            2. Da click en "agregar nuevo Token"<br/>
            3. Pega la dirección de tu token<br/>
            4. Listo!! <br/>
        </div>

  </div>
    );
  }
}

export default Token;
