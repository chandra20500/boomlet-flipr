import React, { Component } from 'react';
import Filter from './proposal_status_filter'
import yt from '../assets/icons/youtube.svg'
import Proposal_date from './Proposal_status_date'
import T_body from './proposal_status_tablebody'
import Analysis_stats from './proposal_status_analysis'
import Overall_stats from './proposal_stats_overall'
import Disclaimer from './Proposal_stats_disclaimer'

class Body_status extends Component {
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
            <div className="body_status" style={{ background: '#FBFAFF 0% 0% no-repeat padding-box', paddingTop: '20px', overflowY: 'scroll', height: '80vh', scrollbarWidth: 'none' }}>
                <div className="proposal_date" style={{ width: '84%', position: 'relative', left: '8%' }}>
                    <div style={{ display: 'flex' }} className={`${this.state.zindex}`}>
                        <div style={{ flex: '3', opacity: '0.54' }}>
                            <strong>Proposal Date</strong> : &nbsp; 23-02-2020
                    </div>
                        <div style={{ flex: '2', justifyContent: 'row-reverse', display: 'flex', marginRight: '0px', paddingRight: '1%' }}>
                            <Filter style={{ display: 'none' }} showPopup={this.state.showPopup} popup_show={this.showPopup} popup_status={this.hidePopup} />
                        </div>
                    </div>
                    <div style={{ position: 'relative' }}>
                        <Proposal_date />
                    </div>
                    <div style={{ position: 'relative', marginTop: '3%' }}>
                        <p style={{ opacity: '0.84', fontSize: '1.2rem' }}>
                            <strong>INFLUENCER DETAIL</strong>
                        </p>
                        <div style={{ fontSize: '0.8rem' }}>
                            <div style={{ display: 'flex' }}>
                                <img src={yt} />
                                <p style={{ position: 'relative', opacity: '0.84', left: '2%', fontSize: '1.1rem', marginBottom: '0px' }}>
                                    <strong style={{ position: 'relative', top: '25%' }}>YouTube</strong>
                                </p>
                                <p style={{ position: 'relative', left: '5%', fontSize: '1.1rem', opacity: '0.84', }}>
                                    <strong style={{ position: 'relative', top: '25%' }}>Category A</strong>
                                </p>
                            </div>
                            <div style={{ background: 'white 0% 0% no-repeat padding-box', opacity: '0.64', boxShadow: '0px 0px 4px #0000001F', paddingLeft: '3%', paddingRight: '3%', paddingTop: '1%' }}>
                                <table cellspacing="0" cellpadding="0" className="table" >
                                    <th>
                                        Name
                            </th>

                                    <th>
                                        Subscribers
                            </th>

                                    <th>
                                        Language
                            </th>

                                    <th>
                                        Average views
                            </th>
                                    <th>
                                        Average views<p>(based on breakdown from you end)</p>
                                    </th>
                                    <th>
                                        Engagment on YT (Likes + Comments + Views)
                            </th>
                                    <th>
                                        Cost per YouTube video(Net + 18% additional)
                            </th>

                                    <th>
                                        Deliverables
                            </th>

                                    <th>
                                        Packaged Cost
                            </th>

                                    <th>
                                        Action
                            </th>
                                    <T_body
                                        name="bhuvan bam"
                                        action="Rejected"
                                        color="red"
                                    />
                                    <tr width="100%" className="full_width_row">
                                        <td colSpan="10">
                                            <p>
                                                <strong>Remarks</strong>
                                            </p>
                                            <p className="full_width_row_value">
                                                Reasonable / Homemade REmedies
                                    </p>
                                        </td>
                                    </tr>
                                    <T_body
                                        name="bhuvan bam"
                                        action="Approved"
                                        color="green"
                                    />
                                    <T_body
                                        name="Fit tuber"
                                        action="Approved"
                                        color="green"
                                    />
                                    <T_body
                                        name="Flying Beast"
                                        action="Approved"
                                        color="green"
                                    />
                                    <T_body
                                        name="Amit badhana"
                                        action="Approved"
                                        color="green"
                                    />
                                </table>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="overall_stats" style={{ display: 'flex', flexDirection: 'column', paddingLeft: '8%', paddingRight: '8%' }}>
                    {/* <p style={{ color: '#262626', opacity: '0.84', marginLeft: '1%' }}>
                        <strong>Analysis</strong>
                    </p> */}
                    {/* <Analysis_stats /> */}
                    <p style={{ fontSize: '1.2rem', marginLeft: '3%' }}>
                        <strong>Overall Stats</strong>
                    </p>
                    <Overall_stats />
                    <Disclaimer />
                </div>
            </div>
        );
    }
}

export default Body_status;