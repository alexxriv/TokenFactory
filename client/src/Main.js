import React, { Component } from 'react'

class Main extends Component {
	render() {

		return (
			<div id = "content" className= "mt-3">
          <div className= "card mb-4" >
                <div className = "card-body">
                     <form className ="mb-3" onSubmit={(event) => {
                      event.preventDefault()
                      let name, symbol, burnable, mintable
                      name = this.name.value.toString();
                      symbol = this.symbol.value.toString();
                      burnable = this.burnable.checked;
                      mintable= this.mintable.checked;

                      const supply = this.supply.value; 

                      this.props.deployNewToken(name, symbol, supply,burnable,mintable)
                      
                    }}>
                         <div className = "vertical">
                         <label  className ="float-left" htmlFor="name">Token Name:</label><br/>
                          <input 
                            type="text" id="name" name="name"
                            ref = {(name) => {this.name = name}}
                            className= "form-control form-control-lg"
                            placeholder= "ElToken"
                            required /><br/>

                            <label htmlFor="symbol">Symbol:</label><br/>
                            <input className= "form-control form-control-lg"
                                   placeholder= "TKN" 
                                   type="text" id="symbol" name="symbol"
                                   ref = {(symbol) => {this.symbol =symbol}}
                                   /><br/>
                            <label htmlFor="supply">Total Supply:</label><br/>
                            <input className= "form-control form-control-lg"
                                  placeholder= "1000000000" 
                                  type="number" id="supply" name="supply"
                                  ref = {(supply) => {this.supply =supply}}
                                  /><br/>
                            <label htmlFor="burnable" className="container">Burnable
                            <small> (Any user can burn its own tokens)</small><br/>
                            <small>(Cualquier usuario puede quemar sus propios tokens)</small>
                            <input name ="burnable" type="checkbox" 
                              id="burnable"
                              ref = {(burnable) => {this.burnable =burnable}}
                            />
                            <span className="checkmark"></span>
                          </label>

                          <label className="container">Mintable
                          <small>(Any user can mint new tokens to his own address)</small><br/>
                          <small>(Cualquier usuario puede imrpimir tokens a su propia dirección)</small>

                            <input name = "mintable" type="checkbox"
                              id="mintable"
                              ref = {(mintable) => {this.mintable =mintable}}
                            />
                            <span className="checkmark"></span>
                          </label>

                            </div>

                        <input className = "btn btn-primary btn-block btn-lg" type="submit" value="Submit!"/>
                     </form>

                </div>
            </div>
        </div>

			);
	}
}

export default Main;