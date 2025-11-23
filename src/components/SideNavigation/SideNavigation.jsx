import React from 'react';
import s from './SideNavigation.module.css';
import { NavItem } from "@/components/Utils/NavItem.tsx";

const SideNavigation = () => {
    return (
        <nav>
            <div className={ s.item }>
                <NavItem to={ "/profile" } activeClass={ s.active }>Profile</NavItem>
            </div>
            <div className={ s.item }>
                <NavItem to={ "/messages" } activeClass={ s.active }>Messages</NavItem>
            </div>
            <div className={ s.item }>
                <NavItem to={ "/feed" } activeClass={ s.active }>Feed</NavItem>
            </div>
            <div className={ s.item }>
                <NavItem to={ "/news" } activeClass={ s.active }>News</NavItem>
            </div>
            <div className={ s.item }>
                <NavItem to={ "/users" } activeClass={ s.active }>Users</NavItem>
            </div>
            <div className={ s.item }>
                <NavItem to={ "/music" } activeClass={ s.active }>Music</NavItem>
            </div>
            <div className={ s.item }>
                <NavItem to={ "/settings" } activeClass={ s.active }>Settings</NavItem>
            </div>
        </nav>
    )
}

export default SideNavigation;