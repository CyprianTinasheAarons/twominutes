import React , { Component} from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'
import Web3 from 'web3'
import './App.css'
import {AUTHERIUM_ABI,AUTHERIUM_ADDRESS} from './config'
import Home from './components/Home'
import Account from './components/Account'
import Market from './components/Market'
import Exchange from './components/Exchange'
import Settings from './components/Settings'
import About from './components/About'
import Profile from './components/profile'
import Transactions from './components/transactions'
import AddressBook from './components/address-book'
import Recast from './components/recast'
import Receive from './components/receive'
import Sell from './components/sell'
import Send from './components/send'
import Login from './components/login'



class App extends Component {



  render() {
    return(
      <div>
         <nav className="navbar navbar-light navbar-expand-md ">
                <div className="container-fluid">
                    <a className="navbar-brand text-center" ><strong  style={{display:"hidden"}}> Autherium</strong></a><button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
                    <div
                        className="collapse navbar-collapse" id="navcol-1">
                        <ul className="nav navbar-nav">
                                <li className="nav-item" role="presentation"><Link to={'/'} className="nav-link active" >Home</Link></li>
                            <li className="nav-item" role="presentation"><Link to={'/Account'} className="nav-link" >Account</Link></li>
                            <li className="nav-item" role="presentation"><Link to={'/Market'} className="nav-link">Market</Link></li>
                            <li className="nav-item" role="presentation"><Link to={'/Exchange'} className="nav-link ">Exchange</Link></li>
                            <li className="nav-item" role="presentation"><Link to={'/Settings'}className="nav-link" >Settings</Link></li>
                            <li className="nav-item" role="presentation"><Link to={'/About'} className="nav-link">About</Link></li>
                            <li className="nav-item" role="presentation"><Link to={'/Login'} className="nav-link">Login</Link></li>
                        </ul>
                </div>
        </div>
    
        </nav>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/Account' component={Account} />  
          <Route exact path='/Market' component={Market} />  
          <Route exact path='/Exchange' component={Exchange} /> 
          <Route exact path='/Settings' component={Settings} /> 
          <Route exact path='/About' component={About} />
          <Route exact path='/Login' component={Login} />
          <Route exact path='/Market' component={Market} />
          <Route exact path='/Profile' component={Profile} />
          <Route exact path='/Transactions' component={Transactions} />
          <Route exact path='/AddressBook' component={AddressBook} />
          <Route exact path='/Sell' component={Sell} />
          <Route exact path='/Receive' component={Receive} />
          <Route exact path='/Recast' component={Recast} />
          <Route exact path='/Send' component={Send}/>
        </Switch>

      </div>

    )
  }


}


export default App;
