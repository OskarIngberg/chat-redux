import React, { Component } from 'react';

import './chat-summary-card.scss';

export default class ChatSummaryCard extends Component {
    render() {
        let unread;
        if (this.props.unread > 0) {
            unread = <span className="unread">{this.props.unread}</span>
        }

        return (
            <div className="row">
                <div className="col-12">
                    <div className="message-card">
                        <div className="row">
                            <div className="col-3">
                                <div className="icon">
                                    <span className="online active"></span>
                                    <i className="fas fa-user-circle"></i>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="row content">
                                    <div className="col-2">
                                         { unread }
                                    </div>
                                    <div className="col-10">
                                        <div className="latest-message">
                                            <h4>{this.props.name}</h4>
                                            <p>{this.props.latestMessage}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="time">
                                    {this.props.latestTime}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}