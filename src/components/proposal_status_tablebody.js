import React, { Component } from 'react';
class T_body extends Component {
    render() {
        return (
            <tr>
                <td>
                    {this.props.name}
                </td>
                <td>
                    {/* {this.props.subscribers} */}
                    15.7M
                </td>
                <td>
                    Hindi
                </td>
                <td>
                    300K
                </td>
                <td>292340
                </td>
                <td>
                    {/* {this.props.engagment} */}
                    0.06
                </td>
                <td>
                    {/* {this.props.followers} */}
                    12000
                </td>
                <td>1 YT video
                </td>
                <td>
                    {/* {this.props.packaged} */}
                    150000 RS
                </td>
                <td className={this.props.color}>
                    {this.props.action}
                </td>
            </tr>
        )
    }
}

export default T_body;