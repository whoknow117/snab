import React from 'react';
import classes from './HeaderLogo.module.scss';
import Logo from '../../../../icons/Logo/Logo';
import Screwdriver from '../../../../icons/Screwdriver/Screwdriver';
import { NavLink } from 'react-router-dom';

const HeaderLogo = () => {

    return (
        <NavLink to='/pop' className={classes.headerLogo}>
           <div className={classes.headerLogo__icon}>
                
               <Logo />
               
           </div>
           <h3 className={classes.headerLogo__text}>НАБЖЕНЕЦ</h3>
        </NavLink>
    )
}

export default HeaderLogo;