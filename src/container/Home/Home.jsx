import React, { Component } from 'react';
// import CardComponent from '../../components/CardComponents/CardComponent';
// import LifeCycleComp from '../LifeCycleComponents/LifeCycleComp';
// import Product from '../ProductCompinents/Product';
import './Home.css';
import BlogPost from '../BlogPost/BlogPost';

class Home extends Component {
   state = {
      showComp: true,
   };
   componentDidMount() {
      // setTimeout(() => {
      //    this.setState({
      //       showComp: false,
      //    });
      // }, 15000);
   }
   render() {
      return (
         <>
            {/* <div className="container">
               <CardComponent title="Front-end engineer" desc="React" />
               <CardComponent title="Back-end engineer" desc="Python" />
               <CardComponent title="Web Dev" desc="AWS" />
               <CardComponent title="UI/UX" desc="Figma" />
               <CardComponent />
            </div> */}
            {/* <Product /> */}

            {/* {this.state.showComp ? <LifeCycleComp /> : null} */}
            <h1>Blog Post</h1>

            <BlogPost />
         </>
      );
   }
}
export default Home;
