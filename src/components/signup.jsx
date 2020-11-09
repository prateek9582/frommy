import React, { Component } from 'react';
import google from '../assets/icon/Google.svg';
import share from '../assets/icon/Share.svg';
import '../assets/styles/register.scss';
import '../assets/styles/font.scss';
import axios from 'axios';

class Signup extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"",
            email:"",
            password:""
        }
        this.submitHandler = this.submitHandler.bind(this);
    }
    changeHandler = (e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    async submitHandler(e){
        e.preventDefault();
        console.log(this.state);
        // axios.post('https://webhook.site/a8298bbd-9fb0-4cae-813a-5770bd67ef08',this.state)
        // .then(response =>{
        //     console.log(response)
        // }).catch(err=>{
        //     console.log(err)
        // })
        let {password, name , email} = this.state;
        const result =await fetch('https://webhook.site/a8298bbd-9fb0-4cae-813a-5770bd67ef08',{
            method:'post',
            mode:'no-cors',
            headers:{
                'password':password
            },
            body:JSON.stringify({
                name:name,

                email:email
            })
        })
        console.log(result);
    }
    render() { 
        let {name, email , password} = this.state;
        return ( 
            <React.Fragment>
                <form className="" onSubmit={this.submitHandler}>
                    <div className="form__group field">
                        <input type="input" className="form__field" placeholder="Enter your full name" value={name} name="name" id='name' onChange={this.changeHandler} required />
                        <label for="name" className="form__label">Full Name</label>
                    </div>
                    <div className="form__group field">
                        <input type="email" className="form__field" placeholder="Enter your email address" value = {email} name="email" id='name' onChange={this.changeHandler} required />
                        <label for="email" className="form__label">Email address</label>
                    </div>
                    <div className="form__group field">
                        <input type="password" className="form__field" placeholder="Enter your password" value={password} name="password" id='name' onChange={this.changeHandler} required />
                        <label for="password" className="form__label">Password</label>
                    </div>
                    <div className="check">
                            <input type="checkbox" name="" id="checkbox1" className="mr-2"/>
                            <label htmlFor="checkbox1">Reminder password</label>
                    </div>
                    <div className="underline">
                    <button type="submit" className="buo-btn buo-btn-primary full lo-btn">Create an account</button>
                    </div>
                    <div className="btn text-dark full back-go">
                        <div className="go-img-div">
                        <img src={google} alt="google" className="go-img"/>
                        </div>
                        <div className="go-si-di">
                        <a href="#" className = "go-si">Sign in with Google</a>
                        </div>
                    </div>
                    <div className="ending">
                        <div className="reserved">
                        <span>@2020 SS, Inc. All Rights Reserved</span>
                        </div>
                        <div>
                        <a href="">Privacy Policy</a>
                        <img src={share} alt="" srcset="" className="pl-2"/>
                        </div>
                    </div>
                </form>
            </React.Fragment>
         );
    }
}
 
export default Signup;