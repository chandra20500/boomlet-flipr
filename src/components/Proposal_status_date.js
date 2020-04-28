import React, { Component } from 'react';
class Proposal_date extends Component {
    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', paddingTop: '1%', paddingLeft: '3%', paddingRight: '3%', background: '#FFFFFF', borderRadius: '8px',boxShadow: '0px 0px 4px #0000001F' }}>
                <p style={{ fontSize: '1.1rem', }}>
                    Campaign Title
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ opacity: '0.64', width: '30%', fontSize: '0.9rem' }}>
                        <div style={{ display: 'flex' }}>
                            <p style={{ width: '50%' }}> Agency:</p> <p style={{ width: '50%' }}><strong>Boomlet</strong></p>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <p style={{ width: '50%' }}>Media Contact:</p> <p className="value_agency_status"><strong>Karan Khatri</strong></p>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <p style={{ width: '50%' }}>Email ID:</p> <p className="value_agency_status"><strong>Karan@boomlet.co</strong></p>
                        </div>

                        <div style={{ display: 'flex' }}>
                            <p style={{ width: '50%' }}> Phone no.:</p> <p className="value_agency_status"><strong>8945627315</strong></p>
                        </div>
                    </div>
                    <div style={{ opacity: '0.64', width: '30%', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', paddingLeft: '5%' }}>
                        <div style={{ display: 'flex' }}>
                            <p style={{ width: '50%', textAlign: 'left' }}> Client Name:</p> <p className="value_agency_status"><strong>KKO</strong></p>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <p style={{ width: '50%', textAlign: 'left' }}>Co-ordinator:</p> <p className="value_agency_status"><strong>lifestyle</strong></p>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <p style={{ width: '50%', textAlign: 'left' }}>Duration:</p> <p className="value_agency_status"><strong>You tube</strong></p>
                        </div>

                        <div style={{ display: 'flex' }}>
                            <p style={{ width: '50%', textAlign: 'left' }}> Campaign budget:</p> <p className="value_agency_status"><strong>1,20000</strong></p>
                        </div>
                    </div>
                </div>

                <div style={{ border: '1px solid #E2E2E2', position: 'relative', marginLeft: '-3%', marginRight: '-3%', left: '0%' }}></div>
                <div style={{ display: 'flex', opacity: '0.64', fontSize: '0.9rem', paddingTop: '10px' }}>
                    <p style={{ flex: 1 }}>
                        campaign date : <strong>26-2-2020</strong>
                    </p>
                    <p style={{ flex: 4 }}>
                        Proposal date : <strong>26-2-2020</strong>
                    </p>
                </div>
            </div>
        );
    }
}

export default Proposal_date;