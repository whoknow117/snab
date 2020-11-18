import React from 'react';
import classes from './MiniDiscript.module.scss';
import Rating from '../Discription/Rating/Rating';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const MiniDiscript = (props) => {


    return (
        
        <div className={classes.miniDiscript}>
                <div className={classes.articl}><span>Код товара:</span>  1234614</div>
                <div className={classes.comercial}>Хит</div>
                <div className={classes.rating}>
                    <Rating />
                </div>
                <div className={classes.favor}>
                    <FavoriteBorderIcon />
                </div>
        </div>
    )
}

export default MiniDiscript;