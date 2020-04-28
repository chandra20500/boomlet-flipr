import React, { Component } from 'react'

class Previous_campaign extends Component {
    render() {
        return (
            <div style={{ position: 'relative' }}>
                <p style={{ fontSize: '1.3rem', opacity: '0.84' }}>
                    <strong>Previous Campaigns</strong>
                </p>
                <div style={{ boxShadow: '0px 0px 4px #0000001F', borderRadius: '8px', background: '#FFFFFF 0% 0% no-repeat padding-box', paddingLeft: '4%', paddingTop: '2%', paddingRight: '4%', paddingBottom: '1%', display: 'flex', flexDirection: 'column' }}>
                    <p style={{ fontSize: '1.1rem', opacity: '0.64' }}>
                        <strong>Campaign Title</strong>
                    </p>
                    <div style={{ display: 'flex', fontSize: '0.8rem', opacity: '0.64' }}>
                        <div style={{ flex: '2' }}>
                            <p>
                                Campaign Type: &nbsp; <strong>lifestyle</strong>
                            </p>
                            <p >
                                Campaign Platform: &nbsp; <strong>You tube</strong>
                            </p>
                            <p >
                                Campaign Budget: &nbsp; <strong>1,200</strong>
                            </p>
                        </div>
                        <div style={{ flex: '1' }}>
                            <p align="right">
                                Deliverables : &nbsp; <strong>1YT video + 3 stories</strong>
                            </p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', borderTop: '2px solid #E2E2E2', alignItems: 'center', paddingTop: '8px' }}>
                        <p style={{ opacity: '0.64', fontSize: '0.8rem', flex: '0.8', position: 'relative', marginBottom: '0px' }}>
                            <strong>Campaign Date :</strong>&nbsp;13-9-2020
                    </p>
                        <p style={{ opacity: '0.64', fontSize: '0.8rem', flex: '2', marginBottom: '0px' }}>
                            <strong>Client :</strong>&nbsp; KKO
                    </p>
                        <button style={{ background: 'white', height: '25px', color: '#6238F2', border: '1px solid #6238F2', borderRadius: '4px', fontSize: '0.8rem' }}>View Detail</button>
                    </div>
                </div>
            </div >
        );
    }
}
export default Previous_campaign;