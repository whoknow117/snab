import React from 'react';
import classes from './HeaderIcon.module.scss';
import { NavLink } from 'react-router-dom';

const HeaderIcon = (props) => {

    return (
        <NavLink to={props.path} className={classes.headerIcons}>
            <div className={classes.wrap}>
                {props.icon} 
            </div>
        </NavLink>

    )
}

export default HeaderIcon;