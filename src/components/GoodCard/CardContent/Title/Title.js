import React from 'react';
import classes from './Title.module.scss';
 


const Title = (props) => {

    return (

        <div className={classes.text}>
             {props.name} 
        </div>
            
            
     
    )
}

export default Title;