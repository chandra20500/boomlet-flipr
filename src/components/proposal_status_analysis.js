import React, { Component } from 'react';
import logo_analsis from '../assets/icons/pie-chart.svg';
import PieChart from 'react-minimal-pie-chart';

const margin = { top: 20, right: 20, bottom: 30, left: 40 };

const data = [
    { text: 'Man', value: 500, width: 100 },
    { text: 'Woman', value: 300, width: 100 }
];

class Analysis_stats extends Component {
    render() {
        return (
            <div style={{ background: '#FFFFFF 0% 0% no-repeat padding-box', boxShadow: '0px 3px 6px #0000002B' }}>
                <div style={{ marginTop: '2%', marginLeft: '3%', marginRight: '3%', display: 'flex' }}>
                    <div style={{ display: 'flex', flex: 1, overflowY: 'none' }}>
                        <img src={logo_analsis} />
                        <p style={{ marginBottom: '0px', alignSelf: 'center', fontWeight: '600', color: '#262626', position: 'relative', left: '5%' }}>
                            Bhuvan Bam
                        </p>
                    </div>
                    <div style={{ flex: 1, color: '#1492E6', letterSpacing: '0.45px', alignSelf: 'center', fontWeight: '600', display: 'flex', justifyContent: 'center' }}>
                        15.6M Subscribers
                    </div>
                    <div style={{ flex: 1, letterSpacing: '0.34px', fontWeight: '600', alignSelf: 'center', color: '#1492E6', display: 'flex', flexDirection: 'row-reverse' }}>
                        https://www.youtube.com/bbkivines
                    </div>
                </div>
                <div style={{ display: 'flex', paddingRight: '3%', paddingLeft: '3%', marginTop: '3%' }}>
                    <div style={{ flex: '1', paddingLeft: '6%' }}>
                        <p style={{ fontWeight: '600', fontSize: '1.3rem', marginBottom: '0px' }}>
                            1.3K
                        </p>
                        <p style={{ marginTop: '0px', letterSpacing: '0px', textAlign: 'left', color: '#000000', opacity: '0.81', fontSize: '0.9rem' }}>
                            Avg. Likes
                        </p>
                    </div>
                    <div style={{ flex: '1', paddingLeft: '6%' }}>
                        <p style={{ fontWeight: '600', fontSize: '1.3rem', marginBottom: '0px' }}>
                            44.59K
                        </p>
                        <p style={{ marginTop: '0px', letterSpacing: '0px', textAlign: 'left', color: '#000000', opacity: '0.81', fontSize: '0.9rem' }}>
                            Avg. comments
                        </p>
                    </div>
                    <div style={{ flex: '1', paddingLeft: '6%' }}>
                        <p style={{ fontWeight: '600', fontSize: '1.3rem', marginBottom: '0px' }}>
                            ₹25,449
                        </p>
                        <p style={{ marginTop: '0px', letterSpacing: '0px', textAlign: 'left', color: '#000000', opacity: '0.81', fontSize: '0.9rem' }}>
                            CPE
                        </p>
                    </div>
                    <div style={{ flex: '1', paddingLeft: '6%' }}>
                        <p style={{ fontWeight: '600', fontSize: '1.3rem', marginBottom: '0px' }}>
                            ₹25,443
                        </p>
                        <p style={{ marginTop: '0px', letterSpacing: '0px', textAlign: 'left', color: '#000000', opacity: '0.81', fontSize: '0.9rem' }}>
                            Avg. Likes
                        </p>
                    </div>
                    <div style={{ flex: '1', paddingLeft: '6%' }}>
                        <p style={{ fontWeight: '600', fontSize: '1.3rem', marginBottom: '0px' }}>
                            2.03%
                        </p>
                        <p style={{ marginTop: '0px', letterSpacing: '0px', textAlign: 'left', color: '#000000', opacity: '0.81', fontSize: '0.9rem' }}>
                            Avg Engagment rate
                        </p>
                    </div>
                </div>
                <div style={{ display: 'flex', paddingLeft: '3%' }}>
                    {/* <div style={{ border: '2px solid black', flex: '1', display: 'flex', flexDirection: 'column' }}>
                        <p style={{ opacity: '1', color: '#78909C', alignSelf: 'center' }}>
                            Social Media Distribution
                        </p>
                        <div style={{ color: '#78909C', alignSelf: 'center' }}>
                            <PieChart
                                cx={50}
                                cy={50}
                                data={[
                                    {
                                        color: '#1DA1F2',
                                        title: 'One',
                                        value: 10
                                    },
                                    {
                                        color: '#FF0000',
                                        title: 'Two',
                                        value: 15
                                    },
                                    {
                                        color: '#1877F2',
                                        title: 'Three',
                                        value: 20
                                    },
                                    {
                                        color: '#FFFC00',
                                        title: 'Three',
                                        value: 20
                                    }
                                ]}
                                label={false}
                                labelPosition={50}
                                lengthAngle={360}
                                lineWidth={40}
                                paddingAngle={0}
                                radius={50}
                                rounded={false}
                                startAngle={0}
                            />
                        </div>
                    </div>
                    <div style={{ flex: '1', display: 'flex', border: '2px solid black', flexDirection: 'column', }}>
                        <p>
                            Gender Distribution
                        </p>
                        <div>
                        </div>
                    </div>
                    <div style={{ flex: '1', alignSelf: 'center', border: '2px solid black' }}>
                        <p>
                            Age Distribution
                        </p>
                    </div> */}
                </div>
            </div>
        );
    }
}

export default Analysis_stats;