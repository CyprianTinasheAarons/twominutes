import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ReactDOM from 'react-dom'


class Receive extends Component {

      
    
    constructor(props){
        super(props)

        this.state ={
            data: ''
        }

        this.updateState = this.updateState.bind(this)
        this.clearInput = this.clearInput.bind(this)
    }

    updateState(e){
        this.setState({data: e.target.value})
    }



    clearInput(){
        this.setState({data:''})
        ReactDOM.findDOMNode(this.refs.myInput)
    }

    render() {
        return (
            <div className="row">
            <div className="col-md-5 mx-auto" >
                <center><Link to={'/'} className="text-dark"  ><i class="fa fa-remove m-1 p-1" style={{ fontSize: "25px" }} ></i></Link></center>

                <div className="card m-2 p-1 home-card-1 ">
                    <center>RECEIVE</center>

                    <div className="card-body">
                        <h5 className="text-center">
                            <img className="img-fluid " src="img/url.png?h=e424d675311cd723c5bd4ff241874e71" />

                        </h5>
                        <p className="text-center card-text"><strong>Have this code scanned by the sender. or give them this public address:</strong></p>
                        <br />
                   
                      
                           <h5 className="text-center border border-warning p-3 m-1">
                        
                        {this.state.account}

                        </h5>
                           

    


                        <br />
                        <h6 className="text-center"><strong>Requested Amount(optional)</strong></h6>

                    </div>
                    <input className=" text-center p-1 mx-3 border border-warning  border-top-0 border-right-0 border-left-0" type="text" value={this.state.data } onChange={this.updateState} ref="myInput" placeholder="Metatokens 0.00" />

                    <input className=" text-center p-1 mx-3 border border-warning  border-top-0 border-right-0 border-left-0" type="text" value={this.state.data *6.2  + " USD"} onChange={this.updateState} ref="myInput" placeholder="$0.00 USD" />
                    <br />
                    <h5 className="text-center p-1 m-3 ">
                        <a href="/" className="btn btn-block bg-warning  btn-yellow text-dark text-center font-weight-bold">
                            Request
            </a>
                    </h5>

                    <h6 className="text-center m-1 p-1">
  <p className="font-weight-bold card-text ">Account Balance</p>
  <p className=" card-text  paragragh-1">  MTC&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; USD</p>  
</h6>

                </div>


            </div>
            </div>
        )
    }
}

export default Receive