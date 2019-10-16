import React , {Component}  from 'react'
import {Link} from 'react-router-dom'

class Transactions extends Component{
    render(){
        return(
            <div className="row">
                <div className="col-md-5 mx-auto" >              
       <center><Link to={'/Account'} className="text-dark" ><i class="fa fa-remove m-1 p-1" style={{fontSize:"25px"}} ></i></Link></center>
    
           
                    <div className="bg-white p-1 m-1 home-card-1">
                    <center className="p-1 m-1">Transactions</center>
        <h1 className="d-flex justify-content-center">0 TBC</h1>
        <h4 className="d-flex justify-content-cente p-1">&nbsp;$0.00</h4>
   
   
    <h4 className="text-center">History</h4>
    <p className="text-center m-2 p-1"><strong> Buy some Tokens to get started.
    This account is empty.Buy some to get started. </strong></p>
    <h5 className="text-center">    
        <button className="btn btn-yellow  text-center text-dark " type="button" > <strong>Transact</strong></button></h5>

        </div>
            </div>
            </div>

        )
    }
}

export  default Transactions