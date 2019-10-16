import React , {Component} from 'react'
import {Link} from 'react-router-dom'
import ReactDOM from 'react-dom'



class Send extends Component {


    constructor(props){
        super(props)

        this.state ={
            data: '',
       
        }

      
        this.updateState = this.updateState.bind(this)
        this.clearInput = this.clearInput.bind(this)
    }

    handleChange(e){
        this.setState({value: e.target.value})
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

                <div>
           
                <br/>

<div className="card p-1 m-2 home-card-1">
<center>SEND</center>
    <div className="card-body">
            <h5 className="text-center font-weight-bold">Pay to</h5>
          
   <form onSubmit={this.handleSubmit}>
   <h5 className="text-center">
                <input type='text' value={this.state.value} onChange={this.handleChange} id="qrcode" className="qrcode-text text-center p-1 m-1 border  border-top-0 border-right-0 border-left-0 border-warning " placeholder="type address or scan code"/>
                <label  className="text-dark  qrcode-text-btn" >
   <input type='file' accept="image/*" capture='environment' onchange="openQRCamera(this);" onclick="return showQRIntro()"/><i><img src="img/icons8-qr-code-50.png" alt="" className="img-fluid" style={{height:"25px"}}/></i></label>

</h5>
    <br/>
 <h5 className="text-center font-weight-bold">Amount to pay</h5>
<h5 className="text-center">  <input className="text-center p-1 m-1 border border-warning  border-top-0 border-right-0 border-left-0" type="text" value={this.state.data} onChange={this.updateState} ref="myInput"   placeholder="Metatoken 0.00"/></h5>
<h5 className="text-center"> <input className="text-center p-1 m-1 border border-warning  border-top-0 border-right-0 border-left-0" type="text" value={this.state.data * 6.2 + " USD"} onChange={this.updateState} ref="myInput"  placeholder="$0.00"/></h5>
<br/>
<h5 className="text-center">
  <input className="btn btn-bluecolor text-white  font-weight-bold m-1" type="submit" value="Send"/>
    <button className="btn btn-redcolor text-white font-weight-bold m-1" onClick={this.clearInput} type="button">Cancel</button>
</h5>
   </form>

<h6 className="text-center m-1 p-1">
  <p className="font-weight-bold card-text ">Account Balance</p>
  <p className=" card-text  paragragh-1"  > {this.state.balance / 1000000000000000000} MTC&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {(this.state.balance / 1000000000000000000) * 6.2} USD</p>  
</h6>

    </div>
</div>

                          

<script src="https://rawgit.com/sitepoint-editors/jsqrcode/master/src/qr_packed.js">
</script>

                </div>

            </div>
            </div>
        )
    }
}

export default Send