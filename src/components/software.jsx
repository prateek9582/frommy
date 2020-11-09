import React, { Component } from 'react';
import Mainnav from './mainnav';
import SecnavSoft from './softwarenav';
import '../assets/styles/register.scss';
import Left from './leftsoftware';
import Right from './rightsoftware';

class Software extends Component{

    render(){
        return(
            <React.Fragment>
                <Mainnav></Mainnav>
                <SecnavSoft></SecnavSoft>
                <div className="soft-container">
                    <div className="soft-container-left">
                        <Left></Left>
                    </div>
                    <div className="soft-container-right">
                        <div className="soft-container-right-sides">
                        <Right></Right>
                        </div>
                    </div>
                </div>
            </React.Fragment>

        );
    }
}
export default Software;