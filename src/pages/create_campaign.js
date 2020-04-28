import React, { Component } from 'react';
import Sidebar from '../components/Sidebar';
import TopBarBlock from '../components/TopBarBlock';
import searchIcon from '../assets/icons/search.svg';
import logo from '../assets/images/menu_logo.png'
import Calender from '../assets/icons/calendar.svg'
import Dropdown from '../assets/icons/arrow_drop_down.svg'

class CreateCampaign extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div style={{ width: '84%', position: 'relative', left: '8%' }}>
                <img src={logo} />
                <div style={{ width: '100%', position: 'relative' }}>
                    <TopBarBlock {...this.props} style={{ width: '80vw' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div style={{ marginBottom: '0px', fontSize: '1.2rem', fontWeight: '600' }}>
                                Create Campaign
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
                </div>
                <div style={{ background: '#FBFAFF', height: '80vh', overflowY: 'scroll', scrollbarWidth: 'none', marginLeft: '-20px', marginRight: '-20px', fontFamily: 'source sans pro', }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', paddingLeft: '6%', paddingRight: '6%', position: 'relative', top: '10%' }}>
                        <div style={{ width: '22%', height: '12%', marginBottom: '4%', display: 'flex', paddingLeft: '20px', paddingTop: '5px', paddingBottom: '5px', paddingRight: '20px', background: '#0000000A 0% 0% no-repeat padding-box', borderBottom: '2px solid #6238F2' }}>
                            <div style={{ flex: '2', color: '#6238F2', fontSize: '0.8rem' }}>
                                <p style={{ marginBottom: '0px' }}>Proposal date</p>
                                <input type="text" placeholder="19-feb-2019" style={{ border: 'none', fontWeight: '600', background: '#F1F0F5 0% 0% no-repeat padding-box' }} />
                            </div>
                            <div style={{ display: 'flex', color: '#18191B', opacity: '0.87', flexDirection: 'column', justifyContent: 'center' }}>
                                <img src={Calender} height="18px" style={{ opacity: '0.84' }} />
                            </div>
                        </div>
                        <div style={{ width: '22%', height: '12%', marginLeft: '10%', marginRight: '10%', marginBottom: '4%', display: 'flex', paddingLeft: '20px', paddingTop: '5px', paddingBottom: '5px', paddingRight: '20px', background: '#0000000A 0% 0% no-repeat padding-box' }}>
                            <div style={{ flex: '2', color: '#6238F2', fontSize: '0.8rem' }}>
                                <p style={{ marginBottom: '0px', color: '#000000', opacity: '0.44' }}>Brand / Agency</p>
                                <input type="text" placeholder="XYZ" style={{ border: 'none', color: '#18191B', fontWeight: '600', background: '#F1F0F5 0% 0% no-repeat padding-box' }} />
                            </div>
                        </div>
                        <div style={{ width: '22%', height: '12%', marginBottom: '4%', display: 'flex', paddingLeft: '20px', paddingTop: '5px', paddingBottom: '5px', paddingRight: '20px', background: '#0000000A 0% 0% no-repeat padding-box' }}>
                            <div style={{ flex: '2', color: '#6238F2', fontSize: '0.8rem' }}>
                                <p style={{ marginBottom: '0px', color: '#000000', opacity: '0.44' }}>Brand Name</p>
                                <input type="text" placeholder="XYZ" style={{ border: 'none', color: '#18191B', fontWeight: '600', background: '#F1F0F5 0% 0% no-repeat padding-box' }} />
                            </div>
                        </div>
                        <div style={{ width: '22%', height: '12%', marginBottom: '4%', display: 'flex', paddingLeft: '20px', paddingTop: '5px', paddingBottom: '5px', paddingRight: '20px', background: '#0000000A 0% 0% no-repeat padding-box' }}>
                            <div style={{ flex: '2', color: '#6238F2', fontSize: '0.8rem' }}>
                                <p style={{ marginBottom: '0px', color: '#000000', opacity: '0.44' }}>Client Name</p>
                                <input type="text" placeholder="XYZ" style={{ border: 'none', color: '#18191B', fontWeight: '600', background: '#F1F0F5 0% 0% no-repeat padding-box' }} />
                            </div>
                        </div>
                        <div style={{ width: '22%', height: '12%', marginLeft: '10%', marginRight: '10%', marginBottom: '4%', display: 'flex', paddingLeft: '20px', paddingTop: '5px', paddingBottom: '5px', paddingRight: '20px', background: '#0000000A 0% 0% no-repeat padding-box' }}>
                            <div style={{ flex: '2', color: '#6238F2', fontSize: '0.8rem' }}>
                                <p style={{ marginBottom: '0px', color: '#000000', opacity: '0.44' }}>Strategist</p>
                                <input type="text" placeholder="XYZ" style={{ border: 'none', color: '#18191B', fontWeight: '600', background: '#F1F0F5 0% 0% no-repeat padding-box' }} />
                            </div>
                        </div>
                        <div style={{ width: '22%', height: '12%', marginBottom: '4%', display: 'flex', paddingLeft: '20px', paddingTop: '5px', paddingBottom: '5px', paddingRight: '20px', background: '#0000000A 0% 0% no-repeat padding-box' }}>
                            <div style={{ flex: '2', color: '#6238F2', fontSize: '0.8rem' }}>
                                <p style={{ marginBottom: '0px', color: '#000000', opacity: '0.44' }}>Contact number</p>
                                <input type="text" placeholder="9987200123" style={{ border: 'none', color: '#18191B', fontWeight: '600', background: '#F1F0F5 0% 0% no-repeat padding-box' }} />
                            </div>
                        </div>
                        <div style={{ width: '22%', height: '12%', marginBottom: '4%', display: 'flex', paddingLeft: '20px', paddingTop: '5px', paddingBottom: '5px', paddingRight: '20px', background: '#0000000A 0% 0% no-repeat padding-box' }}>
                            <div style={{ flex: '2', color: '#6238F2', fontSize: '0.8rem' }}>
                                <p style={{ marginBottom: '0px', color: '#000000', opacity: '0.44' }}>Email ID</p>
                                <input type="text" placeholder="XYZ@gmail.com" style={{ border: 'none', color: '#18191B', fontWeight: '600', background: '#F1F0F5 0% 0% no-repeat padding-box' }} />
                            </div>
                        </div>
                    </div>
                    <div style={{ border: '2px solid white', background: 'white', position: 'relative', paddingTop: '10px', top: '10%', left: '6%', width: '88%', paddingLeft: '2%', paddingRight: '2%' }}>
                        <p style={{ fontWeight: '600', fontSize: '1.2rem' }}>
                            Client Detail
                        </p>
                        <div style={{ border: '1px solid #D5DBE0' }}>

                        </div>
                        <div style={{ display: 'flex', position: 'relative', marginTop: '2%', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                            <div style={{ position: 'relative', width: '22%', height: '12%', marginBottom: '4%', display: 'flex', paddingLeft: '20px', paddingTop: '5px', paddingBottom: '5px', paddingRight: '20px', background: '#0000000A 0% 0% no-repeat padding-box' }}>
                                <div style={{ flex: '2', color: '#6238F2', fontSize: '0.8rem' }}>
                                    <p style={{ marginBottom: '0px', color: '#000000', opacity: '0.44' }}>Influencer Category</p>
                                    <input type="text" placeholder="Lifestyle" style={{ border: 'none', color: '#18191B', fontWeight: '600', background: '#F5F5F5 0% 0% no-repeat padding-box' }} />
                                </div>
                                <div style={{ display: 'flex', color: '#18191B', opacity: '0.87', flexDirection: 'column', justifyContent: 'center' }}>
                                    <img src={Dropdown} height="18px" style={{ opacity: '0.84' }} />
                                </div>
                            </div>
                            <div style={{ position: 'relative', width: '22%', height: '12%', marginRight: '10%', marginLeft: '10%', marginBottom: '4%', display: 'flex', paddingLeft: '20px', paddingTop: '5px', paddingBottom: '5px', paddingRight: '20px', background: '#0000000A 0% 0% no-repeat padding-box' }}>
                                <div style={{ flex: '2', color: '#6238F2', fontSize: '0.8rem' }}>
                                    <p style={{ marginBottom: '0px', color: '#000000', opacity: '0.44' }}>Influencer Type</p>
                                    <input type="text" placeholder="CAT A" style={{ border: 'none', color: '#18191B', fontWeight: '600', background: '#F5F5F5 0% 0% no-repeat padding-box' }} />
                                </div>
                                <div style={{ display: 'flex', color: '#18191B', opacity: '0.87', flexDirection: 'column', justifyContent: 'center' }}>
                                    <img src={Dropdown} height="18px" style={{ opacity: '0.84' }} />
                                </div>
                            </div>
                            <div style={{ position: 'relative', width: '22%', height: '12%', marginBottom: '4%', display: 'flex', paddingLeft: '20px', paddingTop: '5px', paddingBottom: '5px', paddingRight: '20px', background: '#0000000A 0% 0% no-repeat padding-box' }}>
                                <div style={{ flex: '2', color: '#6238F2', fontSize: '0.8rem' }}>
                                    <p style={{ marginBottom: '0px', color: '#000000', opacity: '0.44' }}>Platform</p>
                                    <input type="text" placeholder="YouTube" style={{ border: 'none', color: '#18191B', fontWeight: '600', background: '#F5F5F5 0% 0% no-repeat padding-box' }} />
                                </div>
                                <div style={{ display: 'flex', color: '#18191B', opacity: '0.87', flexDirection: 'column', justifyContent: 'center' }}>
                                    <img src={Dropdown} height="18px" style={{ opacity: '0.84' }} />
                                </div>
                            </div>
                            <div style={{ position: 'relative', width: '22%', height: '12%', marginBottom: '4%', display: 'flex', paddingLeft: '20px', paddingTop: '5px', paddingBottom: '5px', paddingRight: '20px', background: '#0000000A 0% 0% no-repeat padding-box' }}>
                                <div style={{ flex: '2', color: '#6238F2', fontSize: '0.8rem' }}>
                                    <p style={{ marginBottom: '0px', color: '#000000', opacity: '0.44' }}>Deliverebles</p>
                                    <input type="text" placeholder="NTD" style={{ border: 'none', color: '#18191B', fontWeight: '600', background: '#F5F5F5 0% 0% no-repeat padding-box' }} />
                                </div>
                            </div>
                            <div style={{ position: 'relative', width: '22%', height: '12%', marginRight: '10%', marginLeft: '10%', marginBottom: '4%', display: 'flex', paddingLeft: '20px', paddingTop: '5px', paddingBottom: '5px', paddingRight: '20px', background: '#0000000A 0% 0% no-repeat padding-box' }}>
                                <div style={{ flex: '2', color: '#6238F2', fontSize: '0.8rem' }}>
                                    <p style={{ marginBottom: '0px', color: '#000000', opacity: '0.44' }}>Co-ordinates</p>
                                    <input type="text" placeholder="19-feb-2019" style={{ border: 'none', color: '#18191B', fontWeight: '600', background: '#F5F5F5 0% 0% no-repeat padding-box' }} />
                                </div>
                            </div>
                            <div style={{ position: 'relative', width: '22%', height: '12%', marginBottom: '4%', display: 'flex', paddingLeft: '20px', paddingTop: '5px', paddingBottom: '5px', paddingRight: '20px', background: '#0000000A 0% 0% no-repeat padding-box' }}>
                                <div style={{ flex: '2', color: '#6238F2', fontSize: '0.8rem' }}>
                                    <p style={{ marginBottom: '0px', color: '#000000', opacity: '0.44' }}>Campaign Budget(in ₹)</p>
                                    <input type="text" placeholder="12000" style={{ border: 'none', color: '#18191B', fontWeight: '600', background: '#F5F5F5 0% 0% no-repeat padding-box' }} />
                                </div>
                            </div>
                            <div style={{ position: 'relative', width: '22%', height: '12%', marginBottom: '4%', display: 'flex', paddingLeft: '20px', paddingTop: '5px', paddingBottom: '5px', paddingRight: '20px', background: '#0000000A 0% 0% no-repeat padding-box' }}>
                                <div style={{ flex: '2', color: '#6238F2', fontSize: '0.8rem' }}>
                                    <p style={{ marginBottom: '0px', color: '#000000', opacity: '0.44' }}>Campaign Duration</p>
                                    <input type="text" placeholder="1 Day" style={{ border: 'none', color: '#18191B', fontWeight: '600', background: '#F5F5F5 0% 0% no-repeat padding-box' }} />
                                </div>
                            </div>
                        </div>
                        <div style={{ position: 'relative', width: '100%', marginBottom: '4%', display: 'flex', paddingLeft: '20px', paddingTop: '5px', paddingBottom: '5px', height: '90px', paddingRight: '20px', background: '#0000000A 0% 0% no-repeat padding-box' }}>
                            <div style={{ color: '#6238F2', fontSize: '0.8rem' }}>
                                <p style={{ marginBottom: '0px', color: '#000000', opacity: '0.44' }}>Client's Breif</p>
                                <input type="text" placeholder="Enter details" style={{ border: 'none', color: '#18191B', fontWeight: '600', background: '#F5F5F5 0% 0% no-repeat padding-box' }} />
                            </div>
                        </div>
                    </div>
                    <div style={{ position: 'relative', top: '20%', marginBottom: '15%', marginLeft: '6%', marginRight: '6%' }}>
                        <p style={{ color: '#262626', opacity: '0.84', fontSize: '1.2rem', fontWeight: '600', letterSpacing: '0px' }}>
                            INFLUENCER DETAILS
                        </p>
                        <button style={{ background: '#6238F2', border: 'none', color: 'white', height: '35px', width: '150px', fontSize: '1.1rem', borderRadius: '2px' }}>
                            + Add Influencer
                        </button>
                    </div>
                </div>
            </div >
        );
    }
}

export default CreateCampaign;
