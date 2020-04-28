import React, { Components, Component } from 'react'
import { Link } from 'react-router-dom'

class Manage_proposal_body extends Component {
    render() {
        return (
            <div style={{ fontFamily: 'Source Sans Pro', background: '#FEFEFF', width: '90%', left: '5%', position: 'relative', paddingBottom: '2%' }}>
                <div style={{ font: 'Regular 24px/17px Source Sans Pro', background: '#FFFFFF 0% 0% no-repeat padding-box', boxShadow: '0px 0px 4px #0000001F' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', fontSize: '0.8rem', paddingTop: '10px' }}>
                        <div style={{ flex: '3', left: '2%', position: 'relative' }}>
                            <p style={{ color: '#000000', opacity: '0.74', fontSize: '1rem' }}>
                                <strong>Campaign Title</strong>
                            </p>
                            <p style={{ color: '#000000', opacity: '0.54' }}>
                                campaign Type : <strong>Lifestyle</strong>
                            </p>
                            <p style={{ color: '#000000', opacity: '0.54' }}>
                                Campiagn platform : <strong>You Tube</strong>
                            </p>
                        </div>
                        <div style={{ right: '2%', position: 'relative' }}>
                            <p className="Deliverables" style={{ color: '#000000', opacity: '0.54', width: '100%', textAlign: 'right' }}>
                                Deliverables :
                            </p>
                            <p style={{ color: '#000000', opacity: '0.54' }}>
                                <strong>1 YT + 3 Stories</strong>
                            </p>
                        </div>
                    </div>
                    <hr style={{ color: '#E2E2E2', marginTop: '5px', marginBottom: '0px', opacity: '0.5' }}></hr>
                    <div style={{ position: 'relative', color: '#000000', paddingRight: '15px', opacity: '0.54', display: 'flex', fontSize: '0.8rem' }}>
                        <div style={{ flex: '12', paddingLeft: '2%', display: 'flex' }}>
                            <p style={{ fontSize: '0.7rem', padding: '2px', marginBottom: '4px', marginTop: '4px' }}>
                                <strong>Client Name</strong> : KKO
                            </p>
                            <p style={{ position: 'relative', padding: '2px', fontSize: '0.7rem', left: '2%', marginBottom: '4px', marginTop: '4px' }}>
                                Approved date : 29-02-2020
                            </p>
                        </div>
                        <div style={{ flex: '1' }}>
                            <p style={{ position: 'relative', align: 'right', marginTop: '5px', marginBottom: '4px', marginTop: '4px' }}>
                                <Link to="/status-manage-proposal">
                                    <button style={{ color: 'rgb(68, 11, 255)', font: 'Regular 16px/19px Roboto', opacity: 1, background: 'white', border: '2px solid #6238F2', width: '69px', height: '25px', borderRadius: '3px', fontSize: '0.7rem', paddingLeft: '0px', paddingRight: '0px' }}>
                                        View Detail
                                    </button>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}
export default Manage_proposal_body;