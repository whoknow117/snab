import React from 'react';
import classes from './GoodsSlider2.module.scss';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import PlaceIcon from '@material-ui/icons/Place';
import Rating from '../../GoodCard/CardContent/Discription/Rating/Rating';











const GoodsSlider2 = () => {




    return (
        <div className={classes.goodsSlider}>
            <div className={classes.goodsSlider__title}>
                Новинки
            </div>
            <div className={classes.wrap}>
                <div className={classes.goodsSliderItem}>

                    <div>
                    <div className={classes.sticker}>Новинка</div>
                        <div className={classes.image}>
                            <img src="https://aquavin.com.ua/upload/iblock/bef/bef1c0571b678877adf934cba5441d8d.jpeg" />
                        </div>
                         
                        <div className={classes.name}>Насосная станция LEO (Aquatica) 776111
 </div>
                        <Rating />
                        <div className={classes.price}>
                            1234 грн
 </div>
                    </div>
                    <button className={classes.btn}>В корзину</button>
                </div>

                <div className={classes.goodsSliderItem}>

                    <div>
                    <div className={classes.sticker}>Новинка</div>
                        <div className={classes.image}>
                            <img src="https://storgom.ua/cache/i/products/6/39903/11.1900x1200.jpeg" />
                        </div>
                     
                        <div className={classes.name}>Контроллер давления Aquatica DSK1Р (779557) электронный

 
</div>
                        <Rating />
                        <div className={classes.price}>
                            850 грн 
</div>
                    </div>
                    <button className={classes.btn}>В корзину</button>
                </div>

                <div className={classes.goodsSliderItem}>

                    <div>
                    <div className={classes.sticker}>Новинка</div>
                        <div className={classes.image}>
                            <img src="https://bretta.com.ua/image/cache/Tovar/haiba/gudini.chr-018.%28hb7396056c-m7396%29-bretta-com-ua-1500x1500.jpg" />
                        </div>
                    
                        <div className={classes.name}>Смеситель для кухни Haiba Lexus 100ac 
</div>
                        <Rating />
                        <div className={classes.price}>
                            1240грн
</div>
                    </div>
                    <button className={classes.btn}>В корзину</button>
                </div>

                <div className={classes.goodsSliderItem}>

                    <div>
                    <div className={classes.sticker}>Новинка</div>
                        <div className={classes.image}>
                            <img src="https://kulibin.com.ua/upload/resize_cache/iblock/5ee/351_351_1/18143.jpg" />
                        </div>
                        
                        <div className={classes.name}>Шланг поливочный Gardena 3\4 12345
</div>
                        <Rating />
                        <div className={classes.price}>
                            690 грн
</div>
                    </div>
                    <button className={classes.btn}>В корзину</button>
                </div>

                <div className={classes.goodsSliderItem}>

                    <div>
                        <div className={classes.sticker}>Новинка</div>
                        <div className={classes.image}>
                            <img src="https://images.ua.prom.st/1137615972_pistolet-dlya-poliva.jpg" />
                        </div>
                   
                        <div className={classes.name}>Пистолет для полива Presto-PS насадка на шланг металл (7205)
  
                      </div>
                        <Rating />
                        <div className={classes.price}>
                            43 грн
                       </div>
                       <button className={classes.btn}>В корзину</button>
                    </div>
                </div>
                <div className={classes.goodsSliderItem}>

<div>
<div className={classes.sticker}>Новинка</div>
    <div className={classes.image}>
        <img src="https://arh-group.ru/upload/iblock/6e2/karcher_k_5_premium_minimoyka.jpg" />
    </div>
   
    <div className={classes.name}>Пистолет для полива Presto 7240
  </div>
    <Rating />
    <div className={classes.price}>
        7640 грн
   </div>
   <button className={classes.btn}>В корзину</button>
</div>
</div>
            </div>


        </div>
    )
}

export default GoodsSlider2;