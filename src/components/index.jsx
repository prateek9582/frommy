import React, { Component } from 'react';

import pc from '../assets/images/Pasted Image.png';
import '../assets/styles/register.scss'
import '../assets/styles/index.scss'
import '../assets/styles/buo-btn.scss';
import Mainnav from './mainnav';

class Index extends Component{
    state ={}
    render(){
        return(
            <header>
                <Mainnav></Mainnav>
                <div>
                    <div className="blue">
                        <div className="buo-head-p">
                            <h4 className="buo-head"><b>There's a better way to grow.</b></h4>
                            <p>Marketing, sales, and service software that helps your business grow without compromise. Because “good for the business” should also mean “good for the customer.”</p>
                        </div>
                    </div>
                    <div className="buo-div2">
                        <div className="buo-div2-inner">
                                <div className="buo-div2-inner-ep">
                                    <h2 className="pb-3 text-primary"><b>There's a better<br/> way to grow</b></h2>
                                    <button type="submit" className="buo-btn buo-btn-primary buo-si mb-2 mt-2">Get Buopso free</button>
                                    <p className="pt-2 align-p">Get started with free tools, and upgrade as you grow.</p>
                                </div>
                                <div className="buo-pc">
                        <img src={pc} alt="" srcset=""/>
                    </div>
                        </div>
                    </div>
                    
                </div>
            </header>
        );
    }
}
export default Index;