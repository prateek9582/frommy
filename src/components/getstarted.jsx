import React, { Component } from 'react';
import '../assets/styles/register.scss';
import company from '../assets/logo/Buopso Logo.svg';
import { Link } from 'react-router-dom';

class Getstarted extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="overall">
                <div className="left">
                    <img src={company} alt="" srcset="" className="company-logo-register"/>
                    <h3>Get your free-trial here</h3>
                </div>
                <div className="right">
                    <div className={`right-side login`}>
                        
                        <form className="">
                            <div className="form__group field">
                                <input type="input" className="form__field" placeholder="Enter your full name" name="name" id='name' required />
                                <label for="name" className="form__label">Full Name</label>
                            </div>
                            <div className="form__group field">
                                <input type="input" className="form__field" placeholder="Enter your email address" name="email" id='name' required />
                                <label for="email" className="form__label">Email address</label>
                            </div>
                            <div className="form__group field">
                                <input type="input" className="form__field" placeholder="Enter your company name " name="company" id='name' required />
                                <label for="company" className="form__label">Company name</label>
                            </div>
                            <div className="form__group field">
                                <input type="phone" className="form__field" placeholder="Enter your mobile number " name="mobile" id='name' required />
                                <label for="mobile" className="form__label">Mobile Number</label>
                            </div>
                            <div className="form__group field">
                                <input type="input" className="form__field" placeholder="Enter country here " name="country" id='name' required />
                                <label for="country" className="form__label">Country</label>
                            </div>
                            <div className="form__group field">
                                <input type="input" className="form__field" placeholder="Enter personal interest here " name="interest" id='name' required />
                                <label for="interest" className="form__label">Personal Interests</label>
                            </div>
                            <div className="getst-cb form__group">
                                    <input type="checkbox" name="" id="checkbox1" className="mr-2"/>
                                    <label htmlFor="checkbox1">I want to help improve the Buopso user experience by recording the start of my trial session (how?)</label>
                            </div>
                            <div className="getst-btns">
                                <Link to='/software'>
                                <button type="submit" className="btn text-dark buo-si change-btn">Change app section</button></Link>
                                <Link to="/dashboard">
                                <button type="submit" className="btn btn-primary buo-si">Start now</button>
                                </Link>
                            </div>
                        </form>
                    </div>
                    </div>
                    </div>
            </React.Fragment>
        );
    }
}
export default Getstarted;