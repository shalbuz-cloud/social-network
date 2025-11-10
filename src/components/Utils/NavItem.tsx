import { NavLink } from 'react-router-dom';
import React from "react";

export const NavItem = (
    { to, children, activeClass }: { to: string, children: React.ReactNode, activeClass: string }
) => (
    <NavLink to={ to } className={ ({ isActive }) => isActive ? activeClass : undefined }>
        { children }
    </NavLink>
)
