import React from 'react';
import classes from './CardContent.module.scss';
import BreadCrumbs from './BreadCrumbs/BreadCrumbs';
import GoodSlider from './GoodSlider/GoodSlider';
import Discription from './Discription/Discription';
import Title from './Title/Title';

import ServicesBar from './ServiceBar/ServiceBar';
import MiniDiscript from './MiniDiscript/MiniDiscript';
import Specifications from './Specifications/Specifications';


const CardContent = (props) => {

    return (

        <div className={classes.content}>


            <div className={classes.wrap}>

                <div className={classes.flexWrap}>
                    <div className={classes.top}>
                        <BreadCrumbs/>

                    </div>
                    <MiniDiscript/>
                    <div className={classes.wrapper}>
                        <Title name={props.name}/>

                    </div>
                    <div className={classes.flex}>

                        <GoodSlider img={props.img} images={props.images}/>
                    </div>
                </div>
                <div className={classes.discr}>
                    <Discription price={props.price}/>
                </div>


            </div>
            <Specifications spec={props.specifications}/>

        </div>


    )
}

export default CardContent;