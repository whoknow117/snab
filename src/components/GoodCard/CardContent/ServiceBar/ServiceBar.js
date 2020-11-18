import React from 'react';
import classes from './ServiceBar.module.scss';
 


const ServicesBar = () => {

    return (

        <div className={classes.serviceBar}>
            <div className={classes.serviceBar__item}>
                <div className={classes.serviceBar__image}>
                    <img src='https://storage.googleapis.com/multi-static-content/previews/artage-io-thumb-4c339be66cae21b3defe0c89e5ac0b1c.png' />
                </div>
                <h5 className={classes.title}>
                    Быстрая доставка
                </h5>
            </div>
            <div className={classes.serviceBar__item}>
                <div className={classes.serviceBar__image}>
                    <img src='https://littlepump.ru/images/pic/oplata.jpg' />
                </div>
                <h5 className={classes.title}>
                    Удобная оплата
                </h5>
            </div>
            {/* <div className={classes.serviceBar__item}>
                <div className={classes.serviceBar__image}>
                    <img src='https://hyperpc.ru/images/company/promo/hpc-sale-gift-banner.jpg' />
                </div>
                <h5 className={classes.title}>
                    Акции
                </h5>
            </div> */}
        </div>
            
            
     
    )
}

export default ServicesBar;