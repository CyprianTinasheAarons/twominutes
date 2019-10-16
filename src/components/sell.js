import React , {Component} from 'react'
import {Link} from 'react-router-dom'
import ReactDOM from 'react-dom'

class Sell extends Component {
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
    render(){
        return(
            <div className="row">
            <div className="col-md-5 mx-auto" >
                    <center><Link to={'/'} className="text-dark" ><i class="fa fa-remove m-1 p-1" style={{fontSize:"25px"}} ></i></Link></center>

                    <div class="card p-1 m-2 home-card-1">
                        <center>SELL</center>
  <div className="card-body">

      <h5 className="text-center"><strong>Sell Metatokens:</strong></h5>
      <br/>
       <h5 className="text-center">  <input className="border  border-top-0 border-right-0 border-left-0 border-warning text-center p-1" ref="myInput" value={this.state.data} onChange={this.updateState} type="text" placeholder="0.00 Metatokens"/></h5>
      <br/>
      <h5 className="text-center"><strong>Set Price</strong></h5>
              <h5 className="text-center"><input className="border   border-top-0 border-right-0 border-left-0 border-warning text-center p-1"   type="text" placeholder="Enter Asking Price $US"/></h5>
     <br/>
     <h5 className="text-center">
        <button className="btn  text-center btn-bluecolor text-white m-1" type="button"><strong>Add to Market</strong></button>
      <button className="btn text-center text-white btn-redcolor m-1 " onClick={this.clearInput} type="button"><strong>Cancel</strong></button>
     </h5>
  </div>

  <div className="card-body">

      <h6 className="text-center">
          <p className="font-weight-bold card-text ">Account Balance</p>
          <p className=" card-text  paragragh-1">MTC 0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 0 USD</p>  
  </h6>

  </div>
</div>
    

            </div>
            </div>
        )
    }
}

export default Sell