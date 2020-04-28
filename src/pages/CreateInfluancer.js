import React, { Component } from 'react';
import Sidebar from '../components/Sidebar';
import TopBarBlock from '../components/TopBarBlock';
import searchIcon from '../assets/icons/search.svg';

class CreateInfluancer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="main_bock">
                <div className="right">
                    <Sidebar />
                </div>
                <div className="main_container">

                    <TopBarBlock {...this.props}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div style={{}}>
                                Create Influencer
                            </div>
                            <div>
                                <button style={{ margin: '0 10px' }} className="btn btn-skyblue">Import CSV</button>
                                <a href="/create-influancer"
                                    style={{ margin: '0 10px' }} className="btn btn-blue">
                                    + New Influencer
                                </a>
                            </div>
                        </div>
                    </TopBarBlock>

                    <div style={{ display: 'flex' }}>
                        <div>
                            <div className="input_box">
                                <label className="usernme">Username</label>
                                <input type="text" placeholder="Enter user name" />
                            </div>
                        </div>
                        <div>
                            <div className="input_box">
                                <label className="usernme">Username</label>
                                <input type="text" placeholder="Enter user name" />
                            </div>
                        </div>
                        <div>
                            <div className="input_box">
                                <label className="usernme">Username</label>
                                <input type="text" placeholder="Enter user name" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <h1>Create influencer</h1>
                    </div>
                    <div>
                        changes
                    </div>

                </div>
            </div >
        );
    }
}

export default CreateInfluancer;
