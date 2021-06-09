import React, { Component } from 'react'

class Main extends Component {
	render() {

		return (
			<div id = "content" className= "mt-3">
          <div className= "card mb-4" >
          <div>
        <div class="alert alert-info">
                  <strong>Muy pronto funcionaremos en la red de Ethereum!</strong><br/>
                </div>

            </div>
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
                            placeholder= "ej. Safe Nice Coin"
                            required /><br/>

                            <label htmlFor="symbol">Symbol:</label><br/>
                            <input className= "form-control form-control-lg"
                                   placeholder= "ej. SNC" 
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
                            
                            <input name ="burnable" type="checkbox" 
                              id="burnable"
                              ref = {(burnable) => {this.burnable =burnable}}
                            />
                            <span className="checkmark"></span>
                          </label>
                          <small> (Any user can burn its own tokens)</small><br/>
                            <small>(Cualquier usuario puede quemar sus propios tokens)</small>

                          <label className="container">Mintable
                            <input name = "mintable" type="checkbox"
                              id="mintable"
                              ref = {(mintable) => {this.mintable =mintable}}
                            />
                            <span className="checkmark"></span>
                          </label>
                          <small>(Any user can mint new tokens to his own address)</small><br/>
                          <small>(Cualquier usuario puede imprimir tokens a su propia dirección)</small>

                            </div>

                        <input className = "btn btn-primary btn-block btn-lg" type="submit" value="Submit!"/>
                      <small><strong>fee:</strong> ~ 0.2 BNB, Do not change fee in transaction or Token won´t be created</small><br/>
                      <small><strong>Costo:</strong> ~ 0.2 BNB, No cambies comisión de transacción o el Token no será creado</small>
                     </form>

                </div>

            </div>


                 <div class="alert alert-success">
                   <strong><a href="https://www.criptoeconomia.org">Criptoeconomia.org</a></strong> <br/>
                   Contactanos si quieres crear un Token personalizado <br/>
                  Si quieres añadir Logo, Página Web, o tener tu Token en un intercambio como PancakeSwap o Uniswap nos puedes contactar! <br/>
                <strong><a href="https://www.criptoeconomia.org">Contact us </a>for a personalized Token</strong>
                </div>
        </div>

			);
	}
}

export default Main;