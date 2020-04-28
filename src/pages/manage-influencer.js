import React, { Component } from 'react';
import Sidebar from '../components/Sidebar';
import Manage_influencer_details from '../components/manage-influencer-body';
import Filter from '../components/manage-influencer-filter';
import View_manage_influencer from '../components/view_manage_influencer';
import pew from '../assets/images/pew.jpg';
import TopBarBlock from '../components/TopBarBlock';
import searchIcon from '../assets/icons/search.svg';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

class Manage_influencer_home extends Component {
    constructor() {
        super();
        this.state = {
            showPopup: false,
            zindex: ""
        };
        this.showPopup = this.showPopup.bind(this);
    }
    showPopup() {
        var x = ""
        if (this.state.zindex == "") {
            x = "zindexnegative"
        }
        else {
            x = ""
        }
        this.setState({
            showPopup: !this.state.showPopup,
            zindex: x
        });
    }

    render() {
        return (
            <div className="main_bock" style={{ width: '90vw', overflowY: 'hidden', fontFamily: 'Source Sans Pro' }}>
                <div className="right">
                    <Sidebar />
                </div>
                <div className="main_container" style={{ padding: 0 }}>
                    <TopBarBlock {...this.props} style={{ width: '80vw' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '10px' }}>
                            <div style={{ background: '#F5F5F5', display: 'flex', padding: '0 15px', borderRadius: '3px' }}>
                                <img style={{ width: '16px' }} src={searchIcon} alt="" />
                                <input placeholder="Search Influencer" style={{ border: 'none', background: 'none', padding: '8px', width: '300px' }} type="text" />
                            </div>
                            <div>
                                <button style={{ margin: '0 10px' }} className="btn btn-skyblue">Import CSV</button>
                                <a
                                    href="/create-influancer"
                                    style={{ margin: '0 10px' }} className="btn btn-blue">+ New Influencer
                            </a>
                            </div>
                        </div>
                    </TopBarBlock>
                    <div>
                        <Filter style={{ display: 'none' }} showPopup={this.state.showPopup} popup_show={this.showPopup} popup_status={this.hidePopup} />
                    </div>
                    <div className={`manage_influencer_body ${this.state.zindex}`}>
                        <Manage_influencer_details
                            image={pew}
                            type="single"
                            name="Pewdiepies"
                            phone="7047033887"
                            email="abcdef@gmail.com"
                            instagram_follower="900K"
                            facebook_follower="2M"
                            linkedin_follower="580.5K"
                            twitter_follower="74.7K"
                            youtube_follower="12M"
                            updated_by="26-02-2020"
                            added_by="26-02-2020"
                        />
                        <Manage_influencer_details
                            image={pew}
                            type="single"
                            name="Pewdiepies"
                            phone="7047033887"
                            email="abcdef@gmail.com"
                            instagram_follower="900K"
                            facebook_follower="2M"
                            linkedin_follower="580.5K"
                            twitter_follower="74.7K"
                            youtube_follower="12M"
                            updated_by="26-02-2020"
                            added_by="26-02-2020"
                        />
                        <Manage_influencer_details
                            image={pew}
                            type="single"
                            name="Pewdiepies"
                            phone="7047033887"
                            email="abcdef@gmail.com"
                            instagram_follower="900K"
                            facebook_follower="2M"
                            linkedin_follower="580.5K"
                            twitter_follower="74.7K"
                            youtube_follower="12M"
                            updated_by="26-02-2020"
                            added_by="26-02-2020"
                        />
                        <Manage_influencer_details
                            image={pew}
                            type="single"
                            name="Pewdiepies"
                            phone="7047033887"
                            email="abcdef@gmail.com"
                            instagram_follower="900K"
                            facebook_follower="2M"
                            linkedin_follower="580.5K"
                            twitter_follower="74.7K"
                            youtube_follower="12M"
                            updated_by="26-02-2020"
                            added_by="26-02-2020"
                        />
                    </div>
                </div>
            </div >
        );
    }
}
//  
//onClick={this.togglePopup.bind(this)}

class Manage_influencer extends Component {
    render() {
        return (
            <Router>
                <div className="App" style={{ overflowY: 'hidden' }}>
                    <Switch>
                        <Route path={'/manage-influencer'} exact component={Manage_influencer_home} />
                        <Route path={'/manage-influencer-view'} component={View_manage_influencer} />
                    </Switch>
                </div>
            </Router >
        )
    }
}

export default Manage_influencer;

