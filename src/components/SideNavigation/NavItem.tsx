import { NavLink } from 'react-router-dom';
import s from "./SideNavigation.module.css"
import React from "react";

export const NavItem = ({ to, children }: { to: string, children: React.ReactNode }) => (
    <NavLink to={ to } className={ ({ isActive }) => isActive ? s.active : undefined }>
        { children }
    </NavLink>
)
