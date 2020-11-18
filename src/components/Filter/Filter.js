import React from 'react';
import classes from './Filter.module.scss';







const Filter = () => {

    return (
        <div className={classes.filter}>
            <div className={classes.title}>
                <h4>Фильтр</h4>
            </div>
            <div className={classes.price}>
                <div className={classes.title}>Цена</div>
                <div></div>
            </div>
        </div>

    )
}

export default Filter;