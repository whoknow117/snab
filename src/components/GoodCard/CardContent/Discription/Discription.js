import React from 'react';
import classes from './Discription.module.scss';
import CallIcon from '@material-ui/icons/Call';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Rating from './Rating/Rating';
import Price from './Price/Price';
import Availability from './Availability/Availability';
import BuyItem from './BuyItem/BuyItem';

const Discription = (props) => {



    return (

        <div className={classes.discription}>

            <Price price={props.price} />
            <div className={classes.btnWrap}>         
                <BuyItem />
                <Availability />
            </div>
            <div className={classes.deliver}>
                <div className={classes.deliverItem}>Доставка по городу: <span>завтра \ 150грн</span>  </div>
                <div className={classes.deliverItem}>Доставка за город:<span> цена индивидуальна</span> </div>
                <div className={classes.deliverItem}></div>
            </div>
        </div>




    )
}

export default Discription;