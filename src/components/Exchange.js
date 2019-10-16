import React , {Component} from 'react'
import {Link} from 'react-router-dom'
import Chart from 'react-apexcharts'

class Exchange extends Component{
    constructor(props){
        super(props)

        this.state = {
            options: {
                chart: {
                    id: "basic-bar"
                },
                xaxis:{
                    categories: [91, 92,93,94,95,96,97,98,99]
                }
            },
                series:[
                 {
                    name:"series-1",
                    data: [30,40,45,50,48,60,70,91]
                 }


                ]
            }

        }
    
    render(){
       return(
        <div className="row">
                <div className="col-md-5 mx-auto" >
          <div className="bg-white p-1 m-1 home-card-1">
          <div className="card ">
        <div className="card-body">
            <h4 className="text-center">Metatoken(MTC)</h4>
            <h4 className="card-title text-center">$15.3433242</h4>
            <p className="text-danger card-subtitle mb-2 text-center">-13.2444%($-1,64533)past Month</p>
      
               <center>
               <div className="mixed-chart ">
                    <Chart
                    options = {this.state.options}
                    series ={this.state.series}
                    type="line"
                    width="300"
                    />
                </div>
               </center>

           

            <h6 className="text-center"><a className="card-link" href="#">HOUR</a>
                <a className="card-link" href="#">DAY</a>
                <a className="card-link" href="#">WEEK</a>
                <a className="card-link" href="#">MONTH</a>
                <a className="card-link" href="#">YEAR</a>
                <a className="card-link" href="#">ALL</a></h6>

                 <h5 className="text-center"> 
                 <Link to={'/Market'}><button className="btn text-dark btn-yellow btn-block" type="button" > <strong>
                  Trade
                     </strong></button></Link>
                 </h5>
            </div>
    </div>
 <div
        className="bg-light  p-2">
        <h5 className="d-flex justify-content-center">MTC Wallet&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;0 MTC</h5>
        <h5 className="d-flex justify-content-center p-1" >&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;$0.00</h5>
        </div>
        <h4 className="p-1 m-1"><strong>Market Stats</strong></h4>
        <ul className="list-group">
            <li className="list-group-item"><span><strong>Market Cap</strong></span><span><strong>&nbsp; &nbsp; &nbsp; &nbsp; $1200</strong></span></li>
            <li className="list-group-item"><span><strong>Volume(24H)</strong></span><span><strong>&nbsp; &nbsp; &nbsp; &nbsp;$1220</strong></span></li>
            <li className="list-group-item"><span><strong>Circulating Supply</strong></span><span><strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;1734</strong></span></li>
        </ul>
        <h4 className="p-1 m-1"><strong>About MetaTokens</strong></h4>
        <div className="card">
            <div className="card-body">
                <p className="card-text">The country's first&nbsp; tokenized gold bullions assets . Bullions can be used to trade and transact with other people.</p><a className="card-link text-dark" href="#"><i className="fa fa-globe"></i>&nbsp;BullionBars Website&nbsp;</a></div>
        </div>
          </div>
        </div>
        </div>
       )
    }
}

export default Exchange