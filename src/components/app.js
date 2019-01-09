import React, { Component } from 'react';

import Header from './Header/header';
import Menu from './Menu/menu';
import ChatSummaryWidget from './Chat-summary-widget/chat-summary-widget';


import './app.scss';

export default class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <Menu />
        <ChatSummaryWidget />
      </div>
    );
  }
}
