import React from 'react';
import classes from './BuyItem.module.scss';
import Basket from '../../../../../icons/Basket/Basket';

const BuyItem = () => {

    return (
        <div className={classes.buyItem}>
        <div className={classes.buy}>

            <button >
                <div className={classes.basketWrap}>
                    <Basket /></div></button>
        </div>

    </div>
    )
}

export default BuyItem;
