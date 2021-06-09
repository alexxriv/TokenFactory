import React, {Component} from 'react'




class Guide extends Component {

    render() {
      return (
            <div><br/><br/><div class="alert alert-warning">
                <strong> Guía para interactuar con una aplicación descentralizada (DAPP)<br/>
                Actualmente solo funcionamos en la red de Binance (BSC), pronto estaremos en Ethereum<br/>
                    <p><string> Desde una computadora:</string></p>
                <ol>
                    <li>Descarga la extensión de <a href="https://metamask.io/download">Metamask</a> para Google Chrome</li>
                    <li>Una vez instalado, abre la extensión de Metamask</li>
                    <li>Crea una nueva cuenta o importa tu cuenta de Binance si ya cuentas con una</li>
                    <li>Conectate a la Red de Binance dando click en "Custom RPC"</li>
                    <li>Network Name: Binance Smart Chain <br/>
                        RPC URL: https://bsc-dataseed.binance.org/ <br/>
                        ChainID: 56 <br/>
                        Symbol: BNB <br/>
                        Block Explorer: https://bscscan.com</li>
                    <li>Vuelve a cargar esta págiina y listo!</li>

                </ol>
                <p><string> Desde un celular:</string></p>
                <ol>
                    <li>Descarga un browser descentralizado como <a href="https://mathwallet.org/en-us/">MathWallet</a> o <a href="https://trustwallet.com">TrustWallet</a></li>
                    <li>Entra a la aplicación y crea una wallet de Binance o importa tu wallet si ya cuentas con una</li>
                    
                    <li>Entra a esta página desde la app y listo!</li>

                </ol>
                <p>Recuerda que las billeteras de Ethereum y Binance comparten la misma dirección
                    <br/>
                    Esto significa que si ya tienes una wallet de Ethereum entonces ya tienes una wallet de Binance :)
                </p>
               </strong>
            </div></div>
      );
    }
  }
  
  export default Guide;
  