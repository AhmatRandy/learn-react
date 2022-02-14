import React, { Component, Fragment } from 'react';
import CardProduct from '../CardProduct/CardProduct';
import './Product.css';
class Product extends Component {
   state = {
      order: 0,
   };

   handleCounterChange = (newValue) => {
      this.setState({
         order: newValue,
      });
   };

   render() {
      return (
         <Fragment>
            <div className="header">
               <div className="logo">
                  <p className="logo">H!</p>
               </div>
               <div className="troley">
                  <span>Rp.{this.state.order}</span>
               </div>
            </div>
            <CardProduct
               onCounterChange={(value) => this.handleCounterChange(value)}
            />
         </Fragment>
      );
   }
}

export default Product;
