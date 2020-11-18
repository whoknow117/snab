import React from 'react';
import classes from './Rating.module.scss';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarHalfIcon from '@material-ui/icons/StarHalf';


const Rating = (props) => {

    return (

        <div className={classes.rating}>
            <StarBorderIcon />
            <StarBorderIcon />
            <StarBorderIcon />
            <StarBorderIcon />
            <StarBorderIcon  />
            {/* <input type='radio' name='health' value='1' aria-label="Ужасно"/>
            <input type='radio' name='health' value='2' aria-label="Сносно"/>
            <input type='radio' name='health' value='3' aria-label="Нормально"/>
            <input type='radio' name='health' value='4' aria-label="Хорошо" />
            <input type='radio' name='health' value='5' aria-label="Отлично" /> */}

        </div>




    )
}

export default Rating;