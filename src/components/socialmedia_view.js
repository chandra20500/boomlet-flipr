import React, { Component } from 'react';
import verified from '../assets/icons/varified.svg';

class Social_media extends Component {
    render() {
        return (
            <div className="social_media_container" style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="header_social_media" style={{ display: 'flex' }}>
                    <p className="social_media_type" style={{ marginBottom: '0px', flex: '0.4', fontSize: '1.2rem', opacity: '0.84' }}>
                        <strong style={{ position: 'relative', top: '15%', transform: 'translateY(-50%)' }}>{this.props.type}</strong>
                    </p>
                    <p className="verification_status_social" style={{ marginBottom: '0px', display: 'flex', flex: '0.3', fontSize: '1.1rem', color: '#1877F2' }}>
                        <img src={verified} />
                        <p style={{ position: 'relative', left: '5%', top: '50%', transform: 'translateY(-50%)' }}>
                            Verified
                        </p>
                    </p>
                    <p className="active_status_social" style={{ marginBottom: '0px', flex: '1', color: '#14E699' }}>
                        <i class="fa fa-circle" aria-hidden="true" style={{ position: 'relative', float: 'left', top: '50%', transform: 'translateY(-50%)' }}></i>
                        <p style={{ position: 'relative', float: 'left', top: '50%', transform: 'translateY(-50%)', marginLeft: '2%' }}>
                            Active
                        </p>
                    </p>
                </div>
                <div style={{ border: '1px solid #D6D6D6' }}></div>
                <div className="body_social_media" style={{ display: 'flex', flexWrap: 'wrap', marginTop: '3%' }}>
                    <div className="flexbox_body_social_media" style={{ width: '44%', marginTop: '0px', fontSize: '0.9rem' }}>
                        <p style={{ opacity: '0.74', marginTop: '0px', marginBottom: '0px' }}>
                            Link
                        </p>
                        <p style={{ opacity: '0.74', marginTop: '0px' }}>
                            <strong>
                                https://youtube.com/BYN
                            </strong>
                        </p>
                    </div>
                    <div className="flexbox_body_social_media" style={{ width: '37%', marginTop: '0px', fontSize: '0.9rem' }}>
                        <p style={{ opacity: '0.74', marginTop: '0px', marginBottom: '0px' }}>
                            Connections
                        </p>
                        <p style={{ opacity: '0.74', marginTop: '0px' }}>
                            <strong>
                                12123
                            </strong>
                        </p>
                    </div>
                    <div className="flexbox_body_social_media" style={{ width: '15%', marginTop: '0px', fontSize: '0.9rem' }}>
                        <p style={{ opacity: '0.74', marginTop: '0px', marginBottom: '0px' }}>
                            Post Cost (in ₹)
                        </p>
                        <p style={{ opacity: '0.74', marginTop: '0px' }}>
                            <strong>
                                1200
                            </strong>
                        </p>
                    </div>
                    <div className="flexbox_body_social_media" style={{ width: '44%', marginTop: '0px', fontSize: '0.9rem' }}>
                        <p style={{ opacity: '0.74', marginTop: '0px', marginBottom: '0px' }}>
                            Video Cost (in ₹)
                        </p>
                        <p style={{ opacity: '0.74', marginTop: '0px' }}>
                            <strong>
                                1200
                            </strong>
                        </p>
                    </div>
                    <div className="flexbox_body_social_media" style={{ width: '30%', marginTop: '0px', fontSize: '0.9rem' }}>
                        <p style={{ opacity: '0.74', marginTop: '0px', marginBottom: '0px' }}>
                            story Cost (in ₹)
                        </p>
                        <p style={{ opacity: '0.74', marginTop: '0px' }}>
                            <strong>
                                1200
                            </strong>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Social_media;