import React, { Component } from 'react';
import classes from './Slideshow.module.scss';

 

 


class Slideshow extends Component {

    
    constructor(props) {
        super();


        this.state = {
            images: props.images,
            currentIndex: 0,

        };

        this.nextSlideHandler = this.nextSlideHandler.bind(this);
        this.__setIndex = this.__setIndex.bind(this);
        this.startSlideShow = this.startSlideShow.bind(this);


    }
    __setIndex(num) {
        if (num >= this.state.images.length) {

            this.state.currentIndex = 1;
            this.setState({currentIndex: this.state.currentIndex});

        }

        else if (num < 0) {
            this.state.currentIndex = this.state.images.length - 1;
        } else {

            this.state.currentIndex = num;
        }
        this.setState({ currentIndex: this.state.currentIndex });
    }


    startSlideShow() {
       setInterval(() => {
            this.__setIndex(this.state.currentIndex + 1)
        },4000);

    }

    nextSlideHandler(e) {


        this.startSlideShow();
        if (e.currentTarget.dataset.direction === 'next') {
            this.__setIndex(this.state.currentIndex + 1);

         
             
        } else {

            this.__setIndex(this.state.currentIndex - 1);

        }
        this.setState({ currentIndex: this.state.currentIndex });
    }
     
    render() {
        return (
            <div  className={classes.slider}>

                <div className={classes.image}>
                    <img src={this.state.images[this.state.currentIndex]} alt="#"/>
                </div>
                <div className={classes.sliderButtons}>

                    <button data-direction="prev" onClick={this.nextSlideHandler.bind(this)} >
                        Prev
                    </button>

                    <button data-direction="next" onClick={this.nextSlideHandler.bind(this)}>
                        Next
                    </button>


                </div>
            </div>

        )
    }


}

export default Slideshow;









