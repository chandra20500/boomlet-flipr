import React, { Component } from 'react';
import menuLogo from '../assets/images/menu_logo.png';

import dashboardIcon from '../assets/icons/dashboard.svg';
import promotionIcon from '../assets/icons/promotion.svg';
import influencerIcon from '../assets/icons/Influencer.svg';
import Link from 'react-router-dom';

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="side_nav" style={{ background: 'white', height: '100vh', position: 'relative', left: '0px' }}>
                <img alt="Boomlet" src={menuLogo} />
                <div className="side_menu">
                    <a href="./create-campaign" className="menu_item">
                        <img className="menu_icon" alt="" src={dashboardIcon} />
                        <span>OVERVIEW</span>
                    </a>
                    <a href="./manage-proposal" className="menu_item">
                        <img className="menu_icon" alt="" src={promotionIcon} />
                        <span>CAMPAIGN</span>
                    </a>
                    <a href="./manage-influencer" className="menu_item">
                        <img className="menu_icon" alt="" src={influencerIcon} />
                        <span>INFLUENCER</span>
                    </a>

                </div>
            </div >
        );
    }
}

export default Sidebar;
