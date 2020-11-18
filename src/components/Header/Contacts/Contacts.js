import React from 'react';
import classes from './Contacts.module.scss';
import ScheduleIcon from '@material-ui/icons/Schedule';
import className from 'classnames';

const Contacts = (props) => {

    return (
        <div className={classes.contacts}>
            <div className={classes.contactsWrap}>
                <div className={classes.city}>г.Северодонецк</div>
                <div className={classes.phone}>+3 (099) 323-77-77</div>
            </div>
  
            <div className={classes.wrap}>
            <ul className={classes.headerNav}>
                <li className={className(classes.headerNavItem)}>акции</li>
                <li className={className(classes.headerNavItem)}>информация</li>
                <li className={className(classes.headerNavItem)}>доставка</li>
                <li className={className(classes.headerNavItem)}>пункты самовывоза</li>
                <li className={className(classes.headerNavItem)}>обратная связь</li>
            </ul>
            </div>
       
             

        </div>
         
    )
}

export default Contacts;