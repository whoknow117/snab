import React from 'react';
import classes from './Specifications.module.scss';



const Specifications = (props) => {

    return (
        <div className={classes.specifications}>
            <h2>Основные характеристики</h2>
            <p className={classes.specificationsItem}>
                     {props.spec}
            </p>
        </div>
    )
}

export default Specifications;