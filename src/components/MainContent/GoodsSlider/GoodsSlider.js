import React from 'react';
import classes from './GoodsSlider.module.scss';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import PlaceIcon from '@material-ui/icons/Place';
import Rating from '../../GoodCard/CardContent/Discription/Rating/Rating';
import { NavLink } from 'react-router-dom';










const GoodsSlider = (props) => {




    return (
        <div className={classes.goodsSlider}>

            
            <div className={classes.goodsSlider__title}>
                Специально для вас
            </div>
            <div className={classes.wrap}>
            {props.tovary.map( el => {
                return(
                    <NavLink to={el.path} className={classes.goodsSliderItem}>

                    <div>
                        <div className={classes.sticker}>Хит</div>
                        <div className={classes.image}>
                            <img src={el.img}/>
                        </div>

                        <div className={classes.name}>{el.name}
 </div>
                        <Rating />
                        <div className={classes.price}>
                            {el.price}
 </div>
                    </div>
                    <button className={classes.btn}>В корзину</button>
                </NavLink>
                )
            })}

       

            </div>


        </div>
    )
}

export default GoodsSlider;