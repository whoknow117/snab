import React from 'react';
import classes from './Availability.module.scss';



const Availability = () => {

    return (
        <div className={classes.availability}>
                    <h6 className={classes.title}>В наличии: </h6>
                    <span className={classes.num}>12шт</span>
                </div>
    )
}

export default Availability;