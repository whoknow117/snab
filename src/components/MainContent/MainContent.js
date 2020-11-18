import React from 'react';
import classes from './MainContent.module.scss';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';

import Proposal from './Proposal/Proposal';
import GoodsSlider from './GoodsSlider/GoodsSlider';
import GoodsSlider2 from './GoodsSlider2/GoodsSlider2';
import Slideshow from './Slideshow/Slideshow'; 



   
 



const MainContent = (props) => {
    let box = React.createRef();
 


    return (
        <div className={classes.mainContent}>
             
            <div className={classes.sliderMain}>
            <Slideshow images={props.state.mainSlider}/>         
            </div>
            <div className={classes.info}>
                <div className={classes.info__item}>
                <div className={classes.itemImg}>
                <img src=" https://www.motortrend.com/uploads/sites/10/2015/11/2014-mercedes-benz-sprinter-passenger-van-angular-front.png?fit=around%7C875:492.1875" />
                </div>
                
                    <div className={classes.txt}>
                    <span className={classes.text}>Быстрая доставка по всей области</span>
                    <span className={classes.linkSpan}>Читать подробнее</span>
                           </div>
                </div>
                <div className={classes.info__item}>
                <div className={classes.itemImg}>
                <img src="https://clipart-db.ru/file_content/rastr/alarm-clock_007.png" />
                </div>
                    <div className={classes.txt}>
                    <span className={classes.text}>Актуальные режимы работы пунктов выдачи  </span>
                    <span className={classes.linkSpan}>Подробнее о режиме работы</span>
                           </div>
                </div>
                <div className={classes.info__item}>
                {/* <ContactSupportIcon /> */}
                <div className={classes.itemImg}>
                <img src="https://pngimg.com/uploads/credit_card/credit_card_PNG207.png" />
                </div>
                    <div className={classes.txt}>
                    <span className={classes.text}>Используйте безопасные методы оплаты  </span>
                    <span className={classes.linkSpan}>Подробнее о методах оплаты</span>
                           </div>
                </div>
                 
                <div className={classes.info__item}>
                <div className={classes.itemImg}>
                <img src="https://www.pngmart.com/files/7/Mobile-Phone-PNG-Photos.png" />
                <ContactSupportIcon />
                </div>
                    <div className={classes.txt}>
                    <span className={classes.text}>Ответы на часто задаваемые вопросы  </span>
                    <span className={classes.linkSpan}>Читать ответы</span>
                           </div>
                </div>
          
            </div>
            <Proposal />
            <GoodsSlider tovary={props.state.tovary}/>
            <GoodsSlider2 />
        </div>
    )
}

export default MainContent;