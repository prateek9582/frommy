import React, { Component } from 'react';

class Left extends Component{

    render(){
        return(
            <React.Fragment>
                <ul className="left-soft-ul">
                    <li className="left-soft-li">All Softwares</li>
                    <li className="left-soft-li">Sales</li>
                    <li className="left-soft-li">Marketing</li>
                    <li className="left-soft-li">Support</li>
                    <li className="left-soft-li">Communication</li>
                    <li className="left-soft-li">Collaboration</li>
                </ul>
            </React.Fragment>
        );
    }
}
export default Left;