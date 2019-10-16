import React , {Component} from 'react'
import {Link} from 'react-router-dom'

class AddressBook extends Component{
    render(){
        return(
            <div className="row">
            <div className="col-md-5 mx-auto" >
                    
       <center><Link to={'/Account'} className="text-dark" ><i class="fa fa-remove m-1 p-1" style={{fontSize:"25px"}} ></i></Link></center>
    
                       <div  className="p-1 m-1">
        <div>
            <ul className="nav nav-tabs bg-yellow">
                <li className="nav-item"><a className="nav-link  active text-dark" role="tab" data-toggle="tab" href="#tab-1">Sending Addresses</a></li>
                <li className="nav-item"><a className="nav-link text-dark" role="tab" data-toggle="tab" href="#tab-2">Your Addresses</a></li>
                
            </ul>
            <div className="tab-content">
                <div className="tab-pane active card home-card-1 m-2 p-1" role="tabpanel" id="tab-1">
                    <div className="card-body">
                            <p className="text-center"><strong>Empty 1</strong></p>
                            
                        
                    </div>
                </div>
                <div className="tab-pane card home-card-1 m-2 p-1" role="tabpanel" id="tab-2">
                    <div className="card-body">

                        <p className="text-center"><strong>Empty 2</strong></p>

                    </div>
                </div>
              
            </div>
        </div>
    </div>
                </div>
                </div>
        )
    }
}

export default AddressBook