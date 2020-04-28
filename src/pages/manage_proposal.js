import React, { Component } from 'react';
import Sidebar from '../components/Sidebar';
import TopBarBlock from '../components/TopBarBlock';
import searchIcon from '../assets/icons/search.svg';
import Manage_proposal_body from '../components/manage_proposal_body';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Status_proposal from '../components/status_proposal'

class Manage_proposal extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="main_bock" style={{ width: '90vw' }}>
                <div className="right">
                    <Sidebar />
                </div>
                <div className="main_container" style={{background:'#fefefe'}}>

                    <TopBarBlock {...this.props} backbutton="nodisplay" paddingbottom="nopaddingbottom">
                        <div style={{ display: 'none', justifyContent: 'space-between' }}>
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
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div style={{ display: 'flex', padding: '0 15px', borderRadius: '3px' }}>
                                <div style={{ backgroremund: 'white', borderBottom: '4px solid #6238F2', height: '100%', width: '6rem', textAlign: 'center' }}>
                                    <p style={{ font: '0.8rem', color: '#6238F2', fontSize: '0.9rem' }}>Approve</p>
                                </div>
                                <div style={{ position: 'relative', left: '22%', fontSize: '0.9rem' }}>
                                    <p>Pending</p>
                                </div>
                            </div>
                            <div>
                                <a
                                    href="/create-influancer"
                                    style={{ margin: '0 20px', position: 'relative', top: '0px', fontSize: '0.8rem', height: '30px' }} className="btn btn-blue">Create Campaign
                                </a>
                            </div>
                        </div>
                    </TopBarBlock>
                    <div style={{ paddingTop: '3%', marginLeft: '-20px', marginRight: '-20px' }}>
                        <Manage_proposal_body />
                        <Manage_proposal_body />
                    </div>

                </div>
            </div >
        );
    }
}

class Proposal_app extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route path={'/status-manage-proposal'} exact component={Status_proposal} />
                        <Route path={'/manage-proposal'} component={Manage_proposal} />
                    </Switch>
                </div>
            </Router >
        );
    }
}


export default Proposal_app;
