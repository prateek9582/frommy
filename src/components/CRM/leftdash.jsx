import React, { Component } from 'react';
import plus from '../../assets/icon/Plus.svg';
import more from '../../assets/icon/More.svg';
import dash from '../../assets/icon/Dashboard.svg';
import contact from '../../assets/icon/Contacts Icon.svg';


class Leftdash extends Component{
    render(){
        return( 
            <React.Fragment>
                <div>
                    <div className="display-flex space-between dash-left-nav">
                        <div className = "buo-btn buo-border dash-left-new">
                            <div className="display-flex">
                                <img src={plus} alt="" srcset="" className=""/>
                                <h6 className="dash-left-name">Add New</h6>
                            </div>
                        </div>
                        <img src={more} alt="" srcset=""/>
                    </div>
                    <ul className="left-soft-ul">
                        <li>
                            <div className="dash-left-li">
                                <img src={dash} alt="" srcset="" className="buo-pr-2"/>
                                <span className="dash-left-name">Dashboard</span>
                            </div>
                        </li>
                        <li>
                            <div className="dash-left-li">
                                <img src={contact} alt="" srcset="" className="buo-pr-2"/>
                                <span className="dash-left-name">Contact</span>
                            </div>
                        </li>
                        <li>
                            <div className="dash-left-li">
                                <img src={contact} alt="" srcset="" className="buo-pr-2"/>
                                <span className="dash-left-name">Tasks</span>
                            </div>
                        </li>
                        <li>
                            <div className="dash-left-li">
                                <img src={dash} alt="" srcset="" className="buo-pr-2"/>
                                <span className="dash-left-name">Pipeline</span>
                            </div>
                        </li>
                        <li>
                            <div className="dash-left-li">
                                <img src={dash} alt="" srcset="" className="buo-pr-2"/>
                                <span className="dash-left-name">Deals</span>
                            </div>
                        </li>
                        <li>
                            <div className="dash-left-li">
                                <img src={dash} alt="" srcset="" className="buo-pr-2"/>
                                <span className="dash-left-name">Staff</span>
                            </div>
                        </li>
                        <li>
                            <div className="display-flex dash-left-bottom">
                                <img src={plus} alt="" srcset="" className="buo-pr-2"/>
                                <h6 className="">Add Modules</h6>
                            </div>
                        </li>
                    </ul>
                    
                </div>
                    

            </React.Fragment>
        );
    }
}

export default Leftdash;