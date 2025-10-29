import React from 'react';
import s from './SideNavigation.module.css';
import { NavItem } from "@/components/SideNavigation/NavItem.js";

const SideNavigation = () => {
    return (
        <nav>
            <div className={ s.item }>
                <NavItem to={"/profile"}>Profile</NavItem>
            </div>
            <div className={ s.item }>
                <NavItem to={"/messages"}>Messages</NavItem>
            </div>
            <div className={ s.item }>
                <NavItem to={"/feed"}>Feed</NavItem>
            </div>
            <div className={ s.item }>
                <NavItem to={"/news"}>News</NavItem>
            </div>
            <div className={ s.item }>
                <NavItem to={"/music"}>Music</NavItem>
            </div>
            <div className={ s.item }>
                <NavItem to={"/settings"}>Settings</NavItem>
            </div>
        </nav>
    )
}

export default SideNavigation;