import React, { Component } from 'react'


class Token extends Component {

  render() {
    return (
        <div className="token viewer">
          
      <div className="alert alert-success">
          <strong>Token Generado con éxito!</strong> <br/>
        </div>
          
          &nbsp; Tu nuevo token:
        <div
          className= "token_container"
         target ="_blank"
        >
          {this.props.token}
        </div>
        <div>
        <div className= "alert alert-success">
            <br/>
            1. Abre Metamask <br/>
            2. Da click en "agregar nuevo Token"<br/>
            3. Pega la dirección de tu token<br/>
            4. Listo!! <br/>
        </div>
        <div className= "alert alert-success">
            <br/>
            1. Open Metamask <br/>
            2. Click on "Add new Token"<br/>
            3. Paste your Token Address<br/>
            4. Good to go!! <br/>
        </div>
        </div>
  </div>
    );
  }
}

export default Token;
