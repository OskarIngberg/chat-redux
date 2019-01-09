import React, { Component } from 'react';

import './header.scss';

export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="row">
                    <div className="col-12">
                        <h1 className="titel text-center text-uppercase">Chatt app</h1>
                    </div>
                </div>
            </header>
        );
    }
};