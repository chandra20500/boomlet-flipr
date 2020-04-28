import React, { Component } from 'react';
import logo from './assets/images/boomlogin.png';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    formSubmit(e) {
        e.preventDefault();
        window.open("/dashboard", "self");
    }

    render() {
        return (
            <div className="login_background">
                <div className="loginBox">
                    <img alt="Boomlet" className="logo" src={logo} />
                    <p className="subText">Dear User,login to access the master panel</p>
                    <form className="form" onSubmit={(e) => this.formSubmit(e)}>
                        <div className="input_box">
                            <label className="usernme">Username</label>
                            <input type="text" placeholder="Enter user name" />
                        </div>
                        <div className="input_box">
                            <label className="psswrd">Password</label>
                            <input type="password" placeholder="Enter Password" />
                        </div>
                        <div className="text-align-right mt-4">
                            <button className="btn btn-blue">login</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

}

export default Home;
