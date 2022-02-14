import React from 'react';
import logo from './logo.svg';
import './CardComp.css';

const CardComponent = (props) => {
   return (
      <div className="card-wrapper">
         <div className="img-wrapper">
            <img src={logo} className="App-logo" alt="logo" />
         </div>
         <div className="desc">
            <h3 className="title">{props.title} </h3>
            <p className="desc">{props.desc}</p>
            <p className="time">9 December 2022</p>
         </div>
      </div>
   );
};
CardComponent.defaultProps = {
   title: 'undifine',
   desc: 'undifine',
};

export default CardComponent;
