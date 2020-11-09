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
                            <button type="submit" className="btn btn-primary full lo-btn mt-5">Reset Password</button>
                        </form>
            </React.Fragment>
         );
    }
}
 
export default Login;