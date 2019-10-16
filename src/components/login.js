import React , {Component} from 'react'


class Login extends Component {
    render(){
        return(
            <div>
                  <div className="bg-warning login-clean" style={{height:"auto"}}>
        <form className="card home-card-1" method="post">
            <h2 className="sr-only">Login Form</h2>
            <div className="illustration"><img className="rounded-circle" src="img/autherium.svg" style={{height:"100px"}}/></div>
            <div className="form-group"><input className="form-control " type="email" name="email" placeholder="Email"/></div>
            <div className="form-group"><input className="form-control" type="password" name="password" placeholder="Password"/></div>
            <div className="form-group"><button className="btn  btn-block text-dark  btn-yellow" type="submit"><strong>Log In</strong></button></div><a className="forgot" href="#">Forgot your email or password?</a></form>
    </div>
  

            </div>
        )
    }
}

export default Login