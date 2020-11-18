import React from 'react';
import classes from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';

import DropDownMenu from './DropdownMenu/DropdownMenu';
import HeaderLogo from './Logo/HeaderLogo/HeaderLogo';
import { clickNavbar, onMouseOver, onMouseLeave, onDropdownLeave, onLinkOver, onLinkLeave, onOverDropDown } from '../../redux/store/store';

const NavBar = (props) => {

    let link = React.createRef();
    let modalBackground  = React.createRef();
  

    let disableLinkColor = (e) => {
        link.current.style.color = '#000';
        link.current.style.background = '#fff';

    }
    let onLeave = (e) => {
        link.current.style.color = '#000';
        link.current.style.background = '#fff';

    }
    let onHover = (e) => {
        link.current.style.color = '#fff';
        link.current.style.background = 'rgb(250, 120, 33)';
        modalBackground.current.style.display = 'block';

    }

    let activeLinkColor = (e) => {
        link.current.style.color = '#fff';
        link.current.style.background = 'rgb(250, 120, 33)';

    }

    let closeAllMenu = (e) => {

        let background = e.target;
        background.style.display = 'none';

    }

    

    return (

        <li className={classes.item}>

            <NavLink ref={link} to={props.path} onMouseLeave={onLeave} onMouseEnter={onHover} activeClassName={classes.active}>
                <div className={classes.icon}>

                    {props.icon}
                </div>
                <div className={classes.text}>
                    {props.name}
                </div>

            </NavLink>
            <div   className={classes.popSidebar} onMouseLeave={disableLinkColor} onMouseEnter={activeLinkColor}>
                <div className={classes.popWrap}>
                    {props.sub.map(el => <DropDownMenu head={el.head}
                        dispatch={props.dispatch}
                        pathName={el.path}
                        item1={el.item1}
                        item2={el.item2}
                        item3={el.item3}
                        item4={el.item4}
                        item5={el.item5}
                        item6={el.item6}
                        item7={el.item7}
                        item8={el.item8}
                        item9={el.item9}
                        item10={el.item10}
                         />)}
                </div>

                {/* <div className={classes.image}>
                             <img src='https://image.freepik.com/free-vector/_81522-4107.jpg'/>
                         </div> */}
                <div ref={modalBackground} onMouseEnter={closeAllMenu} className={classes.blackout}></div>
            </div>

        </li>



    )
}

export default NavBar;