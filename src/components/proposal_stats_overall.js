import React, { Component } from 'react'

class Overall_stats extends Component {
    render() {
        return (
            <div style={{ display: 'flex' }}>
                <div style={{ display: 'flex', flex: '5', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                    <div style={{ background: '#F06363', color: 'white', borderRadius: '12px', width: '30%', height: '150px', paddingLeft: '4%', paddingTop: '4%', marginLeft: '3%', marginBottom: '3%' }}>
                        <p style={{ fontSize: '1.5rem', marginBottom: '10px', fontWeight: '', opacity: '0.84' }}>
                            1
                        </p>
                        <p style={{ fontSize: '1rem', opacity: '0.74' }}>
                            INFLUENCER SELECTED
                        </p>
                    </div>
                    <div style={{ background: '#1DA1F2', color: 'white', borderRadius: '12px', width: '30%', height: '150px', paddingLeft: '3%', paddingTop: '3%', marginLeft: '3%', marginBottom: '3%' }}>
                        <p style={{ fontSize: '1.5rem', marginBottom: '10px', opacity: '0.84' }}>
                            5.7M
                        </p>
                        <p>
                            Social Reach
                        </p>
                    </div>
                    <div style={{ background: '#2FC996', color: 'white', borderRadius: '12px', width: '30%', height: '150px', paddingLeft: '3%', paddingTop: '3%', marginLeft: '3%', marginBottom: '3%' }}>
                        <p style={{ fontSize: '1.5rem', opacity: '0.84', marginBottom: '10px' }}>
                            35K
                        </p>
                        <p>
                            Estimated Managment
                        </p>
                    </div>
                    <div style={{ background: '#D342D9', color: 'white', borderRadius: '12px', width: '30%', height: '150px', paddingLeft: '3%', paddingTop: '3%', marginLeft: '3%', marginBottom: '3%' }}>
                        <p style={{ fontSize: '1.5rem', marginBottom: '10px', opacity: '0.84' }}>
                            ₹1.8K
                        </p>
                        <p>
                            Estimated Budget
                        </p>
                        <p>
                            Avg. Estimated price
                            $894
                        </p>
                    </div>
                </div>
                <div style={{ flex: '1', paddingLeft: '10%' }}>
                    <p style={{ fontSize: '2rem' }}>
                        <i style={{ color: '#6238F2' }} class="fa fa-mars" aria-hidden="true"></i><strong style={{ position: 'relative', left: '10%', color: '#78909C' }}>77%</strong>
                    </p>
                    <p style={{ fontSize: '2rem' }}>
                        <i style={{ color: '#f584ff' }} class="fa fa-venus" aria-hidden="true"></i><strong style={{ position: 'relative', left: '10%', color: '#78909C' }}>33%</strong>
                    </p>
                </div>
            </div>
        );
    }
}

export default Overall_stats;