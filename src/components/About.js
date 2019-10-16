import React , {Component} from 'react'

class About extends Component{
    render(){
        return(
          

<div className="row">
                <div className="col-md-5 mx-auto" >
           <div className="card text-center m-2 home-card-1">
        <div className="card-body ">
             <img className="justify-content-center" src="img/autherium.svg" alt="image" style={{margin:"10px" , height:"100px" , width: "100px"}}/>

        </div>

        
            <div className="card-body ">
                    <p className="text-center text-dark">
                       Autherium is  a revolutionary Gold saving system, based on 1:1 with allocated physical currency gold in our inventory.We bring back the true meaning of wealth preservation in this global economy.
                    </p>

                    <center>      <button className=" card-title btn btn-block btn-greencolor p-1" ><a href="http://www.bullionbarsinternational.co.zw" className="text-white"><strong>Start Trading</strong></a></button>
                    </center>
            </div>
            <hr/>
            <div className="card-body ">
                <center><img src="img/metatokenLg.svg" alt=""/></center>
                <h5>CREATING THE FUTURE</h5>
                <p className="text-center text-dark">
                    With Autherium tokenized gold, you can now buy,sell or spend Gold asset on the Go!.
                    All transactions are performed on the ethereum platform and based on secure smart contracts.
                  </p>
               
                  <blockquote className="blockquote">
                      <p> &quot; The only way to be certain of the future is to create it &quot; </p>
                      <footer className="blockquote-footer"><cite title="Source Title">Otis Shonai Ceo of BBI</cite></footer>
                    </blockquote>
                    <center>      <button className=" card-title btn btn-block btn-bluecolor p-1" ><a href="http://www.bullionbarsinternational.co.zw" className="text-white"><strong>View Market</strong></a></button>
                    </center>
               

        </div>
        <hr/>
        <div className="card-body ">
                <center><img src="img/logo.png" alt="" style={{width:"100px"}}/></center>
                <p className="text-center text-dark">
                    A simple platform that allows individuals and corporates to buy , store and redeem physical gold bullions.(999.9 Carat Gold)
             </p>

                <center>      <button className=" card-title btn btn-block btn-yellow p-1"><a href="http://www.bullionbarsinternational.co.zw" className="text-dark"><strong>Open Account</strong></a></button>
                </center>
        </div>
    
         <hr/>
        <div className="card-body">
            <ul className="list-unstyled text-center">
                <li>     <a className="text-dark p-1 m-1 " href="#">&nbsp;<i className="fa fa-envelope-o"></i>&nbsp;Send&nbsp; Feedback&nbsp;&nbsp;</a></li>
               <br/> <li>
                    <a className="text-dark p-1 m-1 " href="#">&nbsp;<i className="fa fa-lock"></i>&nbsp;Privacy Policy&nbsp; &nbsp;</a></li> <br/>
                <li>
        
                    <a className="text-dark p-1 m-1 " href="#"><i className="fa fa-list-alt"></i> &nbsp;Terms of Use</a></li>
            </ul>
        </div>
    </div>
    
        </div>
   </div>
        )
     
    }
}

export default About  