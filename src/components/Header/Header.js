import React from 'react';
import classes from './Header.module.scss';

import Search from './Search/Search';
import HeaderIcon from './HeaderIcon/HeaderIcon';
import Contacts from './Contacts/Contacts'; 
 


const Header = (props) => {

    return (
        <header className={classes.header}>
                 <div className={classes.headerNav}>

                     <div className={classes.contacts}>
                         <Contacts />
                     </div>
                     
                 </div>
                 <div className={classes.search}>
                     <Search />
                     <div className={classes.headerIcons}>
                         {props.icons.map((el, id) => id > 0 ?<HeaderIcon icon={el.icon} path={el.path} icon={el.icon} txt={el.txt}/> : false)}
                     </div>
                 </div>
            


            

        </header>
         
    )
}

export default Header;