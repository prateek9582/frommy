import React, { Component } from 'react';
import company from '../assets/logo/Buopso Logo.svg';
import google from '../assets/icon/Google.svg';
import share from '../assets/icon/Share.svg';
import '../assets/styles/register.scss';
import '../assets/styles/font.scss';
import Signup from './signup';
import Forgot from './forgot';
class Register extends Component {
    constructor() {
        super();
    
        // Initial state is defined
        this.state = {
          toggled: 'login'
        };
      }
    
      // when handleClick is called, setState will update the state so that toggle is reversed
      handleClick = (e) => {
        if(e == 'login'){
            this.setState({toggled:'login'})
        }
        else if(e == 'signup'){
            this.setState({toggled:'signup'})
        }
        else if(e == 'forgot'){
            this.setState({toggled:'forgot'})
        }
      }
    render() {
        return (
            <div className="overall">
                <div className="left">
                    <img src={company} alt="company" className="company-logo-register" />
                    <h3>Sign in or create an account</h3>
                </div>
                <div className="right">
                    <div className={`right-side login ${this.state.toggled == 'login'? '' :'hidden'}`}>
                        <div className="upper">
                        <h1 className="lo-head">Log in</h1>
                        <span>New User? </span>
                        <a href="#" onClick={(e) => this.handleClick('signup')}>Create an Account</a>
                        </div>
                        <form className="">
                            <div className="form__group field">
                                <input type="email" className="form__field" placeholder="Enter your email address" name="email" id='name' required />
                                <label for="email" className="form__label">Email address</label>
                            </div>
                            <div className="form__group field">
                                <input type="password" className="form__field" placeholder="Enter your password" name="password" id='name' required />
                                <label for="password" className="form__label">Password</label>
                            </div>
                            <div className="check ending">
                                <div>
                                    <input type="checkbox" name="" id="checkbox1" className="mr-2"/>
                                    <label htmlFor="checkbox1">Reminder password</label>
                                </div>
                                <div>
                                <a href="#" onClick={(e) => this.handleClick('forgot')}>Forgot password</a>
                                </div>
                            </div>
                            <div className="underline">
                            <button type="submit" className="btn btn-primary full lo-btn">Log In</button>
                            </div>
                            <div className="btn text-dark full back-go">
                                <div className="go-img-div">
                                <img src={google} alt="google" className="go-img"/>
                                </div>
                                <div className="go-si-di">
                                <a href="" className = "go-si">Sign in with Google</a>
                                </div>
                            </div>
                            <div className="ending">
                                <div className="reserved">
                                <span>@2020 SS, Inc. All Rights Reserved</span>
                                </div>
                                <div>
                                <a href="">Privacy Policy</a>
                                <img src={share} alt="" srcset="" className="pl-2"/>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className={`right-side signup ${this.state.toggled == 'signup'? '' :'hidden'}`}>
                        <div className="upper">
                        <h1 className="lo-head">Create an account</h1>
                        <span>Already have an account? <a href="#" onClick={(e)=>this.handleClick('login')}>Sign In</a></span>
                        </div>
                        <Signup></Signup>
                    </div>
                    <div className={`right-side signup ${this.state.toggled == 'forgot'? '' :'hidden'}`}>
                    <div className="upper">
                        <h1 className="lo-head">Reset your password</h1>
                        <p className="p-left">Please enter the email address. <br />you'd like your password reset information sent to.<br/></p>
                        <span>Go back to Buopso <a href="#" onClick={(e)=>this.handleClick('login')}>LogIn</a></span>
                        </div>
                        <Forgot></Forgot>

                    </div>

                </div>
            </div>
        );
    };
}
export default Register;