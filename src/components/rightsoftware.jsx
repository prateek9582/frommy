import React, { Component } from 'react';
import cr from '../assets/icon/CR.svg';
import an from '../assets/icon/AN.svg';
import hr from '../assets/icon/HR.svg';
import lm from '../assets/icon/LM.svg';
import mobile from '../assets/icon/Mobile.svg';
import desktop from '../assets/icon/Desktop.svg';
import web from '../assets/icon/Web.svg';
import { Link } from 'react-router-dom';
import '../assets/styles/register.scss';
class Right extends Component{
    render(){
        return(
            <React.Fragment>
                <nav className="empty-nav"></nav>
                <div>
                    <div>
                        <h4 className="right-head"><b>Sales</b></h4>
                        <div className="overall-card-parent">
                            <div className="card-parent card-right">
                                <div className="card-icon-container">
                                    <img src={cr} alt="" srcset="" className="card-icon"/>
                                    <h4><b>CRM</b></h4>
                                </div>
                                <div className="card-para">
                                    <small>A multichannel approach to modern sales processes.</small>
                                </div>
                                <div className="card-icon-container identify">
                                    <div className="card-icon-down">
                                        <img src={desktop} alt="" srcset="" className="nav-icon card-icon1"/>
                                        <img src={mobile} alt="" srcset="" className="nav-icon card-icon2"/>
                                        <img src={web} alt="" srcset="" className="nav-icon card-icon1"/>
                                    </div>
                                    <Link to='/getstarted'>
                                        <button type="submit" className="btn border border-dark text-primary">Get started</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="card-parent card-right">
                                <div className="card-icon-container">
                                    <img src={cr} alt="" srcset="" className="card-icon"/>
                                    <h4><b>CRM</b></h4>
                                </div>
                                <div className="card-para">
                                    <small>A multichannel approach to modern sales processes.</small>
                                </div>
                                <div className="card-icon-container identify">
                                    <div className="card-icon-down">
                                        <img src={desktop} alt="" srcset="" className="nav-icon card-icon1"/>
                                        <img src={mobile} alt="" srcset="" className="nav-icon card-icon2"/>
                                        <img src={web} alt="" srcset="" className="nav-icon card-icon1"/>
                                    </div>
                                    <Link to='/getstarted'>
                                        <button type="submit" className="btn border border-dark text-primary buo-si">Get started</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="card-parent">
                                <div className="card-icon-container">
                                    <img src={cr} alt="" srcset="" className="card-icon"/>
                                    <h4><b>CRM</b></h4>
                                </div>
                                <div className="card-para">
                                    <small>A multichannel approach to modern sales processes.</small>
                                </div>
                                <div className="card-icon-container identify">
                                    <div className="card-icon-down">
                                        <img src={desktop} alt="" srcset="" className="nav-icon card-icon1"/>
                                        <img src={mobile} alt="" srcset="" className="nav-icon card-icon2"/>
                                        <img src={web} alt="" srcset="" className="nav-icon card-icon1"/>
                                    </div>
                                    <Link to='/getstarted'>
                                        <button type="submit" className="btn border border-dark text-primary buo-si">Get started</button>
                                    </Link>
                                </div>
                            </div>
                    </div>
                </div>
                </div>
            </React.Fragment>
        );
    }
}
export default Right;