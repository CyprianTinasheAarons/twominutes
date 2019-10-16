import React , {Component} from 'react'

class Settings extends Component{
    render(){
       return(
        <div className="row">
        <div className="col-md-5 mx-auto" >
           
        <div>
          <div className="text-center   p-1" style={{height: "auto"}}>
        <h4 style={{padding: "10px", paddingBottom:"0px"}}  className="font-weight-bold">Cyprian Aarons</h4>
        <h5 style={{padding: "10px"}}>cyprianaarons@gmail.com</h5>
    </div>
    <div className="card m-2 home-card-1">
        <div className="card-body" style={{margin: "10px"}}>
            <h4 className="card-title"><strong>Linked Accounts</strong></h4>
            <p className="card-text">Add a payment method    </p>     <button className="btn btn-bluecolor align-self-end " type="button"
                ><a href="http://" className="text-white ">Add</a></button></div>
    </div>
    <div className="card m-2 home-card-1">
        <div className="card-body" style={{margin: "10px"}}>
            <h4 className="card-title"><strong>Verification</strong></h4>
            <p className="card-text">Identity Document <a href="#" > <i className="fa fa-arrow-right text-dark"></i></a></p>
            <p className="card-text">Notifications <a href="#"  ><i className="fa fa-arrow-right text-dark"></i></a></p>
        </div>

        <hr/>

        <div className="card-body" style={{margin:"10px"}}>
            <h4 className="card-title"><strong>Preferences</strong></h4>
            <p className="card-text">Language         <span className="bg-light p-1">English</span></p>
            <p className="card-text">Alternative currency         <span className="bg-light p-1 ">US Dollar</span></p> 
        </div>

        <hr/>
        <div className="card-body" style={{margin:"10px"}}>
            <h4 className="card-title"><strong>Security</strong></h4>
            <p className="card-text">Phone App Pin        <span>
            
                <label className="switch">
                  <input type="checkbox"/>
                  <span className="slider round"></span>
                </label></span></p>
        </div>
        <hr/>
        <div className="card-body" style={{margin:"10px"}}>
            <h4 className="card-title"><strong>Version</strong></h4>
            <p className="card-text">Tokenized:<span className="bg-light p-1">8340923094</span></p>
        </div>
    </div>
        </div>
        </div>
        </div>
       )
    }
}

export default Settings