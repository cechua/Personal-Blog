import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBarMenuLink(props:any) {
    return(
        <NavLink exact to={props.linkto} activeClassName="active" className="navbarmenu">
        {props.text}
        </NavLink>
    )
}