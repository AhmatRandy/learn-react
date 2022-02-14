import React, { Component } from 'react';
import Post from '../../components/post/Post';
import axios from 'axios';

import './BlogPost.css';

export default class BlogPost extends Component {
   state = {
      posts: [],
   };

   handleRemove = (data) => {
      console.log(data);
   };
   componentDidMount() {
      axios.get('http://localhost:3004/posts').then((result) => {
         this.setState({
            posts: result.data,
         });
      });
   }

   render() {
      return (
         <div className="container-blog">
            {/* <p className="section-title">Blog Post</p> */}
            {this.state.posts.map((post) => {
               return (
                  <Post
                     key={post.id}
                     title={post.title}
                     body={post.body}
                     remove={this.handleRemove}
                  />
               );
            })}
         </div>
      );
   }
}
