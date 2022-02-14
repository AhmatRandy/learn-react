import React, { Component } from 'react';
import logo from './logo.svg';

class CardProduct extends Component {
   state = {
      order: 0,
   };

   handleCounterChange = (newValue) => {
      this.props.onCounterChange(newValue);
   };

   handlePlus = () => {
      this.setState(
         {
            order: this.state.order + 1,
         },
         () => {
            this.handleCounterChange(this.state.order);
         }
      );
   };

   handleMinus = () => {
      if (this.state.order > 0) {
         this.setState(
            {
               order: this.state.order - 1,
            },
            () => this.handleCounterChange(this.state.order)
         );
      }
   };

   render() {
      return (
         <div className="card">
            <div className="img-thumb">
               <img src={logo} className="App-logo" alt="logo" />

               <p className="product-title">Title Porduct</p>
               <p className="product-price">Product Price</p>
               <div className="counter">
                  <button className="plus" onClick={this.handlePlus}>
                     +
                  </button>
                  <input type="text" value={this.state.order} />
                  <button className="minus" onClick={this.handleMinus}>
                     -
                  </button>
               </div>
            </div>
         </div>
      );
   }
}

export default CardProduct;
