import React, { Component } from 'react';
import backIcon from '../assets/icons/back-arrow.svg';

class TopBarBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showBack: true
        };
        if (this.props.showBack !== undefined) {
            this.state.showBack = this.props.showBack;
        }
    }

    goBack() {
        this.props.history.goBack();
    }

    render() {

        return (
            <div className="top_bar" id={this.props.paddingbottom}>
                {
                    this.state.showBack &&
                    <img style={{ width: '25px', margin: '0 10px' }} onClick={() => this.goBack()}
                        className="back_arrow top_bar_icon" id={this.props.backbutton} alt="" src={backIcon} />
                }
                <div className="top_bar_right_block">
                    {this.props.children}
                </div>

            </div>
        );
    }
}

export default TopBarBlock;
