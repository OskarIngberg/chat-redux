import React, { Component } from 'react';

import ChatSummaryCard from '../Chat-summary-card/chat-summary-card';

import './chat-summary-widget.scss';

export default class ChatSummaryWidget extends Component {
    render() {
        return (
            <div className="mt-4">
                <ChatSummaryCard unread="2" name="Anders Andersson" latestMessage="Hey, How are you?" latestTime="9:00"/>
                <ChatSummaryCard unread="0" name="Göran Göransson" latestMessage="¿Hola, qué tal?" latestTime="13:43"/>
            </div>
        );
    }
}