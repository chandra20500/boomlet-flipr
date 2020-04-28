import React, { Component } from 'react';
import menuLogo from '../assets/images/menu_logo.png';


class Topbar_status extends Component {
    render() {
        return (
            <div className="topbar_status" style={{ boxShadow: '0px 3px 12px #0000000A', paddingBottom: '10px' }}>
                <img src={menuLogo} height="25px" style={{ position: 'relative', left: '5%', marginTop: '2%' }} />
                <div className="buttons_status" style={{ display: 'flex', width: '84%', marginTop: '15px', position: 'relative', left: '8%' }}>
                    <div className="buttons_status_text" style={{ opacity: '0.74', flex: '3', marginBottom: '0px' }}>
                        <p style={{ position: 'relative', top: '50%', transform: 'translateY(-50%)' }}>
                            <strong>Proposal Status</strong> : Ongoing
                        </p>
                    </div>
                    <p className="resend_proposal" style={{ flex: '1', display: 'flex', flexDirection: 'row-reverse', marginBottom: '0px' }}>
                        <button style={{ background: '#6238F2', color: 'white', border: 'none', height: '32px', position: 'relative', right: '0px', borderRadius: '6px', top: '50%', transform: 'translateY(-50%)' }}>
                            Resend Proposal
                        </button>
                    </p>
                    <p className="Make_live" style={{ flex: '0.5', float: 'right', display: 'flex', display: 'flex', flexDirection: 'row-reverse', marginBottom: '0px' }}>
                        <button style={{ background: '#6238F2', color: 'white', border: 'none', height: '32px', position: 'relative', right: '0px', borderRadius: '6px' }}>
                            Make Live
                        </button>
                    </p>
                </div>
            </div>
        );
    }
}

export default Topbar_status;