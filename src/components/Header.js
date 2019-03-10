import React from 'react';
import { NavLink } from "react-router-dom";

const Header = (props) => (
    <div>
        <h1>{props.title}</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink> | <NavLink to="/grid" activeClassName="is-active">Grid</NavLink>
    </div>
);

Header.defaultProps = {
    title: 'Todo'
};

export default Header;