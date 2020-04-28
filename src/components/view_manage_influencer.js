import React, { Component } from 'react'
import Sidebar from './Sidebar'
import TopBarBlock from './TopBarBlock'
import Previous_campaign from '../components/previous_campaign'
import Social_media from '../components/socialmedia_view.js'


class View_manage_influencer extends Component {
    render() {
        return (
            <div className="main_bock" style={{ fontFamily: 'Source Sans Pro', width: '90vw', height: '100vh', background: '#FEFEFE 0% 0% no-repeat padding-box', overflowY: 'none', overflowX: 'none' }}>
                <div className="right">
                    <Sidebar />
                </div>
                <div className="main_container" style={{ padding: 0 }}>
                    <TopBarBlock {...this.props} style={{ width: '80vw' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '10px' }}>
                            <div style={{ display: 'flex', padding: '0 15px', borderRadius: '3px' }}>
                                <p style={{ border: '2px solid white', paddingTop: '14px', verticalAlign: 'middle', height: '100', marginBottom: '0px', position: 'relative', font: 'Regular 24px/17px Source Sans Pro' }}>
                                    Rishab Shah
                                </p>
                                <p style={{ border: '2px solid white', height: '100', paddingTop: '14px', left: '10px', marginBottom: '0px', position: 'relative', color: '#6238F2' }}>
                                    Active
                                </p>
                            </div>
                            <div>
                                <button style={{ margin: '0 10px', background: 'white', border: '2px solid #F23838', color: '#F23838' }} className="btn">Import CSV</button>
                                <a
                                    href="/create-influancer"
                                    style={{ margin: '0 10px', background: 'white', border: '2px solid #6238F2', color: '#6238F2' }} className="btn">+ New Influencer
                            </a>
                            </div>
                        </div>
                    </TopBarBlock>
                    <div style={{ width: '85%', left: '6%', position: 'relative', marginTop: '5%', paddingLeft: '2px', paddingRight: '2px', height: '80vh', font: 'SemiBold 20px/17px Source Sans Pro', overflowY: 'scroll', scrollbarWidth: 'none' }}>
                        <div style={{ display: 'flex', fontSize: '0.8rem' }}>
                            <div style={{ opacity: '0.54', marginLeft: '3%' }}>
                                <strong>Updated by</strong> : Sabista 3-02-2019
                            </div>
                            <div style={{ opacity: '0.54', marginLeft: '3%' }}>
                                <strong>Added by</strong> :  Sabista 3-02-2019
                            </div>
                        </div>
                        <div style={{ borderRadius: '8px', position: 'relative', marginTop: '2%', paddingTop: '2%', boxShadow: '0px 0px 4px #00000038' }}>
                            <p style={{ background: '#FFFFFF 0% 0% no-repeat padding-box', fontSize: '1.3rem', marginLeft: '5%', opacity: '0.84' }}>
                                <strong>
                                    Influencer Details
                                </strong>
                            </p>
                            <div style={{ display: 'flex', width: '88%' }}>
                                <div style={{ position: 'relative', flex: '1.2', left: '6%', fontSize: '0.9rem' }}>
                                    <div style={{ position: 'relative', left: '1%' }}>
                                        <p style={{ opacity: '0.84', marginBottom: '0%' }}>
                                            influencer Name
                                    </p>
                                        <p style={{ opacity: '0.64', marginTop: '0%' }}>
                                            <strong>BYN - Be You Nick</strong>
                                        </p>
                                    </div>
                                    <div style={{ position: 'relative', left: '1%', marginTop: '6%' }}>
                                        <p style={{ opacity: '0.84', marginBottom: '0%' }}>
                                            Email
                                    </p>
                                        <p style={{ opacity: '0.64', marginTop: '0%' }}>
                                            <strong>byn@gmail.com</strong>
                                        </p>
                                    </div>
                                    <div style={{ position: 'relative', left: '1%', marginTop: '6%' }}>
                                        <p style={{ opacity: '0.84', marginBottom: '0%' }}>
                                            Contact 1
                                    </p>
                                        <p style={{ opacity: '0.64', marginTop: '0%' }}>
                                            <strong>9332456876</strong>
                                        </p>
                                    </div>
                                    <div style={{ position: 'relative', left: '1%', marginTop: '6%' }}>
                                        <p style={{ opacity: '0.84', marginBottom: '0%' }}>
                                            Vendor
                                    </p>
                                        <p style={{ opacity: '0.64', marginTop: '0%' }}>
                                            <strong>Amil ,Salim</strong>
                                        </p>
                                    </div>
                                    <div style={{ position: 'relative', left: '1%', marginTop: '6%' }}>
                                        <p style={{ opacity: '0.84', marginBottom: '0%' }}>
                                            Category
                                    </p>
                                        <p style={{ opacity: '0.64', marginTop: '0%' }}>
                                            <strong>Travel , Lifestyle</strong>
                                        </p>
                                    </div>
                                </div>
                                <div style={{ position: 'relative', flex: '1', left: '6%', fontSize: '0.9rem' }}>
                                    <div style={{ position: 'relative', left: '1%' }}>
                                        <p style={{ opacity: '0.84', marginBottom: '0%' }}>
                                            Gender
                                    </p>
                                        <p style={{ opacity: '0.64', marginTop: '0%' }}>
                                            <strong>Male</strong>
                                        </p>
                                    </div>
                                    <div style={{ position: 'relative', left: '1%', marginTop: '6%' }}>
                                        <p style={{ opacity: '0.84', marginBottom: '0%' }}>
                                            Location
                                    </p>
                                        <p style={{ opacity: '0.64', marginTop: '0%' }}>
                                            <strong>kormongla</strong>
                                        </p>
                                    </div>
                                    <div style={{ position: 'relative', left: '1%', marginTop: '6%' }}>
                                        <p style={{ opacity: '0.84', marginBottom: '0%' }}>
                                            Contact 2
                                    </p>
                                        <p style={{ opacity: '0.64', marginTop: '0%' }}>
                                            <strong>9332456876</strong>
                                        </p>
                                    </div>
                                    <div style={{ position: 'relative', left: '1%', marginTop: '6%' }}>
                                        <p style={{ opacity: '0.84', marginBottom: '0%' }}>
                                            Country
                                    </p>
                                        <p style={{ opacity: '0.64', marginTop: '0%' }}>
                                            <strong>India</strong>
                                        </p>
                                    </div>
                                    <div style={{ position: 'relative', left: '1%', marginTop: '6%' }}>
                                        <p style={{ opacity: '0.84', marginBottom: '0%' }}>
                                            Remarks
                                    </p>
                                        <p style={{ opacity: '0.64', marginTop: '0%' }}>
                                            <strong>N/A</strong>
                                        </p>
                                    </div>
                                </div>
                                <div style={{ position: 'relative', flex: '0.5', left: '6%', fontSize: '0.9rem' }}>
                                    <div style={{ position: 'relative', left: '1%' }}>
                                        <p style={{ opacity: '0.84', marginBottom: '0%' }}>
                                            Languages
                                    </p>
                                        <p style={{ opacity: '0.64', marginTop: '0%' }}>
                                            <strong>Hindi</strong>
                                        </p>
                                    </div>
                                    <div style={{ position: 'relative', left: '1%', marginTop: '6%' }}>
                                        <p style={{ opacity: '0.84', marginBottom: '0%' }}>
                                            Category
                                    </p>
                                        <p style={{ opacity: '0.64', marginTop: '0%' }}>
                                            <strong>CAT - A</strong>
                                        </p>
                                    </div>
                                    <div style={{ position: 'relative', left: '1%', marginTop: '6%' }}>
                                        <p style={{ opacity: '0.84', marginBottom: '0%' }}>
                                            Contact 3
                                    </p>
                                        <p style={{ opacity: '0.64', marginTop: '0%' }}>
                                            <strong>9332456876</strong>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div style={{ width: '88%', position: 'relative', left: '6%', marginTop: '2%' }}>
                                <Social_media type="Linkedin Detail" />
                            </div>
                            <div style={{ width: '88%', position: 'relative', left: '6%', marginTop: '2%' }}>
                                <Social_media type="Instagram Detail" />
                            </div>
                            <div style={{ width: '88%', position: 'relative', left: '6%', marginTop: '2%' }}>
                                <Social_media type="Blog Detail" />
                            </div>
                            <div style={{ width: '88%', position: 'relative', left: '6%', marginTop: '2%' }}>
                                <Social_media type="Twitter Detail" />
                            </div>
                            <div style={{ width: '88%', position: 'relative', left: '6%', marginTop: '2%' }}>
                                <Social_media type="Facebook Detail" />
                            </div>
                            <div style={{ width: '88%', position: 'relative', left: '6%', marginTop: '2%' }}>
                                <Social_media type="TikTok Detail" />
                            </div>
                        </div>
                        <div style={{ position: 'relative', top: '30px', marginBottom: '20%' }}>
                            <div>
                                <Previous_campaign />
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        );
    }
}

export default View_manage_influencer;