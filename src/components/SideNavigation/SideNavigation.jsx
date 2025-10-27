import React from 'react';
import cl from './SideNavigation.module.css';

const SideNavigation = () => {
    return (
        <nav>
            <div className={ cl.item }><a href="/profile">Profile</a></div>
            <div className={ cl.item }><a href="/messages">Messages</a></div>
            <div className={ cl.item }><a href="/feed">Feed</a></div>
            <div className={ cl.item }><a href="/news">News</a></div>
            <div className={ cl.item }><a href="/music">Music</a></div>
            <div className={ cl.item }><a href="/settings">Settings</a></div>
        </nav>
    )
}

export default SideNavigation;