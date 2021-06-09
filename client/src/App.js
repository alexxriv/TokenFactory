import React, { Component } from 'react'
import Web3 from 'web3'
import Navbar from './Navbar'
import Main from './Main'
import './App.css'
import Factory from "./contracts/Factory.json";
import Token from './Token'
import Guide from './Guide'

class App extends Component {

   async componentWillMount() {
      await this.loadWeb3()
      await this.loadBlockchainData()
   }

   //fetch account to stater

   async loadBlockchainData() {
      const web3 = window.web3

      const accounts = await web3.eth.getAccounts()
      this.setState({account: accounts[0]})

      const networkId = await web3.eth.net.getId()
     

      //Load Factory Contract
      // take token json from imported files, get networkId, that will give us
      // the address 
      const factoryData = Factory.networks[networkId]
      if(factoryData) { //create web3 version of factory if it exists
         
         const factory = new web3.eth.Contract(Factory.abi, factoryData.address)
         this.setState({factory})
         this.setState({ loadingpg: false })

      } else {
         window.alert('factory contract not deployed to detected network')
      }

   

    }

  // connect app to blockchain, taked from metamask webpage

  async loadWeb3() {
     if(window.ethereum) {
        window.web3 = new Web3(window.ethereum)
        await window.ethereum.enable()
     }
     else if(window.web3) {
        window.web3 = new Web3(window.web3.currentProvider)
     }
     else {
        window.alert('No se ha detectado un browser de Ethereum. Considera descargar la extensión de Metamask')
     }
 
  }


  deployNewToken = async (_name, _symbol, _totalSupply, _burnable, _mintable) => {
    this.setState({ loading: true })
    _totalSupply = _totalSupply.toString()
    _totalSupply= _totalSupply.concat('000000000000000000')
   await this.state.factory.methods.deployNewToken(
      _name,
      _symbol,
      _totalSupply,
      _burnable,
      _mintable
    ).send({from: this.state.account,
      value: "200000000000000000"}).on('transactionHash', (hash) => {
    this.setState({ loading: true })})
    this.setState({ loading: true })
    await this.state.factory.getPastEvents(
      'AllEvents',
      {
        fromBlock: 0,
        toBlock: 'latest'
      },
      (err, events) => {
        const TOKEN = events[events.length-1].returnValues[0]
        console.log(TOKEN)
        this.setState({token: TOKEN})
      }
    )
    this.setState({ loading: false })
    this.setState({newToken: true})
  }







  constructor(props) {
    super(props)
    this.state = {
      account: '0x0',
      factory: {},
      loading: false,
      token: "",
      loadingpg: true,
      newToken: false,
    }
  }

  render() {
     let content
     if (!this.state.loading && !this.state.loadingpg && !this.state.newToken){
     content = <Main
      deployNewToken = {this.deployNewToken}
      token = {this.state.token}
        />
     } else if(this.state.newToken) {
       content = <Token token={this.state.token}/>
     }
     
     else if(this.state.loading){
      content = <p id = "loader" className= "text-center"> Loading... <br/>
      <div className="alert alert-warning">
      <strong>Warning!</strong> DO NOT CHANGE TRANSACTION VALUE OR TOKEN WONT BE DEPLOYED
      </div>
      <div className="alert alert-warning">
      <strong>ADVERTENCIA:</strong> NO CAMBIES EL VALOR DE LA TRANSACCIÓN, EL TOKEN NO SERÁ GENERADO 
      </div>
      <div className="alert alert-info">
          <strong>Has click en confirmar para crear to Token Personalizado!</strong> <br/>
        </div>
     
        <div className="alert alert-info">
          <strong>Creando Token...</strong> <br/>
        </div>
      </p>
     } else {
      content= <Guide/>
     }
    return (
      <div>
        <Navbar account={this.state.account} />
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 ml-auto mr-auto" style={{ maxWidth: '600px' }}>
              <div className="content mr-auto ml-auto">
                <a
                  href="https://www.criptoeconomia.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                </a>

                {content}

              </div>
            </main>
 
          </div>
        </div>
      </div>
    );
  }
}

export default App;
