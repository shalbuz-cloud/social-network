import React from "react";

const SideNavigation = () => {
    return (
        <nav>
            <div className='menu-link'><a href="/profile">Profile</a></div>
            <div className='menu-link'><a href="/messages">Messages</a></div>
            <div className='menu-link'><a href="/news">News</a></div>
            <div className='menu-link'><a href="/music">Music</a></div>
            <div className='menu-link'><a href="/settings">Settings</a></div>
        </nav>
    )
}

export default SideNavigation;