import React from 'react';
import Header from './components/Header/Header';
import './App.scss';
import { Route } from 'react-router-dom';
import MainContent from './components/MainContent/MainContent';
import GoodCard from './components/GoodCard/GoodCard'; 
import NavBar from './components/NavBar/NavBar';
import Category from './components/Category/Category';
import HeaderLogo from './components/NavBar/Logo/HeaderLogo/HeaderLogo';

function App(props) {
 
 

  return (
    <div className="App">
       <div className=' appWrapp'>
       <Header icons={props.state.icons}/>
       <div className='main'>
       <ul className='sidebar'>
           <HeaderLogo />
          {props.state.sidebar.map(el => <NavBar name={el.name} path={el.path} icon={el.icon} sub={el.sub}/>)}
       </ul>
       <div className='mainContent'>
         <Route exact path='/pop' render={ () => <MainContent state={props.state}/> }/>

         {props.state.tovary.map( el => {
         
           return (
            <Route path={el.path} render={ () => <GoodCard img={el.img}
             discription={el.discription}
             state={props.state}
             name={el.name}
             price={el.price}
             specifications={el.specifications}
             images={el.images}

             /> }/>
           )
               
         })}
         <Route path='/category' render={ () => <Category state={props.state} /> }/>
       </div>
       </div>
       </div>
        
    </div>
  );
}

export default App;
