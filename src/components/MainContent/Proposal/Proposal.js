import React from 'react';
import classes from './Proposal.module.scss';

 


const Proposal = () => {
   
 


    return (
        <div className={classes.proposal}>
             <ul className={classes.menu}>
                 <li className={classes.menu__item}>Подборки товаров</li>
                 <li className={classes.menu__item}>Новинки</li>
                 <li className={classes.menu__item}>Суперцена</li>
             </ul>
        </div>
    )
}

export default Proposal;