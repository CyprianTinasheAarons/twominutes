import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ReactDOM from 'react-dom'


class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            account: ''

        }

    }

    render() {
        return (
            <div className="row">
                <div className="col-md-5 mx-auto" >
                <div className="  card-body ">
                    <center><img src="img/autherium.svg" alt="" style={{ height: "150px" }} /></center>
                </div>


                <div className="card-body bg-white border rounded shadow home-card-1 m-1 " >
                    <center>
                      

                        <p className="font-weight-bold card-text ">Cyprian </p>
                        <p className=" card-text  paragragh-1 m-3"> <img src="img/metatoken.svg" style={{ height: "25px" }} />MTC {this.state.balance / 1000000000000000000}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {(this.state.balance / 1000000000000000000) * 6.2}  USD</p>

                        <Link to={'/Market'} className="card-link text-info " > <strong>BUY</strong></Link>
                        <Link to={'/Sell'} className="card-link text-dark " ><strong>SALE</strong></Link>
                        <Link to={'/Send'} className="card-link text-success "><strong>SEND</strong></Link>
                        <Link to={'/Receive'} className="card-link text-danger " ><strong>RECEIVE</strong></Link>
                        <Link to={'/Recast'}
                            className="card-link text-warning "><strong>RECAST</strong></Link>
                    </center>

                    <hr />


                    <div className="card-body"><img className="rounded img-fluid d-flex justify-content-center" src="img/20190710_09335-1.jpg?h=09b27f9d3abc4462dcbdf00ec59c7b8b" style={{ width: "300px;height: 250px" }} />
                        <h5 className="text-center"><strong>Get your Bullions today</strong></h5>
                        <p className="text-center card-text">It's easy,you can buy your bullions today at&nbsp; BullionBars International and voila!you're a&nbsp; bullionaire.</p>
                        <h5 className="text-center text-warning"><strong>&nbsp;</strong><a href="https://www.bullionbarsinternational.co.zw"><strong>Get Started</strong></a></h5>
                    </div>

                    <hr />

                    <div className="card-body m-1"  >
                        <h5 className="text-capitalize text-dark card-title text-center"><strong>Services</strong></h5>
                        <p className="card-text"></p>

                        <div className="card-body border border-white text-center">
                            <button className="card-title btn btn-block  btn-bluecolor p-1"><a href="http://www.bbiafrica.net" className="text-white"><strong>Loans</strong></a></button>
                            <button className=" card-title btn btn-block btn-greencolor p-1" ><a href="http://www.bullionbarsinternational.co.zw" className="text-white"><strong>Bullionbars</strong></a></button>
                        </div>
                        <a class="card-link" href="#"></a></div>
                </div>

     </div>
            </div>
        )
    }
}

export default Home