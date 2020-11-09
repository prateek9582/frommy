import React, { Component } from 'react';
import mobile from '../assets/icon/Mobile.svg';
import desktop from '../assets/icon/Desktop.svg';
import web from '../assets/icon/Web.svg';
import search from '../assets/icon/Search Icon.svg';
class Nav extends Component{
    constructor() {
        super();
    
        // Initial state is defined
        this.state = {
          toggled: false
        };
      }
    
      // when handleClick is called, setState will update the state so that toggle is reversed
      handleClick = () => {
        this.setState(previousState => {
          return {
            toggled: !previousState.toggled
          }
        })
      }


    render(){
        return(
            <React.Fragment>
                <nav className="buo-mainnav buo-bg-white">
                    <div className="container-nav">
                        <div className="buo-nav-heading">
                            <h5 className="nav-2-text"><b>Softwares</b></h5>
                        </div>
                        <div className="buo-nav-center">
                            <ul className="buo-nav buo-navbar-nav display-flex">
                                <li className="buo-navbar-nav-li">
                                    <img src={desktop} alt="" srcset="" className="nav-icon"/>
                                    <span className="buo-text-dark">Desktop</span>
                                </li>
                                <li className="buo-navbar-nav-li">
                                    <img src={mobile} alt="" srcset="" className="nav-icon"/>
                                    <span className="buo-text-dark">Mobile</span>
                                </li>
                                <li className="buo-navbar-nav-li">
                                    <img src={web} alt="" srcset="" className="nav-icon"/>
                                    <span className="buo-text-dark">Web</span>
                                </li>
                            </ul>
                        </div>
                        <div className="buo-width-50">
                        <div className="buo-nav buo-navbar-nav buo-navbar-right display-flex manage-second">
                                <input type="search" name="" id="" placeholder="search here " className="input-search"/>
                                <label for="search"><img src={search} alt="" srcset="" onClick={this.handleClick} className="search-icon"/></label>
                        </div>
                        </div>
                    </div>

                </nav>
            </React.Fragment>
        );
    }
}
export default Nav;