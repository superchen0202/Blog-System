import React, { memo } from 'react'
import { NavLink } from 'react-router-dom';

// --- Component ---
const NavBarItem: React.FC<PathMap> = (props) => {
    
    const { path, pageName } = props;

    return (
        <li>
            <NavLink to = {path}
                     className = { ({ isActive }) => isActive? "navbar-item navbar-item-active":"navbar-item" }>
                { pageName }
            </NavLink>
        </li>
    )
}

export default memo(NavBarItem);