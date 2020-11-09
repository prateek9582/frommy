import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import buopso from '../../assets/logo/Buopso Logo.svg';
import '../../assets/styles/CRM/buo-nav.scss';
import notification from '../../assets/icon/Notification Icon.svg';
import setting from '../../assets/icon/Settings.svg';
import profile from '../../assets/icon/Profile Icon.svg';

class Dashnav extends Component{
    constructor(props){
        super(props);
        this.state={
            name : "Bhushan",
            visible :0
        }
    }

    handleClick = (e) => {
        if(e== 'notify'){
            if(this.state.visible == 1){
                this.setState({
                    visible:0
                })
            }
            else{
                this.setState({
                    visible:1
                })
            }
        }
        else if(e== 'setting'){
            if(this.state.visible == 2){
                this.setState({
                    visible:0
                })
            }
            else{
                this.setState({
                    visible:2
                })
            }
        }

    }
    render(){
        return(
            <React.Fragment>
                <nav className="buo-crm-nav">
                    <div className="container-nav">
                    <div className="crm-dash-nav1">   
                        <Link to="/">
                            <img src={buopso} alt=""/>
                        </Link>
                    </div>
                    <div className="crm-dash-nav2">
                        <div>
                        <ul>
                            <li>
                                <img src={notification} alt="" srcset=""/>
                            </li>
                            <li>
                                <img src={setting} alt="" srcset=""/>
                            </li>
                        </ul>
                        </div>
                        <div>
                            <ul>
                                <li><img src={profile} alt="" srcset=""/></li>
                                <li>{this.state.name}</li>
                            </ul>
                        </div>
                    </div>
                    </div>
                    {/* <ul className="buo-nav-heading">
                        <Link to="/" className="a-tag dash-a-tag">
                        <img src={buopso} alt="" className="company-logo"/></Link>
                    </ul> */}
                    {/* <ul className="display-flex">
                        <li className="buo-navbar-nav-li dash-a-tag">
                            <div onClick={e=>this.handleClick('notify')} className="">
                                <img src={notification} alt="" srcset=""/>
                            </div>
                            <div className={`download-container-values ${this.state.visible==1? '' :'hidden'}`}>
                                <ul className="buo-nav-ul download-ul">
                                    <li className="download-li">
                                    SVG
                                    </li>
                                    <li className="download-li">
                                        PDF
                                    </li>
                                    <li className="download-li">
                                        Excel
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="buo-navbar-nav-li">
                            <div onClick={e=>this.handleClick('setting')} className="">
                                    <img src={setting} alt="" srcset=""/>
                                </div>
                                <div className={`download-container-values ${this.state.visible==2? '' :'hidden'}`}>
                                    <ul className="buo-nav-ul download-ul">
                                        <li className="download-li">
                                        SVG
                                        </li>
                                        <li className="download-li">
                                            PDF
                                        </li>
                                        <li className="download-li">
                                            Excel
                                        </li>
                                    </ul>
                            </div>
                        </li>
                        <li className="buo-navbar-nav-li">
                            <div className="display-flex" onClick={e=>this.handleClick('setting')}>
                                <ul className="display-flex">
                                    <li className="buo-navbar-nav-li">
                                <img src={profile} alt="" srcset=""/></li>
                                <li className="buo-navbar-nav-li">
                                <h6 className="buo-text-dark dash-a-tag">{this.state.name}</h6>
                                </li>
                                </ul>
                            </div>
                            <div className={`download-container-values ${this.state.visible==3? '' :'hidden'}`}>
                                <ul className="buo-nav-ul download-ul">
                                    <li className="download-li">
                                    SVG
                                    </li>
                                    <li className="download-li">
                                        PDF
                                    </li>
                                    <li className="download-li">
                                        Excel
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul> */}
                    
                </nav>
            </React.Fragment>
        );
    }
}

export default Dashnav;