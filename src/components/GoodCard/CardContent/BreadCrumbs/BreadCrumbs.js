import React from 'react';
import classes from './BreadCrumbs.module.scss';
 

const BreadCrumbs = (props) => {

    return (

       
            <ul className={classes.breadCrumbs}>
                <li><a>Главная  </a></li>
                <li><a>Электроинструмент  </a></li>
                <li><a>Шуруповерт </a></li>
                <li><a>Аккумуляторный шуруповерт MAKITA DF 330 D
 </a></li>
            </ul>
             
   
            
     
    )
}

export default BreadCrumbs;