import React, { Component } from 'react';
import google from '../assets/icon/Google.svg';
import share from '../assets/icon/Share.svg';
import '../assets/styles/register.scss';
import '../assets/styles/font.scss';
class Login extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
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
                                <a href="">Forgot password</a>
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
            </React.Fragment>
         );
    }
}
 
export default Login;