import React, { Component } from 'react';

import './menu-card.scss';

export default class MenuCard extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-12">
                    <div className="menu-card">
                        <div className={this.props.selected ? 'content selected' : 'content'}>
                            <i className={ this.props.icon }></i>
                            <p className="text-center">{ this.props.title }</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};