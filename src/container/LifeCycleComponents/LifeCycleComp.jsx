import React, { Component } from 'react';
import './LifeCycleComp.css';
export default class LifeCycleComp extends Component {
   constructor(props) {
      super(props);
      this.state = {
         count: 1,
      };
      console.log('constructor');
   }

   static getDerivedStateFromProps(props, state) {
      console.log('getDerivedStateFromProps');
      return null;
   }

   componentDidMount() {
      console.log('componentdDidMount');

      setTimeout(() => {
         this.setState({
            count: 2,
         });
      }, 2000);
   }

   shouldComponentUpdate(nextProps, nextState) {
      console.log('should Component Update');
      return true;
   }

   getSnapshotBeforeUpdate(prevProps, prevState) {
      console.log('getSnapshotBeforeUpdate');
      return null;
   }

   componentDidUpdate(prevProps, prevState, snpshot) {
      console.log('componentDidUpdate');
   }

   componentWillUnmount() {
      console.log('component will unmoun');
   }
   render() {
      return (
         <div>
            <h1>LifeCycle Component</h1>
            <button className="btn">LifeCycle {this.state.count}</button>
         </div>
      );
   }
}
