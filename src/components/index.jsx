import React, { Component } from 'react';
import buopso from '../assets/logo/Buopso white Logo.svg';
import pc from '../assets/images/Pasted Image.png';
import '../assets/styles/register.scss'
import '../assets/styles/index.scss'

class Index extends Component{
    state ={}
    render(){
        return(
            <header>
                <nav className="">
                    <div className="buo-navbar">
                    <div className="buo-nav-child1">
                        <img src={buopso} alt="" className="company-logo-register"/>
                    </div>
                    <div className="buo-nav-child2">
                        <ul className="buo-nav-ul">
                            <li className="buo-nav-li">
                                Apps
                                {/* <select name="Apps" id="" className="buo-select">Apps</select> */}
                            </li>
                            <li className="buo-nav-li">
                                Pricing
                            </li>
                        </ul>
                    </div>
                    <div className="buo-nav-child3 buo-btn">
                        <button type="submit" className="btn text-primary border border-primary buo-si">Sign In</button>
                        <button type="submit" className="btn btn-primary buo-si">Try it free</button>
                    </div>
                    </div>
                </nav>
                <div>
                    <div className="blue">
                        <div className="buo-head-p">
                            <h4 className="buo-head"><b>There's a better way to grow.</b></h4>
                            <p>Marketing, sales, and service software that helps your business grow without compromise. Because “good for the business” should also mean “good for the customer.”</p>
                        </div>
                  
                    <div className="buo-div2">
                        <div className="buo-div2-inner">
                            <div className="buo-div2-inner-ep">
                                <h4>There's a better way to grow</h4>
                                <button type="submit">Get Buopso free</button>
                                <p>Get started with free tools, and upgrade as you grow.</p>
                            </div>
                        </div>
                    </div>
                    <div className="buo-pc">
                                <img src={pc} alt="" srcset=""/>

                            </div>
                    </div>
                </div>
            </header>
        );
    }
}
export default Index;