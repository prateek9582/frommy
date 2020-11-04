import React, { Component } from 'react';
import company from '../assets/logo/Buopso Logo.svg';
import '../assets/styles/register.scss';
import '../assets/styles/font.scss';
import Login from './login';
import Signup from './signup';
class Register extends Component {
    constructor() {
        super();
    
        // Initial state is defined
        this.state = {
          toggled: false
        };
      }
    
      // when handleClick is called, setState will update the state so that toggle is reversed
      handleClick = () => {
        this.setState(previousState => {
          return {
            toggled: !previousState.toggled
          }
        })
      }
    render() {
        return (
            <div className="overall">
                <div className="left">
                    <img src={company} alt="company" className="company-logo-register" />
                    <h3>Sign in or create an account</h3>
                </div>
                <div className="right">
                    <div className={`right-side login ${this.state.toggled? "hidden" :''}`}>
                        <div className="upper">
                        <h1 className="lo-head">Log in</h1>
                        <span>New User? </span>
                        <a href="#" onClick={this.handleClick}>Create an Account</a>
                        </div>
                        <Login></Login>
                    </div>

                    <div className={`right-side signup ${this.state.toggled?'' :'hidden'}`}>
                        <div className="upper">
                        <h1 className="lo-head">Create an account</h1>
                        <span>Already have an account? <a href="#" onClick={this.handleClick}>Sign In</a></span>
                        </div>
                        <Signup></Signup>
                    </div>

                </div>
            </div>
        );
    };
}
export default Register;