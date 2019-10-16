import React , {Component} from 'react'
import  {Link} from 'react-router-dom'
import ReactDom from  'react-dom'
import {QRCode} from 'qrcode.react'
import Web3 from 'web3'

class Account extends Component{

 
    
    
    render(){
       return(
        <div className="row">
                <div className="col-md-5 mx-auto" >

<div style={{height: "auto"}}>
                    <div className="m-2">
                        <div className="card-body text-center bg-white border rounded shadow m-1">
                        <h5 className="text-center border border-light p-1 m-1">Address</h5>
                            <img className="justify-content-center" src="img/url.png?h=e424d675311cd723c5bd4ff241874e71" style={{margin:"10px",height:"100px", width: "100px"}}/>
                        
                      
                           <h5 className="text-center border border-warning p-1 m-1">
                        
                        
                           </h5>
                            <h6 className="text-center text-dark card-subtitle m-1 p-1"><strong>Welcome to your account</strong></h6>
                            <p className="text-center card-text">Make your first investment today</p><button className="btn btn-greencolor m-1" type="button" ><Link to={'/Market'} className="text-white"><strong>Get started</strong></Link></button></div>
                    </div>
                </div>

  
      
    <div className="card home-card-1 p-1 m-1">
        <div className="card-body">
            <div className="text-center" style={{height: "auto"}}><img className="rounded-circle img-fluid border shadow" src="img/eyetech.svg" style={{margin:"10px",width:"100px",height:"100px"}}/>
                <h5 className="text-center"><button className="btn  btn-block btn-bluecolor text-center" type="button" >< Link to={'/Profile'} className="text-white" ><strong>Edit Profile</strong></Link></button></h5>
 
                <h6
                    className="text-center"style={{margin:"10px"}}><strong>Cyprian Aarons</strong></h6>
                    <h6 className="text-center" style={{margin:"10px"}}><strong>cyprianaarons@gmail.com</strong></h6>
                    <h6 className="text-center" style={{margin:"10px"}}><strong>0777150345</strong></h6>
            </div>
        </div>
        <hr/>
    
  
      
            <div className="card-body text-center" style={{margin:"10px"}}><Link to={'/Transactions'} className="card-link text-uppercase text-muted border-dark">Transactions&nbsp;<i className="fa fa-dollar"></i>&nbsp;</Link><Link to={'/AddressBook'} className="card-link text-uppercase text-right text-muted border rounded border-white" >Addresses<strong>&nbsp;</strong><i className="fa fa-address-book-o"></i>&nbsp;</Link></div>
    </div>

        </div>
     </div>
       )
    }
}

export default Account
