import React, { Component } from 'react';
import search from '../../assets/icon/Search Icon.svg';
import download from '../../assets/icon/Download.svg';
import filter from '../../assets/icon/Filter.svg';
import more from '../../assets/icon/More.svg';
import star from '../../assets/icon/Star.svg';
import left from '../../assets/icon/Left.svg';
import right from '../../assets/icon/right arrow.svg';
import box from '../../assets/icon/Box View.svg';
import grid from '../../assets/icon/grid view.svg';
import more1 from '../../assets/icon/More1.svg';
class Rightdash extends Component{
    constructor(props){
        super(props);
        this.state={
            cname:"Sai Sanjivni",
            visible:0,
            tableheads :['name','email','phone number','contact owner']
        }
    }
    handleClick = (e) => {
        if(e== 'download'){
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
        else if(e=== 'filter'){
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
        else if(e=== 'group'){
            if(this.state.visible == 3){
                this.setState({
                    visible:0
                })
            }
            else{
                this.setState({
                    visible:3
                })
            }
        }
        else if(e== 'favorites'){
            if(this.state.visible == 4){
                this.setState({
                    visible:0
                })
            }
            else{
                this.setState({
                    visible:4
                })
            }
        }
        else if(e== 'more'){
            if(this.state.visible == 5){
                this.setState({
                    visible:0
                })
            }
            else{
                this.setState({
                    visible:5
                })
            }
        }
      }
      openNav(){
        document.querySelector(".dash-left-container").classList.remove('left-width');
        document.querySelector(".dash-right-container").classList.remove('right-width');
        document.querySelector(".right-nav-icon").classList.add("hidden");
      }
      open(){
          document.getElementById("mySidenav").style.width = "40%";
          document.querySelector('.form-left-nav').style.width="100%";
          
      }
      close(){
        document.getElementById("mySidenav").style.width = "0";
        document.querySelector('.form-left-nav').style.width="0";
      }
    render(){
        return(
            <React.Fragment>
                <nav className="rightdash-main-nav">
                    <div className="rightdash-main-nav1">
                        <ul>
                            <li><img src={more} alt="" srcset="" className="right-nav-icon hidden" onClick={this.openNav}/></li>
                            <li><span className="buo-btn buo-btn-dotted">Add Logo</span></li>
                            <li>{this.state.cname}</li>
                        </ul>
                    </div>
                    <div className="rightdash-main-nav2">
                        <div className="o_cp_searchview">
                            <div className="o_searchview">
                                <img src={search} alt="" srcset=""  className="o_searchview_icon"/>
                                <div className="o_searchview_input_container">
                                    <input type="search" placeholder="Search" name="search" id="" className="o_searchview_input"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className="display-flex dash-right-nav-part1 buo-pl-2">
                        <div className="right-nav-icon hidden">
                        <img src={more} alt="" srcset="" onClick={this.openNav}/>
                        </div>
                        <span className="buo-btn buo-btn-dotted">Add Logo</span>
                        <h6 className="company-name">{this.state.cname}</h6>
                    </div>
                    <div className="display-flex dash-right-nav-part2">
                        <input type="search" className="form__field" placeholder="Search" name="search" id=""/>
                        <img src={search} alt="" srcset="" className="buo-pr-2"/>
                    </div> */}

                </nav>
                <div className="display-center">

                    {/* start filter nav */}

                    <nav className="crm-filter-nav">
                        <div className="crm-filter1">
                            <ul>
                                <li>
                                    <div onClick={e=>this.handleClick('filter')}>
                                        <img src={filter} alt="" srcset=""/>
                                        <span>Filters</span>
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
                                <li>
                                    <div onClick={e=>this.handleClick('group')}>
                                        <img src={more} alt="" srcset=""/>
                                        <span>Group by</span>
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
                                <li>
                                    <div onClick={e=>this.handleClick('favorites')}>
                                        <img src={star} alt="" srcset=""/>
                                        <span>Favorites</span>
                                    </div>
                                    <div className={`download-container-values ${this.state.visible==4? '' :'hidden'}`}>
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
                            </ul>
                            <div>
                                <ul>
                                    <li>1-2/2</li>
                                    <li><img src={left} alt="" srcset=""/></li>
                                    <li><img src={right} alt="" srcset=""/></li>
                                </ul>
                            </div>
                            
                        </div>
                        <div className="crm-filter2">
                            <div>
                                <ul>
                                    <li>
                                        <button type="submit"  className="buo-btn buo-btn-primary buo-mr-5"onClick={this.open}> Create </button></li>
                                    <li>
                                        <button type="submit"  className="buo-btn buo-border buo-border-primary buo-mr-5"> Import</button></li>
                                    <li>
                            
                                            <img src={download} alt="" srcset="" className="download-icon" onClick={e =>this.handleClick('download')}/>
            
                                        <div className={`download-container-values ${this.state.visible == 1? '' :'hidden'}`}>
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
                                    
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li><img src={box} alt="" srcset=""/></li>
                                    <li><img src={grid} alt="" srcset=""/></li>
                                </ul>
                            </div>
                            
                        </div>

                        {/* <div className="display-flex rightdash-nav-part2">
                            <div className="rightdash-part2-p1 display-flex">
                                <div className="part2-p">
                                    <div onClick={e=>this.handleClick('filter')} className="filteration">
                                    <img src={filter} alt="" srcset="" className="right-dash-icon"/>
                                    <span>Filters</span>
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
                                </div>
                                <div className="part2-p">
                                    <div onClick={e=>this.handleClick('group')} className="filteration">
                                    <img src={more} alt="" srcset="" className="right-dash-icon"/>
                                    <span>Group by</span>
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
                                </div>
                                <div className="part2-p">
                                <div onClick={e=>this.handleClick('favorites')} className="filteration">
                                    <img src={star} alt="" srcset="" className="right-dash-icon"/>
                                    <span>Favorites</span>
                                    </div>
                                    <div className={`download-container-values ${this.state.visible==4? '' :'hidden'}`}>
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
                                </div>
                            </div>
                            <div className="part2-p1 ">
                                <span>1-2/2</span>
                                <img src={left} alt="" srcset="" className="right-dash-icon left-icon"/>
                                <img src={right} alt="" srcset="" className="right-dash-icon"/>
                            </div>
                            <div className="part2-p2">
                            <img src={box} alt="" srcset="" className="right-dash-icon box-icon"/>
                                <img src={grid} alt="" srcset="" className="right-dash-icon"/>
                            </div>
                        </div>
                        <div className="rightdash-nav-part1 display-flex">
                            <button type="submit" className="buo-btn buo-btn-primary buo-mr-5"onClick={this.open}>Create</button>
                            <button type="submit" className="buo-btn buo-border buo-border-primary buo-mr-5">Import</button>
                            <div className="download-container">                           
                                <div className="download-icon">
                                <img src={download} alt="" srcset="" className="download-icon" onClick={e =>this.handleClick('download')}/>
                            </div>
                            <div className={`download-container-values ${this.state.visible == 1? '' :'hidden'}`}>
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
                        </div>
                        </div> */}
                    </nav>
                    
                    {/* end filter nav */}

                    {/* start customer summary */}
                    <div className="customer-summary">
                        <div className="display-center">
                        <div className="display-flex">
                            <h6>Customers Summary</h6>
                        </div>
                        <div className="display-flex">
                            <div className="customer-div">
                                <h1 className="buo-text-grey">0</h1>
                                <small className="">Total customers</small>
                            </div>
                            <div className="customer-div buo-pl-2">
                                <h1 className="buo-text-grey">0</h1>
                                <small className="buo-text-success">Active customers</small>
                            </div>
                            <div className="customer-div buo-pl-2">
                                <h1 className="buo-text-grey">0</h1>
                                <small className="buo-text-danger">Inactive customers</small>
                            </div>
                            <div className="customer-div buo-pl-2">
                                <h1 className="buo-text-grey">0</h1>
                                <small className="buo-text-primary">Active Contacts</small>
                            </div>
                            <div className="customer-div buo-pl-2">
                                <h1 className="buo-text-grey">0</h1>
                                <small className="buo-text-danger">Inactive Contacts</small>
                            </div>
                            <div className="buo-pl-2">
                                <h1 className="buo-text-grey">0</h1>
                                <small className="buo-text-grey">Contacts Logged In Today</small>
                            </div>
                        </div>
                    </div>
                    </div>

                    {/*end customer summary*/}


                    {/* start grid */}

                    <table className="crm-table cover">
                        <thead className="thead-bg">
                                <tr>
                                <th scope="col" className="table-head">
                                <input type="checkbox" class="" id="exampleCheck1"/>
                                </th>
                                <th scope="col" className="table-head">NAME</th>
                                <th scope="col" className="table-head">EMAIL</th>
                                <th scope="col" className="table-head">PHONE NUMBER</th>
                                <th scope="col" className="table-head">CONTACT OWNER</th>
                                <th><div>
                                <div onClick={e=>this.handleClick('more')}>
                                    <img src={more1} alt="download" className=""/>
                                    </div>
                                    <div className={`download-container-values ${this.state.visible==5? '' :'hidden'}`}>
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
                                    </div></th>
                                </tr>

                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">
                                <input type="checkbox" class="" id="exampleCheck1"/>
                            </th>
                            <td>Amit Kumar</td>
                            <td>amitkumarmaac21@gmail.com</td>
                            <td>+91955249599</td>
                            <td>Amit Kumar</td>
                            </tr>
                            <tr>
                            <th scope="row">
                                <input type="checkbox" class="" id="exampleCheck1"/>
                            </th>
                            <td>Amit Kumar</td>
                            <td>amitkumarmaac21@gmail.com</td>
                            <td>+91955249599</td>
                            <td>Amit Kumar</td>
                            </tr>
                            <tr>
                            <th scope="row">
                                <input type="checkbox" class="" id="exampleCheck1"/>
                            </th>
                            <td>Amit Kumar</td>
                            <td>amitkumarmaac21@gmail.com</td>
                            <td>+91955249599</td>
                            <td>Amit Kumar</td>
                            </tr>
                            <tr>
                            <th scope="row">
                                <input type="checkbox" class="" id="exampleCheck1"/>
                            </th>
                            <td>Amit Kumar</td>
                            <td>amitkumarmaac21@gmail.com</td>
                            <td>+91955249599</td>
                            <td>Amit Kumar</td>
                            </tr>
                            <tr>
                            <th scope="row">
                                <input type="checkbox" class="" id="exampleCheck1"/>
                            </th>
                            <td>Amit Kumar</td>
                            <td>amitkumarmaac21@gmail.com</td>
                            <td>+91955249599</td>
                            <td>Amit Kumar</td>
                            </tr>
                            <tr>
                            <th scope="row">
                                <input type="checkbox" class="" id="exampleCheck1"/>
                            </th>
                            <td>Amit Kumar</td>
                            <td>amitkumarmaac21@gmail.com</td>
                            <td>+91955249599</td>
                            <td>Amit Kumar</td>
                            </tr>
                            <tr>
                            <th scope="row">
                                <input type="checkbox" class="" id="exampleCheck1"/>
                            </th>
                            <td>Amit Kumar</td>
                            <td>amitkumarmaac21@gmail.com</td>
                            <td>+91955249599</td>
                            <td>Amit Kumar</td>
                            </tr>
                            <tr>
                            <th scope="row">
                                <input type="checkbox" class="" id="exampleCheck1"/>
                            </th>
                            <td>Amit Kumar</td>
                            <td>amitkumarmaac21@gmail.com</td>
                            <td>+91955249599</td>
                            <td>Amit Kumar</td>
                            </tr>
                        </tbody>
                        </table>
                        <div className="form-left-nav"></div>
                    {/* end grid */}

                        {/* start form slider */}

                        <div id="mySidenav" class="sidenav">
                            <a href="#" class="closebtn" onClick={this.close}>&times;</a>
                            <a href="#">About</a>
                            <a href="#">Services</a>
                            <a href="#">Clients</a>
                            <a href="#">Contact</a>
                        </div>
            
            
                    {/* end form slider*/}
            
            </div>
                
            </React.Fragment>
        );
    }
}
export default Rightdash;