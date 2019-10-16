import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Profile extends Component {
    render(){
        return(
            <div className="row">
            <div className="col-md-5 mx-auto" >

<center><Link to={'/Account'} className="text-dark" ><i class="fa fa-remove m-1 p-1" style={{fontSize:"25px"}} ></i></Link></center>
    
    <div className=" m-2 bg-white home-card-1  card contact-clean">
        <center className="p-1 m-1">Profile</center> 
        
        <div className="card-body">
                <div className="text-center" style={{height:"auto"}}><img className="rounded-circle img-fluid border shadow" src="img/eyetech.svg" style={{margin:"10px",height:"100px",width: "100px"}}/>
                    <h6 className="text-center m-1"><strong>Cyprian Aarons Mitton</strong></h6>
                    <h6 className="text-center m-1"><strong>cyprianaarons@gmail.com</strong></h6>
                    <h6 className="text-center m-1"><strong>0777150345</strong></h6>
                </div>
            <form method="post" >
              
                <div className="form-group">

                    <input className="form-control" type="text" name="name" placeholder="Cyprian Aarons Milton" style={{margin:"15px",marginRight:"0px",marginLeft:"0px"}}/>
              
                    <input className="form-control " type="email" name="email" placeholder="cyprianaarons@gmail.com" style={{margin:"15px",marginRight:"0px",marginLeft:"0px"}}/>
                    <input className="form-control " type="text" name="number" placeholder="0777150345" required="" style={{margin:"15px",marginRight:"0px",marginLeft:"0px"}}/>
                    <input
                        className="form-control " type="text" name="Location" required=""  style={{margin:"15px",marginRight:"0px",marginLeft:"0px"}} placeholder="Harare Zimbabwe"/>
                        <input className="form-control " type="text" name="birth" placeholder="10 July 1995" required=""  style={{margin:"15px",marginRight:"0px",marginLeft:"0px"}}/>
                    </div>
                    <div className="form-group"><button className="btn  btn-block text-dark  btn-yellow" type="submit"><strong>Save</strong></button></div>
            </form>


        </div>
           
    </div>


            </div>
            </div>
           
        )
    }
}

export default Profile