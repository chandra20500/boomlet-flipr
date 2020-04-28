import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './manage-influencer-body.css'
import insta from '../assets/icons/Instagram.svg';
import facebook from '../assets/icons/facebook.svg';
import yt from '../assets/icons/youtube.svg';
import tw from '../assets/icons/twitter.svg';
import lk from '../assets/icons/linkedin.svg';
import { Link } from 'react-router-dom';


class Manage_influencer_details extends Component {
    render() {
        return <div className="main">
            <label class="container" id="checkbox_influencer" style={{}}>
                <input type="checkbox" />
                <span class="checkmark"></span>
            </label>
            <div className="influencer">
                <div className="channel-img">
                    <img src={this.props.image} />
                    <p>
                        {this.props.type}
                    </p>
                </div>
                <div className="detail">
                    <div className="as">{this.props.name} </div>
                    <p> {this.props.phone} </p>
                    <p> {this.props.email} </p>
                    <button className="b1"> travel </button>
                    <button className="b1"> sports </button>
                    <button className="b1" id="sqb"> travel </button>
                </div>
                <div className="social">
                    <div className="test">
                        <img src={insta} />
                        <p>{this.props.instagram_follower}</p>
                    </div>
                    <div className="test">
                        <img src={facebook} />
                        <p>{this.props.facebook_follower}</p>
                    </div>
                    <div className="test">
                        <img src={lk} />
                        <p>{this.props.linkedin_follower}</p>
                    </div>
                    <div className="test">
                        <img src={tw} />
                        <p>{this.props.twitter_follower}</p>
                    </div>
                    <div className="test">
                        <img src={yt} />
                        <p>{this.props.youtube_follower}</p>
                    </div>
                </div>
            </div>
            <div className="edit_options">
                <div className="influencer-origin">
                    <strong>Updated by</strong> : {this.props.updated_by}
                &nbsp;&nbsp;
                    <strong>Added by</strong>: {this.props.added_by}
                </div>
                <div className="influencer-options_influencer">
                    <button className="delete_influencer"> delete </button>
                    <button className="edit_influencer"> edit </button>
                    <button className="view_influencer" id="view">
                        <Link to="/manage-influencer-view">
                            View
                        </Link>
                    </button>
                </div>

            </div>
        </div>
    }
}

export default Manage_influencer_details;