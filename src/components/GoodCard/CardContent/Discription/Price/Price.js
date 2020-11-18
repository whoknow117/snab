import React from 'react';
import classes from './Price.module.scss';



const Price = (props) => {


    return (
        <div className={classes.top}>
        <h3 className={classes.price}>{props.price}</h3>

    </div>
    )
}



export default Price;