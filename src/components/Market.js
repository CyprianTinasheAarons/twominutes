import React , {Component} from 'react'
import { Link } from 'react-router-dom'
import ReactDOM from 'react-dom'
import Web3 from 'web3'
import { AUTHERIUM_ABI, AUTHERIUM_ADDRESS } from '../config'

class Market extends Component{

   
    constructor(props) {
        super(props)
        this.state = {
       
        }

    }

    render(){
       return(
        <div className="row">
        <div className="col-md-5 mx-auto" >
         <div className="card p-1 m-2 home-card-1">
      <div className="card-body">

            <h5 className="text-center"><strong>Available on Autherium</strong></h5>

            <h6 className="text-center">
                    <p className="font-weight-bold card-text "><img src="img/metatoken.svg"  style={{height:"25px"}} />MTC Total Supply</p>
                    <p className=" card-text text-primary">{this.state.totalMeta}</p>
                    <p className=" card-text font-weight-bold"> 0.1Grams of Gold in Vaults</p>  
                    <p className=" card-text  text-primary"> 1000</p> 
            </h6>

            <h5 className="text-center"> <input className="bg-white text-center text-muted border p-1"  type="search" autocomplete="on" autofocus="" placeholder="Search For Sellers"/ ></h5>
           <hr/>
    <div className="bg-white border-white" style={{height:"auto"}}>
        <p>Fintech $15.000 <strong></strong><i className="fas fa-caret-down text-danger"></i><strong className="text-danger">-2.80</strong><a className="text-white bg-primary border rounded"
                href="#" style={{padding:"5px"}}>BUY</a></p>
                <hr/>
                <p>BullionBars $16.000 <strong></strong><i className="fas fa-caret-up text-success"></i><strong className="text-success">+1.80</strong><a className="text-white bg-primary border rounded"
                    href="#" style={{padding: "5px"}}>BUY</a></p>


                  
    
    </div>
      </div>
  </div>
        </div>
       </div>
       )
    }
}

export default Market