import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import buopso from '../assets/logo/Buopso white Logo.svg';
import '../assets/styles/buo-btn.scss';

class Mainnav extends Component{
    render(){
        return(
            <nav className="buo-mainnav">
                    <div className="container-nav">
                        <ul className="buo-nav-heading">
                            <Link to="/" className="a-tag">
                            <img src={buopso} alt="" className="company-logo"/></Link>
                        </ul>
                        <div className="buo-nav-center">
                            <ul className="buo-nav buo-navbar-nav display-flex">
                                <li className="buo-navbar-nav-li">
                                    <select name="" id="">
                                        <option value="apps">Apps</option>
                                    </select>
                                </li>
                                <li className="buo-navbar-nav-li">
                                    Pricing
                                </li>
                            </ul>
                        </div>

                        <div className="buo-nav buo-navbar-nav buo-navbar-right display-flex">
                            
                                <Link to='/register' className="buo-navbar-nav-li">
                                    <button type="submit" className="buo-btn buo-text-primary buo-border buo-border-primary buo-si">Sign In</button>
                                </Link>
                                <Link to = '/software' className="buo-navbar-nav-li">
                                    <button type="submit" className="buo-btn buo-btn-primary buo-si">Try it free</button>
                                </Link>
                        
                        </div>
                    </div>
                </nav>
        )
    }
}
export default Mainnav;