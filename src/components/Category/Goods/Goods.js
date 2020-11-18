import React from 'react';
import classes from './Goods.module.scss';
 

const Goods = (props) => {

 

    return (

        <div className={classes.goods}>
            <div className={classes.image}>
                <img src={props.img}/>
            </div>
            <div className={classes.name}>
                {props.name}
            </div>
        </div>




    )
}

export default Goods;