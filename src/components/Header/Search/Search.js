import React from 'react';
import classes from './Search.module.scss';
import SearchIcon from '@material-ui/icons/Search';

const Search = () => {

    return (
        <div className={classes.searchBlock}>
            <div className={classes.wrap}>
                <form className={classes.form}>

                    <div className={classes.inputWrap}>
                        <input type="text" placeholder="Например: светодиодный светильник" />
                    </div>

                    <div className={classes.btn}>
                        <SearchIcon />

                    </div>


                </form>
               
            </div>
        </div>
    )
}

export default Search;