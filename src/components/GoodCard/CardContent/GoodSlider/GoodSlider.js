import React, {Component} from 'react';
import classes from './GoodSlider.module.scss';
 

class GoodSlider extends Component {

    constructor(props) {
        super();
        this.state = {
            images: props.images,
            currentIndex: 0

        }
        this.__setCurrentIndex = this.__setCurrentIndex.bind(this);
    }

     

    __setCurrentIndex(num) {

         

    }

    
    render(){
        return (


            <div className={classes.goodSlider}>
                <div className={classes.mainGoodImage}>
                <img src={this.props.img} />
                </div>
                <div className={classes.itemWrapper}>
                {this.state.images.map( (el) => {
                    return (
                        <div className={classes.item} data-direction={el.id}>
                            <img src={el.img} alt="#" />
                        </div>
                    )
                })}
                </div>
            </div>
             
   
            
     
    )
}
    }

    

export default GoodSlider;