import React, { Component } from 'react';

import MenuCard from '../Menu-card/menu-card';

import './menu.scss';

export default class Menu extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-4">
                        <MenuCard icon="fas fa-comment-alt" title="Messages"  selected={true}/>
                    </div>
                    <div className="col-4">
                        <MenuCard icon="fas fa-user-friends" title="Contacts" selected={false} />
                    </div>
                    <div className="col-4">
                        <MenuCard icon="fas fa-user" title="Profile" selected={false} />
                </div>
            </div>
        );
    }

}