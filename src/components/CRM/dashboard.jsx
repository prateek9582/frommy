import React, { Component } from 'react';
import Dashnav from '../CRM/dashnav';
// import Leftdash from '../CRM/leftdash';
import Rightdash from '../CRM/rightdash';
import plus from '../../assets/icon/Plus.svg';
import more from '../../assets/icon/More.svg';
import dash from '../../assets/icon/Dashboard.svg';
import contact from '../../assets/icon/Contacts Icon.svg';
import '../../assets/styles/CRM/crm-dashboard.scss';
class Dashboard extends Component{

    closeNav=()=>{
        document.querySelector(".dash-left-container").classList.add('left-width');
        document.querySelector(".dash-right-container").classList.add('right-width');
        document.querySelector(".right-nav-icon").classList.remove("hidden");
    }

    render(){
        return(
            <React.Fragment>
                <div></div>
                <Dashnav></Dashnav>
                <div className="display-flex dash-container">
                    <div className="dash-left-container">

                    <div className="crm-left-nav">
                        <div className="crm-left-nav1">
                            <button type="submit" className="buo-btn buo-border buo-border-grey"><img src={plus} alt="" srcset="" className=""/>Add New</button>
                        </div>
                        <div className="crm-left-nav2">
                            <img src={more} alt="" srcset="" classname="" onClick={this.closeNav}/>
                        </div>
                    </div>
                    <div className="crm-left-ul">
                        <ul>
                            <li>
                                
                                    <img src={dash} alt="" srcset=""/>
                                    <span>Dashboard</span>
                                
                            </li>
                            <li>
                                
                                    <img src={contact} alt="" srcset=""/>
                                    <span>Contact</span>
                                
                            </li>
                            <li>
                                
                                    <img src={contact} alt="" srcset=""/>
                                    <span>Tasks</span>
                                
                            </li>
                            <li>
                                
                                    <img src={dash} alt="" srcset=""/>
                                    <span>Pipeline</span>
                                
                            </li>
                            <li>
                                    <img src={dash} alt="" srcset=""/>
                                    <span>Deals</span>
                            </li>
                            <li>
                                    <img src={dash} alt="" srcset=""/>
                                    <span>Staff</span>
                            
                            </li>
                        </ul>
                    </div>
                    <div className="display-flex dash-left-bottom">
                                <img src={plus} alt="" srcset="" className="buo-pr-2"/>
                                <h6 className="">Add Modules</h6>
                    </div>
                    
                </div>
                    <div className="dash-right-container">
                        <Rightdash></Rightdash>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Dashboard;