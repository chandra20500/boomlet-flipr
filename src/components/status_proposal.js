import React, { Component } from 'react'
import Topbar_status from './proposal_status_topbar'
import Body_status from './proposal_status_body'

class Status_proposal extends Component {
    render() {
        return (
            <div className="main_container_status" style={{
                width: '90%', position: 'relative', left: '5%'
            }}>
                <Topbar_status />
                <Body_status />
            </ div>
        );
    }
}

export default Status_proposal;