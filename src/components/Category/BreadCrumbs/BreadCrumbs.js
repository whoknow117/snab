import React from 'react';
import classes from './BreadCrumbs.module.scss';
 

const BreadCrumbs = (props) => {

    return (

       
            <ul className={classes.breadCrumbs}>
                
                <li><a>Снабженец <span >/</span></a></li>
                <li><a>Каталог <span >/</span></a></li>
                <li><a>Электрика
 </a></li>
            </ul>
             
   
            
     
    )
}

export default BreadCrumbs;