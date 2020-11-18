import React from 'react';
import classes from './GoodCard.module.scss';
import CardContent from './CardContent/CardContent'; 
 
const GoodCard = (props) => {

    return (

             <div className={classes.goodWrap}>
                 <CardContent specifications={props.specifications} state={props.state} images={props.images} name={props.name} price={props.price} img={props.img} />
                 
             </div>
            
            
     
    )
}

export default GoodCard;