import React from 'react';
import classes from './Category.module.scss';
import BreadCrumbs from './BreadCrumbs/BreadCrumbs';
import Filter from '../Filter/Filter';
import Goods from './Goods/Goods';


const Category = (props) => {



    return (

        <div className={classes.сategories}>
            <div className={classes.mainContent}>
                <div className={classes.top}>
                    <BreadCrumbs />
                </div>
                <h3>Электрика</h3>
                  <div className={classes.goodsWrap}>
                  {props.state.goods.map( el => <Goods id={el.id} img={el.img} name={el.name}/>)}
                  </div>

            </div>
            <Filter />
        </div>




    )
}

export default Category;