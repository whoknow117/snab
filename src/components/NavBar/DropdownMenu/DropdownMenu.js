import React from 'react';
import classes from './DropdownMenu.module.scss';
import { NavLink } from 'react-router-dom';
import { Route } from 'react-router-dom';
import SettingsIcon from '@material-ui/icons/Settings';

const DropdownMenu = (props) => {

 

    return (

             <div  className={classes.dropdownMenu}>
                 <div className={classes.headerWrap}>
                     <NavLink to='/tovar/123421' className={classes.head}>{props.head}</NavLink>
                      
                 
                 </div>
                 <div className={classes.item}>{props.item1}</div>
                 <div className={classes.item}>{props.item2}</div>
                 <div className={classes.item}>{props.item3}</div>
                 <div className={classes.item}>{props.item4}</div>
                 <div  className={classes.item}>{props.item5}</div>
                 <div  className={classes.item}>{props.item6}</div>
                 <div className={classes.item}>{props.item7}</div>
                 </div>
            
            
     
    )
}

export default DropdownMenu;